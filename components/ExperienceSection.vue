<script setup lang="ts">
const experiences = [
    {
        title: '共同創辦人 / 前端工程師',
        company: '瓦默思網路有限公司',
        period: '2025.10 — 至今',
        points: [
            '獨立開發 VecStruct AI 平台官網前端',
            '與後端協作制定 API 規格，完成 RESTful API 串接',
            'MediaPipe 影像辨識 App（Android / iOS 雙平台上架）'
        ]
    },
    {
        title: '智慧醫療 AMR 工程助理',
        company: '工業技術研究院',
        period: '2024.08 — 2025.02',
        points: [
            'AMR 醫院場域路徑驗證與端到端運行測試',
            'YOLOv8 動態障礙物情境測試',
            '跨團隊溝通與數據記錄分析'
        ]
    },
    {
        title: '前端工程師',
        company: '義守大學 USR 產學合作',
        period: '2023.09 — 2025.05',
        points: [
            'Vue 3 + Vite + Bootstrap 5 農地契作管理系統',
            '系統已上線投入生產使用'
        ]
    },
    {
        title: '前端網頁維護',
        company: '義守大學',
        period: '2023.05 — 2025.02',
        points: ['校園網站公告系統維護與效能優化']
    }
]
</script>

<template>
    <section id="experience" class="pb-20">
        <div class="mx-auto max-w-[80vw]">
            <div class="mb-10 flex items-center gap-2">
                <span class="material-symbols-outlined">commit</span>
                <h2 class="font-serif text-2xl text-ink-900 dark:text-ink-100">經歷</h2>
            </div>

            <div class="space-y-8">
                <article v-for="exp in experiences" :key="exp.company">
                    <div class="flex items-baseline justify-between gap-4">
                        <h3 class="text-base font-medium text-ink-900 dark:text-ink-100">{{ exp.title }}</h3>
                        <span class="shrink-0 text-base text-ink-400">{{ exp.period }}</span>
                    </div>
                    <p class="mt-0.5 text-base text-ink-500">{{ exp.company }}</p>
                    <ul class="mt-2 space-y-0.5">
                        <li
                            v-for="point in exp.points"
                            :key="point"
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
