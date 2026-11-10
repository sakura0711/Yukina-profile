<script setup lang="ts">
const selectedProject = ref<typeof projects[number] | null>(null)

function open(project: typeof projects[number]) {
    selectedProject.value = project
    document.body.style.overflow = 'hidden'
}

function close() {
    selectedProject.value = null
    document.body.style.overflow = ''
}

function onOverlay(e: MouseEvent) {
    if (e.target === e.currentTarget) close()
}

function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

const projects = [
    {
        name: 'VecStruct',
        description: '一站式 AI 平台，支援 100+ 模型調用與文件知識庫。',
        tags: ['Vue.js', 'TypeScript', 'RESTful API', 'Nuxt', 'Tailwind CSS'],
        link: 'https://vecstruct.com',
        image: '/images/projects/vecstruct.png',
        role: '共同創辦人 / 前端工程師',
        period: '2025.10 — 至今',
        details: [
            '獨立開發平台官網前端，從零搭建元件架構',
            '與後端協作制定 API 規格，完成 RESTful API 串接',
            '支援 100+ AI 模型調用與文件知識庫功能',
            '響應式設計，支援桌面與行動裝置'
        ]
    },
    {
        name: '農地契作管理系統',
        description: '服務新豐碾米廠，從零搭建前端架構，已上線生產使用。',
        tags: ['Vue 3', 'Vite', 'Pinia', 'Bootstrap 5'],
        link: null,
        image: '/images/projects/farmland.png',
        role: '前端工程師',
        period: '2023.09 — 2025.05',
        details: [
            '義守大學 USR 產學合作專案',
            '從零搭建前端架構，獨立負責全部頁面開發',
            '農地契作資料 CRUD 與報表視覺化',
            '系統已上線投入生產使用'
        ]
    },
    {
        name: '孕婦運動輔助 App',
        description: 'MediaPipe 即時動作偵測，已上架 Android / iOS。',
        tags: ['MediaPipe', 'Android Native', 'Kotlin'],
        link: null,
        image: '/images/projects/pregnancy-app.png',
        role: '行動端開發',
        details: [
            'MediaPipe 即時人體骨架偵測與動作判定',
            '針對孕婦安全運動設計動作引導流程',
            '已上架 Google Play 與 App Store'
        ]
    },
    {
        name: '購物車電商網站',
        description: 'WordPress 全站建置，含購物車與結帳流程。',
        tags: ['WordPress', 'WooCommerce', 'PHP'],
        link: 'https://jushop.vmsn.dev',
        image: '/images/projects/jushop.png',
        role: '全端開發',
        details: [
            'WordPress + WooCommerce 全站建置',
            '購物車、結帳、金流串接完整流程',
            '商品管理與訂單追蹤後台'
        ]
    }
]
</script>

