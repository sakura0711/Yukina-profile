<script setup lang="ts">
const projects = [
    {
        name: 'VecStruct',
        description: '一站式 AI 平台，支援 100+ 模型調用與文件知識庫。',
        tags: ['Vue.js', 'TypeScript', 'RESTful API'],
        link: 'https://vecstruct.com'
    },
    {
        name: '農地契作管理系統',
        description: '服務新豐碾米廠，從零搭建前端架構，已上線生產使用。',
        tags: ['Vue 3', 'Vite', 'Pinia', 'Bootstrap 5'],
        link: null
    },
    {
        name: '孕婦運動輔助 App',
        description: 'MediaPipe 即時動作偵測，已上架 Android / iOS。',
        tags: ['MediaPipe', 'Android Native'],
        link: null
    },
    {
        name: '購物車電商網站',
        description: 'WordPress 全站建置，含購物車與結帳流程。',
        tags: ['WordPress'],
        link: 'https://jushop.vmsn.dev'
    }
]
</script>

<template>
    <section id="projects" class="pb-20">
        <div class="mx-auto max-w-3xl px-6">
            <h2 class="mb-10 font-serif text-2xl text-ink-900 dark:text-ink-100">作品</h2>

            <div class="space-y-6">
                <article v-for="project in projects" :key="project.name">
                    <div class="flex items-baseline gap-3">
                        <h3 class="text-base font-medium text-ink-900 dark:text-ink-100">
                            {{ project.name }}
                        </h3>
                        <a
                            v-if="project.link"
                            :href="project.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-sm text-ink-400 transition-colors hover:text-ink-900 dark:hover:text-ink-100"
                        >
                            ↗
                        </a>
                    </div>
                    <p class="mt-1 text-sm text-ink-600 dark:text-ink-400">{{ project.description }}</p>
                    <p class="mt-1 text-xs text-ink-400">{{ project.tags.join(', ') }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
