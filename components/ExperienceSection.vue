<script setup lang="ts">
const { t, tm } = useI18n()

const experiences = computed(() =>
    (tm('experience.items') as any[]).map(item => ({
        title: item.title,
        company: item.company,
        period: item.period,
        points: item.points
    }))
)
</script>

<template>
    <section id="experience" class="pb-20">
        <div class="mx-auto max-w-[80vw] md:max-w-[70vw]">
            <div class="mb-10 flex items-center gap-2">
                <span class="material-symbols-outlined">commit</span>
                <h2 class="font-serif text-2xl text-ink-900 dark:text-ink-100">{{ t('experience.title') }}</h2>
            </div>

            <div class="space-y-8">
                <article v-for="(exp, idx) in experiences" :key="idx">
                    <div class="flex items-baseline justify-between gap-4">
                        <h3 class="text-base font-medium text-ink-900 dark:text-ink-100">{{ exp.title }}</h3>
                        <span class="shrink-0 text-base text-ink-400">{{ exp.period }}</span>
                    </div>
                    <p class="mt-0.5 text-base text-ink-500">{{ exp.company }}</p>
                    <ul class="mt-2 space-y-0.5">
                        <li
                            v-for="(point, pIdx) in exp.points"
                            :key="pIdx"
                            class="text-base text-ink-600 dark:text-ink-400"
                        >
                            {{ point }}
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    </section>
</template>
