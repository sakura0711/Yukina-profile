<script setup lang="ts">
const { t, tm } = useI18n()

const selectedProject = ref<typeof localizedProjects.value[number] | null>(null)

const tags = [
    ['Vue.js', 'TypeScript', 'RESTful API', 'Nuxt', 'Tailwind CSS'],
    ['Vue 3', 'Vite', 'Pinia', 'Bootstrap 5'],
    ['MediaPipe', 'Android Native', 'Kotlin'],
    ['WordPress', 'WooCommerce', 'PHP']
]

const links = [
    'https://vecstruct.com',
    null,
    null,
    'https://jushop.vmsn.dev'
]

const images = [
    { src: '/images/projects/vecstruct.png', width: 1587, height: 991 },
    { src: '/images/projects/farmland.png', width: 1920, height: 1080 },
    { src: '/images/projects/pregnancy-app.png', width: 1672, height: 941 },
    { src: '/images/projects/jushop.png', width: 1972, height: 1120 }
]

const localizedProjects = computed(() =>
    (tm('projects.items') as any[]).map((item, i) => ({
        name: item.name,
        description: item.description,
        role: item.role,
        period: item.period,
        details: item.details,
        tags: tags[i],
        link: links[i],
        image: images[i].src,
        imageWidth: images[i].width,
        imageHeight: images[i].height
    }))
)

function open(project: typeof localizedProjects.value[number]) {
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
</script>

<template>
    <section id="projects" class="pb-20">
        <div class="mx-auto max-w-[80vw] md:max-w-[70vw]">

            <div class="mb-10 flex items-center gap-4">
                <span class="material-symbols-outlined">polymer</span>
                <h2 class="font-serif text-2xl text-ink-900 dark:text-ink-100">{{ t('projects.title') }}</h2>
            </div>
            <div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
                <article
                    v-for="project in localizedProjects"
                    :key="project.name"
                    class="group cursor-pointer"
                    @click="open(project)"
                >
                    <div class="aspect-[16/9] overflow-hidden bg-ink-100 dark:bg-ink-800 rounded-2xl">
                        <img
                            :src="project.image"
                            :alt="project.name"
                            :width="project.imageWidth"
                            :height="project.imageHeight"
                            class="h-full w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                            :loading="project === localizedProjects[0] ? 'eager' : 'lazy'"
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
                                    v-for="(item, idx) in selectedProject.details"
                                    :key="idx"
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
