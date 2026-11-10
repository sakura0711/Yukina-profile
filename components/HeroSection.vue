<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()
const scrollProgress = ref(0)
const canvasSize = ref(200)
const moduleCount = ref(0)
const isDark = useDark()

interface Cell {
    tree: 'leaf' | 'trunk' | 'none'
    dark: boolean
    ox: number
    oy: number
    shade: number
}

const grid = ref<Cell[][]>([])

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
}

function ease(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function treeType(r: number, c: number, n: number): 'leaf' | 'trunk' | 'none' {
    const cx = (n - 1) / 2
    const cy = n * 0.35
    const rx = n * 0.4
    const ry = n * 0.3
    const dx = (c - cx) / rx
    const dy = (r - cy) / ry
    const d = Math.sqrt(dx * dx + dy * dy)
    const noise = Math.sin(r * 5.3 + c * 3.7) * 0.1 + Math.cos(r * 2.1 - c * 4.5) * 0.07

    if (d < 1 + noise && r < n * 0.68) return 'leaf'

    const tw = n * 0.07
    if (Math.abs(c - cx) <= tw && r >= n * 0.6 && r < n * 0.92) return 'trunk'
    if (r >= n * 0.87 && r < n * 0.96) {
        const bw = tw + (r - n * 0.87) * 1.5
        if (Math.abs(c - cx) <= bw) return 'trunk'
    }

    return 'none'
}

function updateCanvasSize() {
    const s = window.innerWidth < 768 ? 200 : 380
    if (s !== canvasSize.value) {
        canvasSize.value = s
        draw()
    }
}

onMounted(async () => {
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    const QR = (await import('qrcode-generator')).default
    const qr = QR(0, 'L')
    qr.addData('https://github.com/sakura0711')
    qr.make()

    const n = qr.getModuleCount()
    moduleCount.value = n
    const g: Cell[][] = []

    for (let r = 0; r < n; r++) {
        const row: Cell[] = []
        for (let c = 0; c < n; c++) {
            const tt = treeType(r, c, n)
            row.push({
                tree: tt,
                dark: qr.isDark(r, c),
                ox: tt !== 'none' ? (Math.random() - 0.5) * 4 : 0,
                oy: tt !== 'none' ? (Math.random() - 0.5) * 4 : 0,
                shade: Math.random()
            })
        }
        g.push(row)
    }

    grid.value = g
    draw()
    window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', updateCanvasSize)
})

watch(isDark, () => draw())

let raf = 0

function onScroll() {
    if (!sectionRef.value) return
    const rect = sectionRef.value.getBoundingClientRect()
    const travel = rect.height - window.innerHeight
    scrollProgress.value = Math.max(0, Math.min(1, -rect.top / travel))
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(draw)
}

function draw() {
    const canvas = canvasRef.value
    if (!canvas || !grid.value.length) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const SIZE = canvasSize.value
    const dpr = window.devicePixelRatio || 1
    canvas.width = SIZE * dpr
    canvas.height = SIZE * dpr
    canvas.style.width = SIZE + 'px'
    canvas.style.height = SIZE + 'px'
    ctx.scale(dpr, dpr)

    const t = ease(Math.max(0, Math.min(1, (scrollProgress.value - 0.15) / 0.6)))
    const n = moduleCount.value
    const cs = SIZE / n

    ctx.clearRect(0, 0, SIZE, SIZE)

    const dark = isDark.value
    const bgR = dark ? 28 : 250, bgG = dark ? 25 : 249, bgB = dark ? 23 : 247
    const qrR = dark ? 245 : 28, qrG = dark ? 245 : 25, qrB = dark ? 244 : 23

    if (t > 0.05) {
        ctx.fillStyle = `rgba(${bgR},${bgG},${bgB},${Math.min(1, t / 0.5)})`
        ctx.beginPath()
        ctx.roundRect(-4, -4, SIZE + 8, SIZE + 8, 12)
        ctx.fill()
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const cell = grid.value[r][c]
            const isTree = cell.tree !== 'none'
            if (!isTree && !cell.dark) continue

            let a = 0
            let R = 0, G = 0, B = 0
            let ox = 0, oy = 0

            if (isTree && cell.dark) {
                const tR = cell.tree === 'leaf' ? lerp(30, 65, cell.shade) : 101
                const tG = cell.tree === 'leaf' ? lerp(110, 155, cell.shade) : 67
                const tB = cell.tree === 'leaf' ? lerp(30, 55, cell.shade) : 33
                R = lerp(tR, qrR, t); G = lerp(tG, qrG, t); B = lerp(tB, qrB, t)
                a = 1
                ox = cell.ox * (1 - t); oy = cell.oy * (1 - t)
            } else if (isTree) {
                R = cell.tree === 'leaf' ? lerp(30, 65, cell.shade) : 101
                G = cell.tree === 'leaf' ? lerp(110, 155, cell.shade) : 67
                B = cell.tree === 'leaf' ? lerp(30, 55, cell.shade) : 33
                a = Math.max(0, 1 - t * 2)
                ox = cell.ox * (1 - t); oy = cell.oy * (1 - t)
            } else {
                R = qrR; G = qrG; B = qrB
                a = Math.max(0, (t - 0.35) / 0.65)
            }

            if (a < 0.01) continue

            ctx.globalAlpha = a
            ctx.fillStyle = `rgb(${R | 0},${G | 0},${B | 0})`

            const s = cs * lerp(0.6, 0.93, t)
            const pad = (cs - s) / 2
            const x = c * cs + pad + ox
            const y = r * cs + pad + oy
            const rad = lerp(s / 2, Math.min(2, s * 0.12), t)

            ctx.beginPath()
            ctx.roundRect(x, y, s, s, rad)
            ctx.fill()
        }
    }
    ctx.globalAlpha = 1
}
</script>