<template>
    <section id="projects" class="pb-20">
        <div class="mx-auto max-w-[80vw]">

            <div class="mb-10 flex items-center gap-2">
                <span class="material-symbols-outlined">polymer</span>
                <h2 class="font-serif text-2xl text-ink-900 dark:text-ink-100">參與過的專案</h2>
            </div>
            <div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
                <article
                    v-for="project in projects"
                    :key="project.name"
                    class="group cursor-pointer"
                    @click="open(project)"
                >
                    <div class="aspect-[16/9] overflow-hidden bg-ink-100 dark:bg-ink-800">
                        <img
                            :src="project.image"
                            :alt="project.name"
                            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            @error="($event.target as HTMLImageElement).style.display = 'none'"
                        />
                    </div>
                    <div class="mt-3 flex items-center gap-2">
                        <h2 class="text-lg font-medium text-ink-900 md:text-base dark:text-ink-100">
                            {{ project.name }}
                        </h2>
                        <span class="material-symbols-outlined text-[14px] text-ink-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-ink-500 dark:text-ink-600 dark:group-hover:text-ink-400">
                            arrow_forward
                        </span>
                    </div>
                    <p class="mt-1 text-[14px] text-ink-600 md:text-base dark:text-ink-400">{{ project.description }}</p>
                    <p class="mt-1 text-[13px] text-ink-400 md:text-[14px]">{{ project.tags.slice(0, 3).join(', ') }}</p>
                </article>
            </div>
        </div>
    </section>

    <Teleport to="body">
        <Transition name="modal">
            <div
                v-if="selectedProject"
                class="fixed inset-0 z-[60] flex items-center justify-center p-4"
                @click="onOverlay"
            >
                <div class="absolute inset-0 backdrop-blur-[2px]" @click="close" />

                <div class="relative flex w-full max-w-3xl flex-col overflow-hidden border rounded-lg border-ink-200/30 bg-ink-50 shadow-2xl md:flex-row dark:border-ink-700/30 dark:bg-ink-950" style="max-height: 85vh">

                    <div class="shrink-0 bg-ink-100/50 md:w-64 dark:bg-ink-800/50">
                        <div class="aspect-[4/3] overflow-hidden md:aspect-auto md:h-full">
                            <img
                                :src="selectedProject.image"
                                :alt="selectedProject.name"
                                class="h-full w-full object-cover"
                                @error="($event.target as HTMLImageElement).style.display = 'none'"
                            />
                        </div>
                    </div>

                    <div class="flex-1 overflow-y-auto p-6 md:p-8">
                        <button
                            class="absolute top-3 right-3 text-ink-300 transition-colors hover:text-ink-900 dark:text-ink-600 dark:hover:text-ink-100"
                            @click="close"
                        >
                            <span class="material-symbols-outlined text-[20px]">close</span>
                        </button>

                        <p class="text-sm text-ink-400">
                            {{ selectedProject.role }}<span v-if="selectedProject.period"> · {{ selectedProject.period }}</span>
                        </p>

                        <h3 class="mt-2 font-sans text-2xl text-ink-900 dark:text-ink-100">
                            {{ selectedProject.name }}
                        </h3>

                        <p class="mt-3 text-base leading-relaxed text-ink-600 dark:text-ink-400">
                            {{ selectedProject.description }}
                        </p>

                        <div v-if="selectedProject.details?.length" class="mt-5 border-t border-ink-200/50 pt-4 dark:border-ink-700/50">
                            <ul class="space-y-2">
                                <li
                                    v-for="item in selectedProject.details"
                                    :key="item"
                                    class="flex gap-2.5 text-base leading-relaxed text-ink-600 dark:text-ink-400"
                                >
                                    <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-300 dark:bg-ink-600" />
                                    {{ item }}
                                </li>
                            </ul>
                        </div>

                        <div class="mt-5 flex flex-wrap items-center gap-1.5">
                            <span class="material-symbols-outlined inline-flex h-[15px] w-[15px] shrink-0 items-center justify-center text-[15px] leading-none text-ink-500 dark:text-ink-400">extension</span>
                            <span
                                v-for="tag in selectedProject.tags"
                                :key="tag"
                                class=" px-0.5 py-0.5 font-mono text-[13px] text-ink-500 dark:text-ink-400"
                            >
                            <{{ tag }}>
                            </span>
                        </div>

                        <a
                            v-if="selectedProject.link"
                            :href="selectedProject.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-400 transition-colors hover:text-ink-900 dark:hover:text-ink-100"
                            @click.stop
                        >
                            {{ selectedProject.link.replace('https://', '') }}
                            <span class="material-symbols-outlined text-[14px]">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: all 0.2s ease;
}

.modal-enter-active > div:first-child,
.modal-leave-active > div:first-child {
    transition: opacity 0.2s ease;
}

.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
    transition: all 0.2s ease;
}

.modal-enter-from > div:first-child,
.modal-leave-to > div:first-child {
    opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
    opacity: 0;
    transform: scale(0.97) translateY(8px);
}
</style>
