<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 建立一個 ref 來引用目標元素
const targetElement = ref<HTMLElement | null>(null)

onMounted(() => {
    // 建立 Intersection Observer 來監聽元素是否進入視窗
    const observer = new IntersectionObserver(
        entries => {
            // 遍歷所有被監聽的元素
            entries.forEach(entry => {
                // 判斷元素是否在視窗範圍內
                if (entry.isIntersecting) {
                    // 元素進入視窗時，添加 'in-view' class 來觸發動畫
                    entry.target.classList.add('in-view')
                } else {
                    // 元素離開視窗時，移除 'in-view' class
                    entry.target.classList.remove('in-view')
                }
            })
        },
        {
            // 當元素 10% 進入視窗時觸發
            threshold: 0.1
        }
    )

    // 如果目標元素存在，開始監聽
    if (targetElement.value) {
        observer.observe(targetElement.value)
    }
})
</script>

<template>
    <UiWindowsWindow title="作品集 - Portfolio" icon="material-symbols:work" :show-close-button="true">
        <div class="min-h-full bg-gradient-to-br from-pink-50 to-blue-50 p-8">
            <!-- 頁面標題 -->
            <div class="mb-8 text-center">
                <h1 class="mb-2 text-3xl font-bold text-gray-800">我的作品集</h1>
                <p class="text-gray-600">展示我的創意與技術實力</p>
            </div>

            <!-- 項目網格 -->
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- 項目卡片 1 -->
                <div
                    class="project-card group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                    <div class="relative h-48 overflow-hidden bg-gradient-to-br from-pink-300 to-rose-400">
                        <div
                            class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/30"
                        ></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-6xl text-white opacity-80">🌸</span>
                        </div>
                        <div class="absolute right-3 top-3">
                            <span class="rounded-full bg-white/20 px-2 py-1 text-xs text-white backdrop-blur-sm"
                                >Vue.js</span
                            >
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="mb-2 text-xl font-bold text-gray-800">個人網站</h3>
                        <p class="mb-4 text-sm text-gray-600">使用 Nuxt.js 和 Tailwind CSS 打造的響應式個人網站</p>
                        <div class="flex gap-2">
                            <button
                                class="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
                            >
                                查看
                            </button>
                            <button
                                class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                代碼
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 項目卡片 2 -->
                <div
                    class="project-card group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                    <div class="relative h-48 overflow-hidden bg-gradient-to-br from-blue-200 to-blue-300">
                        <div
                            class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/30"
                        ></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <Icon name="material-symbols:smartphone" class="text-6xl text-white opacity-80" />
                        </div>
                        <div class="absolute right-3 top-3">
                            <span class="rounded-full bg-white/20 px-2 py-1 text-xs text-white backdrop-blur-sm"
                                >React</span
                            >
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="mb-2 text-xl font-bold text-gray-800">移動應用</h3>
                        <p class="mb-4 text-sm text-gray-600">React Native 開發的跨平台移動應用程序</p>
                        <div class="flex gap-2">
                            <button
                                class="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
                            >
                                查看
                            </button>
                            <button
                                class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                代碼
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 項目卡片 3 -->
                <div
                    class="project-card group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                    <div class="relative h-48 overflow-hidden bg-gradient-to-br from-pink-200 to-purple-300">
                        <div
                            class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/30"
                        ></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <Icon name="material-symbols:palette" class="text-6xl text-white opacity-80" />
                        </div>
                        <div class="absolute right-3 top-3">
                            <span class="rounded-full bg-white/20 px-2 py-1 text-xs text-white backdrop-blur-sm"
                                >Design</span
                            >
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="mb-2 text-xl font-bold text-gray-800">UI/UX 設計</h3>
                        <p class="mb-4 text-sm text-gray-600">創意設計作品與用戶體驗優化項目</p>
                        <div class="flex gap-2">
                            <button
                                class="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
                            >
                                查看
                            </button>
                            <button
                                class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                代碼
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 項目卡片 4 -->
                <div
                    class="project-card group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                    <div class="relative h-48 overflow-hidden bg-gradient-to-br from-rose-300 to-pink-400">
                        <div
                            class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/30"
                        ></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <Icon name="material-symbols:rocket-launch" class="text-6xl text-white opacity-80" />
                        </div>
                        <div class="absolute right-3 top-3">
                            <span class="rounded-full bg-white/20 px-2 py-1 text-xs text-white backdrop-blur-sm"
                                >Node.js</span
                            >
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="mb-2 text-xl font-bold text-gray-800">後端 API</h3>
                        <p class="mb-4 text-sm text-gray-600">RESTful API 設計與資料庫整合項目</p>
                        <div class="flex gap-2">
                            <button
                                class="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
                            >
                                查看
                            </button>
                            <button
                                class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                代碼
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UiWindowsWindow>
</template>

<style scoped>
.project-card {
    @apply transform hover:-translate-y-2 hover:scale-105;
}

.project-card:hover .group {
    @apply shadow-2xl;
}
</style>