<template>
    <section ref="sectionRef" class="relative" style="height: 180vh">
        <div class="sticky top-0 flex h-screen flex-col justify-center">
            <div class="mx-auto w-full max-w-[60vw]">
                <div class="flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
                    <div>
                        <h1 class="audiowide-regular text-[clamp(3.5rem,12vw,8rem)] leading-[0.9] text-ink-900 dark:text-ink-100">
                            SIANG-JYUN
                        </h1>
                        <p class="mt-8 leading-8 text-[15px] md:text-[20px] text-ink-400">
                            Don't fight the problem, decide it. <br/>
                            - George C. Marshall</p>
                    </div>

                    <div class="flex flex-col items-center gap-2">
                        <a href="https://github.com/sakura0711" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                            <canvas ref="canvasRef" class="pointer-events-none" />
                        </a>
                        <p
                            class="text-[15px] md:text-[20px] text-ink-400 transition-opacity duration-500"
                            :style="{ opacity: scrollProgress > 0.85 ? 1 : 0 }"
                        >
                            Scan QR Code to visit GitHub
                        </p>
                    </div>
                </div>

            </div>

            <div
                class="arrow-float absolute bottom-[100px] left-1/2 -translate-x-1/2 transition-opacity duration-500"
                :style="{ opacity: scrollProgress < 0.2 ? 1 : 0 }"
            >
                <span class="arrow-glow relative flex items-center justify-center text-2xl tracking-widest text-ink-300">
                    ↓
                </span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.arrow-glow::before {
    content: '';
    position: absolute;
    inset: -12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 162, 158, 0.15) 0%, transparent 70%);
    filter: blur(8px);
    animation: breathe 3s ease-in-out infinite;
}

:root.dark .arrow-glow::before {
    background: radial-gradient(circle, rgba(168, 162, 158, 0.1) 0%, transparent 70%);
}

@keyframes breathe {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
}

.arrow-float {
    animation: float 2.5s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-8px); }
}
</style>
