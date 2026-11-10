<script setup lang="ts">
const projects = [
    {
        name: 'VecStruct',
        description: '一站式 AI 平台，支援 100+ 模型調用與文件知識庫。',
        tags: ['Vue.js', 'TypeScript', 'RESTful API'],
        link: 'https://vecstruct.com',
        image: '/images/projects/vecstruct.png'
    },
    {
        name: '農地契作管理系統',
        description: '服務新豐碾米廠，從零搭建前端架構，已上線生產使用。',
        tags: ['Vue 3', 'Vite', 'Pinia', 'Bootstrap 5'],
        link: null,
        image: '/images/projects/farmland.png'
    },
    {
        name: '孕婦運動輔助 App',
        description: 'MediaPipe 即時動作偵測，已上架 Android / iOS。',
        tags: ['MediaPipe', 'Android Native'],
        link: null,
        image: '/images/projects/pregnancy-app.png'
    },
    {
        name: '購物車電商網站',
        description: 'WordPress 全站建置，含購物車與結帳流程。',
        tags: ['WordPress'],
        link: 'https://jushop.vmsn.dev',
        image: '/images/projects/jushop.png'
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
                <article v-for="project in projects" :key="project.name">
                    <div class="aspect-[16/9] overflow-hidden bg-ink-100 dark:bg-ink-800">
                        <img
                            :src="project.image"
                            :alt="project.name"
                            class="h-full w-full object-cover"
                            loading="lazy"
                            @error="($event.target as HTMLImageElement).style.display = 'none'"
                        />
                    </div>
                    <div class="mt-3 flex items-baseline gap-2">
                        <h2 class="text-lg font-medium text-ink-900 md:text-base dark:text-ink-100">
                            {{ project.name }}
                        </h2>
                        <a
                            v-if="project.link"
                            :href="project.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-[14px] text-ink-400 transition-colors hover:text-ink-900 md:text-base dark:hover:text-ink-100"
                        >
                            ↗
                        </a>
                    </div>
                    <p class="mt-1 text-[14px] text-ink-600 md:text-base dark:text-ink-400">{{ project.description }}</p>
                    <p class="mt-1 text-[13px] text-ink-400 md:text-[14px]">{{ project.tags.join(', ') }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
