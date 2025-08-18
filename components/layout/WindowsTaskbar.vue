<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref(new Date())
const showStartMenu = ref(false)
let timeInterval: NodeJS.Timeout | null = null

// 更新時間
const updateTime = () => {
    currentTime.value = new Date()
}

// 格式化時間
const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-TW', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
}

// 格式化日期
const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
}

// 切換開始菜單
const toggleStartMenu = () => {
    showStartMenu.value = !showStartMenu.value
}

// 在組件掛載時開始定時器
onMounted(() => {
    timeInterval = setInterval(updateTime, 1000)
})

// 在組件卸載時清除定時器
onUnmounted(() => {
    if (timeInterval) {
        clearInterval(timeInterval)
    }
})
</script>

<template>
    <!-- Windows 工具列 -->
    <div class="fixed bottom-6 left-6 right-6 z-50">
        <!-- 開始菜單 -->
        <div v-if="showStartMenu" class="animate-slide-up absolute bottom-full left-0 mb-3">
            <div class="min-w-80 md:min-w-80 w-screen md:w-auto rounded-t-3xl md:rounded-2xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur-md">
                <!-- 用戶區塊 -->
                <div class="">
                    <nuxt-link
                        to="/"
                        @click="showStartMenu = false"
                        class="start-menu-item mb-4 flex items-center gap-3 border-b border-gray-200 pb-4"
                    >
                        <div
                            class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500"
                        >
                            <span class="text-2xl">🌸</span>
                        </div>
                        <div>
                            <div class="font-semibold text-gray-800">Sakura Yukina</div>
                            <div class="text-sm text-pink-600">落櫻ゆきな</div>
                        </div>
                    </nuxt-link>
                </div>

                <!-- 菜單項目 -->
                <div class="space-y-2">
                    <nuxt-link to="/about" @click="showStartMenu = false" class="start-menu-item">
                        <Icon name="material-symbols:person" class="text-xl" />
                        <span>關於我</span>
                    </nuxt-link>

                    <nuxt-link to="/project" @click="showStartMenu = false" class="start-menu-item">
                        <Icon name="material-symbols:work" class="text-xl" />
                        <span>作品集</span>
                    </nuxt-link>

                    <nuxt-link to="/introduce" @click="showStartMenu = false" class="start-menu-item">
                        <Icon name="material-symbols:article" class="text-xl" />
                        <span>履歷介紹</span>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <!-- 工具列主體 - 手機版底部導航 -->
        <div class="border-t border-white/40 bg-white/90 shadow-2xl backdrop-blur-md rounded-xl">
            <div class="flex items-center justify-between px-4 py-2 md:py-2">
                <!-- 左側：開始按鈕和快速啟動 -->
                <div class="flex items-center gap-2">
                    <!-- 開始按鈕 -->
                    <button
                        @click="toggleStartMenu"
                        :class="[
                            'flex items-center gap-2 rounded-xl px-3 py-2 md:px-4 md:py-2 font-semibold transition-all duration-300 hover:scale-105 active:scale-95',
                            showStartMenu
                                ? 'bg-pink-400 text-white shadow-lg'
                                : 'bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500'
                        ]"
                    >
                        <span class="text-base md:text-lg">🌸</span>
                        <span class="text-xs md:text-sm">開始</span>
                    </button>

                    <!-- 分隔線 - 桌面版顯示 -->
                    <div class="hidden md:block mx-1 h-8 w-px bg-gray-300"></div>

                    <!-- 快速啟動區 - 手機版簡化 -->
                    <div class="flex items-center gap-1">
                        <nuxt-link to="/about" class="taskbar-icon">
                            <Icon name="material-symbols:person" class="text-xl md:text-2xl text-[#cf9ce1]" />   
                        </nuxt-link>

                        <nuxt-link to="/project" class="taskbar-icon">
                            <Icon name="material-symbols:work" class="text-xl md:text-2xl text-[#77c79e]" />
                        </nuxt-link>

                    
                        <nuxt-link to="/introduce" class="taskbar-icon">
                            <Icon name="material-symbols:article" class="text-xl md:text-2xl text-[#0087be]" />
                        </nuxt-link>
                    </div>
                </div>

                <!-- 中間：任務區域 - 手機版隱藏 -->
                <div class="hidden md:block mx-4 flex-1">
                    <div class="flex justify-center">
                        <!-- 活動的應用程序標籤可以在這裡顯示 -->
                    </div>
                </div>

                <!-- 右側：系統通知區域 - 手機版簡化 -->
                <div class="flex items-center gap-2 md:gap-3">
                    <!-- 系統圖標 - 手機版隱藏部分 -->
                    <div class="hidden md:flex items-center gap-2">
                        <button class="system-icon">
                            <span class="text-lg">🔊</span>
                        </button>

                        <button class="system-icon">
                            <span class="text-lg">📶</span>
                        </button>

                        <button class="system-icon">
                            <span class="text-lg">🔋</span>
                        </button>
                    </div>

                    <!-- 分隔線 - 桌面版顯示 -->
                    <div class="hidden md:block h-8 w-px bg-gray-300"></div>

                    <!-- 時間和日期 -->
                    <div class="cursor-pointer rounded-lg px-2 py-1 md:px-3 md:py-1 text-right text-xs md:text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100">
                        <div class="font-semibold">{{ formatTime(currentTime) }}</div>
                        <div class="text-xs text-gray-500 hidden md:block">{{ formatDate(currentTime) }}</div>
                    </div>

                    <!-- 通知按鈕 -->
                    <button class="system-icon">
                        <Icon name="material-symbols:notifications" class="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- 點擊其他地方關閉開始菜單 -->
    <div v-if="showStartMenu" @click="showStartMenu = false" class="fixed inset-0 z-40"></div>
</template>

<style scoped>
.router-link-active{
    @apply text-white bg-[#98989850];
}

/* 開始菜單項目 */
.start-menu-item {
    @apply flex items-center gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-pink-50;
}

/* 工具列圖標 */
.taskbar-icon {
    @apply rounded-lg p-2 transition-all duration-200 hover:scale-110 hover:bg-pink-100 max-w-[40px] max-h-[40px];
}

/* 系統圖標 */
.system-icon {
    @apply rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100;
}

/* 動畫 */
@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slide-up 0.2s ease-out;
}

/* 響應式調整 */
@media (max-width: 768px) {
    .taskbar-icon {
        @apply p-1.5; /* 手機版縮小 padding */
    }

    .system-icon {
        @apply p-1.5; /* 手機版縮小 padding */
    }

    .start-menu-item {
        @apply p-4; /* 手機版增加觸控面積 */
    }
    
    /* 手機版開始菜單全寬 */
    .animate-slide-up {
        @apply left-0 right-0;
    }
}

/* 觸控設備優化 */
@media (hover: none) and (pointer: coarse) {
    .taskbar-icon:hover {
        @apply scale-100 bg-transparent; /* 移除 hover 效果 */
    }
    
    .system-icon:hover {
        @apply bg-transparent;
    }
    
    .start-menu-item:hover {
        @apply bg-transparent;
    }
}
</style>
