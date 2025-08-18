<script setup lang="ts">
import { ref } from 'vue'

const showWelcomeWindow = ref(true)

const closeWelcomeWindow = () => {
    showWelcomeWindow.value = false
}

const desktopIcons = [
    { name: '關於我', icon: 'material-symbols:person', path: '/about' },
    { name: '作品集', icon: 'material-symbols:work', path: '/project' },
    { name: '履歷介紹', icon: 'material-symbols:article', path: '/introduce' },
    { name: '聯絡我', icon: 'material-symbols:mail', action: 'openContactWindow' },
    { name: '技能', icon: 'material-symbols:code', action: 'openSkillsWindow' }
]

const openSkillsWindow = () => {
    // TODO: 開啟技能視窗
    console.log('開啟技能視窗')
}

const openContactWindow = () => {
    // TODO: 開啟聯絡視窗
    console.log('開啟聯絡視窗')
}

const handleIconClick = (icon: any) => {
    if (icon.path) {
        navigateTo(icon.path)
    } else if (icon.action) {
        if (icon.action === 'openSkillsWindow') openSkillsWindow()
        if (icon.action === 'openContactWindow') openContactWindow()
    }
}
</script>

<template>
    <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200">
        
        <!-- Windows 桌面背景 -->
        <div class="">
            <!-- 背景裝飾 - 手機優化 -->
            <div class="absolute inset-0 overflow-hidden">
                <!-- 浮動圓圈 - 手機版較小，桌面版恢復原尺寸 -->
                <div
                    class="animate-float-slow absolute left-4 top-20 h-32 w-32 rounded-full bg-pink-200 opacity-30 md:left-20 md:h-64 md:w-64"
                ></div>
                <div
                    class="animate-float-medium absolute bottom-32 right-4 h-24 w-24 rounded-full bg-blue-200 opacity-40 md:bottom-20 md:right-20 md:h-48 md:w-48"
                ></div>
                <div
                    class="animate-float-fast absolute left-1/4 top-1/3 h-20 w-20 rounded-full bg-purple-200 opacity-50 md:left-1/3 md:top-1/2 md:h-32 md:w-32"
                ></div>
            </div>

            <!-- 手機版應用圖標區域 -->
            <div class="relative z-10">
                <!-- 頂部狀態欄區域 (手機樣式) -->
                <div class="px-6 pb-2 pt-4">
                    <div class="flex items-center justify-between text-sm font-medium text-white">
                        <div class="flex items-center gap-2">
                            <span class="text-2xl">落櫻 <b class="text-pink-600">ゆきな</b></span>
                        </div>
                        <div class="flex items-center gap-1 md:hidden">
                            <Icon name="material-symbols:signal-cellular-4-bar" class="text-base" />
                            <Icon name="material-symbols:wifi" class="text-base" />
                            <Icon name="material-symbols:battery-6-bar" class="text-base" />
                        </div>
                    </div>
                </div>

                <!-- 主要應用網格 -->
                <div class="px-6 py-8">
                    <!-- 手機版：置中網格，桌面版：靠右彈性佈局 -->
                    <div
                        class="mx-auto grid max-w-sm grid-cols-4 gap-6 md:flex md:max-w-none md:flex-wrap md:justify-start md:gap-8 md:pr-16"
                    >
                        <div
                            v-for="icon in desktopIcons"
                            :key="icon.name"
                            @click="handleIconClick(icon)"
                            class="mobile-app-icon flex cursor-pointer flex-col items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <!-- 應用圖標容器 - 圓角矩形，類似現代手機 UI -->
                            <div
                                class="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-lg backdrop-blur-sm md:h-20 md:w-20"
                            >
                                <Icon :name="icon.icon" class="text-3xl text-white drop-shadow-lg md:text-4xl" />
                            </div>
                            <!-- 應用名稱 -->
                            <span
                                class="max-w-16 text-center text-sm font-bold leading-tight tracking-widest text-white drop-shadow md:max-w-20 md:text-base"
                                >{{ icon.name }}</span
                            >
                        </div>
                    </div>
                </div>

                <!-- 底部安全區域 -->
                <div class="h-24 md:h-16"></div>
            </div>
        </div>

        <!-- 中間顯示內容(類似 <router-view>) -->
        <slot></slot>

        <!-- Windows 工具列固定在底部 -->
        <LayoutWindowsTaskbar></LayoutWindowsTaskbar>
    </div>
</template>

<style scoped>
/* 桌面版圖標樣式 */
.desktop-icon {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: fit-content;
    width: auto;
    min-height: 120px;
}

/* 手機版應用圖標樣式 */
.mobile-app-icon {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-app-icon:active {
    transform: scale(0.95);
}

/* 快捷功能按鈕 */
.quick-action-btn {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.quick-action-btn:active {
    transform: scale(0.95);
}

.desktop-icon:hover {
    transform: translateY(-4px);
}

/* 響應式調整 */
@media (max-width: 768px) {
    .desktop-icon:hover {
        transform: none; /* 手機版移除 hover 效果 */
    }

    .mobile-app-icon:hover {
        transform: none; /* 手機版只保留 active 效果 */
    }
}

@keyframes float-slow {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
    }
}

@keyframes float-medium {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-15px) rotate(-180deg);
    }
}

@keyframes float-fast {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-10px) rotate(360deg);
    }
}

.animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
    animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
    animation: float-fast 4s ease-in-out infinite;
}

@keyframes window-bounce-in {
    0% {
        opacity: 0;
        transform: scale(0.3) translateY(-50px);
    }
    50% {
        opacity: 1;
        transform: scale(1.1) translateY(0);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.animate-window-bounce-in {
    animation: window-bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
