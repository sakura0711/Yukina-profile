<script setup lang="ts">
const categories = [
    {
        label: 'Frontend',
        icon: 'web',
        items: ['Vue 3', 'Nuxt', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap']
    },
    {
        label: 'Mobile',
        icon: 'smartphone',
        items: ['Android Native', 'Flutter']
    },
    {
        label: 'Backend / API',
        icon: 'dns',
        items: ['RESTful API', 'Pinia', 'Axios']
    },
    {
        label: 'AI / ML',
        icon: 'psychology',
        items: ['MediaPipe', 'YOLOv8', 'Claude Code', 'Codex']
    },
    {
        label: 'DevOps / Tools',
        icon: 'build',
        items: ['Git', 'Linux', 'Figma', 'WordPress']
    },
    {
        label: 'Design / Media',
        icon: 'palette',
        items: ['Photoshop', 'Premiere Pro']
    },
    {
        label: 'Certification',
        icon: 'verified',
        items: ['ISO 27001 ISMS 主導稽核員']
    }
]
</script>

<template>
    <section id="skills" class="pb-20">
        <div class="mx-auto max-w-[80vw]">

            <div class="mb-10 flex items-center gap-2">
                <span class="material-symbols-outlined">extension</span>
                <h2 class="font-serif text-2xl text-ink-900 dark:text-ink-100">技能</h2>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="cat in categories" :key="cat.label">
                    <div class="mb-2 flex items-center gap-1.5">
                        <span class="material-symbols-outlined text-[18px] text-ink-400">{{ cat.icon }}</span>
                        <h3 class="text-base font-medium text-ink-900 dark:text-ink-100">{{ cat.label }}</h3>
                    </div>
                    <p class="text-base leading-relaxed text-ink-600 dark:text-ink-400">
                        {{ cat.items.join(', ') }}
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>
