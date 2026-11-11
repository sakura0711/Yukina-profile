<script setup lang="ts">
const { t } = useI18n()
const sectionRef = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()
const scrollProgress = ref(0)
const SIZE = 380
const canvasSize = ref(0)
const moduleCount = ref(0)

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

function updateCanvasSize() {
    canvasSize.value = Math.max(1, Math.min(SIZE, window.innerWidth - 48, window.innerHeight - 120))
    draw()
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

    const size = canvasSize.value
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = size + 'px'
    canvas.style.height = 'auto'
    ctx.scale(dpr, dpr)

    const t = ease(Math.max(0, Math.min(1, (scrollProgress.value - 0.15) / 0.6)))
    const n = moduleCount.value
    const cs = size / n

    ctx.clearRect(0, 0, size, size)

    if (t > 0.05) {
        ctx.fillStyle = `rgba(250,249,247,${Math.min(1, t / 0.5)})`
        ctx.beginPath()
        ctx.roundRect(-4, -4, size + 8, size + 8, 12)
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
                R = lerp(tR, 28, t); G = lerp(tG, 25, t); B = lerp(tB, 23, t)
                a = 1
                ox = cell.ox * (1 - t); oy = cell.oy * (1 - t)
            } else if (isTree) {
                R = cell.tree === 'leaf' ? lerp(30, 65, cell.shade) : 101
                G = cell.tree === 'leaf' ? lerp(110, 155, cell.shade) : 67
                B = cell.tree === 'leaf' ? lerp(30, 55, cell.shade) : 33
                a = Math.max(0, 1 - t * 2)
                ox = cell.ox * (1 - t); oy = cell.oy * (1 - t)
            } else {
                R = 28; G = 25; B = 23
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
    <section ref="sectionRef" class="relative" style="height: 250vh">
        <div class="sticky top-0 flex h-screen flex-col items-center justify-center gap-4 px-6">
            <p
                class="text-xs tracking-widest text-ink-400 transition-opacity duration-500"
                :style="{ opacity: scrollProgress < 0.3 ? 1 : 0 }"
            >
                {{ t('treeQR.scrollDown') }}
            </p>

            <canvas ref="canvasRef" class="block aspect-square max-w-full shrink-0" />

            <p
                class="text-lg text-ink-500 transition-opacity duration-500"
                :style="{ opacity: scrollProgress > 0.85 ? 1 : 0 }"
            >
                {{ t('treeQR.scanQR') }}
            </p>
        </div>
    </section>
</template>
