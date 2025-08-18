<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isScrolled = ref(false)
const isOpen = ref(false)
const isSearchOpen = ref(false)

// 監聽滾動事件
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

// 切換手機選單
const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

// 切換搜索
const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value
}

// 關閉選單
const closeMenu = () => {
    isOpen.value = false
    isSearchOpen.value = false
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

// 動態樣式計算
const headerClasses = computed(() => {
    return [
        'fixed left-0 top-0 z-50 w-full transition-all duration-300',
        // 桌面版樣式
        'md:flex md:items-center md:justify-between md:px-10 md:py-4',
        // 手機版樣式
        'flex flex-col',
        // 背景樣式
        isScrolled.value 
            ? 'bg-white/95 backdrop-blur-lg border-b border-pink-100 shadow-lg' 
            : 'bg-gradient-to-r from-pink-200/80 to-rose-200/80 backdrop-blur-md'
    ]
})
</script>

<template>
    <nav :class="headerClasses">
        <!-- 手機版主要導航欄 -->
        <div class="flex items-center justify-between px-4 py-3 md:hidden">
            <!-- Logo 區域 - 手機版簡化 -->
            <nuxt-link to="/" class="group flex items-center gap-2" @click="closeMenu">
                <div class="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="material-symbols:cherry-blossom" class="text-white text-sm" />
                </div>
                <span class="text-sm font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    Sakura
                </span>
            </nuxt-link>

            <!-- 手機版操作按鈕組 -->
            <div class="flex items-center gap-2">
                <!-- 搜索按鈕 -->
                <button
                    @click="toggleSearch"
                    class="p-2 rounded-full hover:bg-pink-100 transition-colors duration-300"
                >
                    <Icon name="material-symbols:search" class="text-gray-700 text-lg" />
                </button>

                <!-- 通知按鈕 -->
                <button class="relative p-2 rounded-full hover:bg-pink-100 transition-colors duration-300">
                    <Icon name="material-symbols:notifications" class="text-gray-700 text-lg" />
                    <div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                </button>

                <!-- 選單按鈕 -->
                <button
                    @click="toggleMenu"
                    class="p-2 rounded-full hover:bg-pink-100 transition-colors duration-300"
                >
                    <Icon 
                        :name="isOpen ? 'material-symbols:close' : 'material-symbols:menu'" 
                        class="text-gray-700 text-lg transition-transform duration-300"
                        :class="{ 'rotate-180': isOpen }"
                    />
                </button>
            </div>
        </div>

        <!-- 手機版搜索欄 -->
        <div
            :class="[
                'px-4 pb-3 md:hidden transition-all duration-300 overflow-hidden',
                isSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
            ]"
        >
            <div class="relative">
                <input
                    type="text"
                    placeholder="搜索..."
                    class="w-full pl-10 pr-4 py-2 bg-white/80 rounded-full border border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                >
                <Icon name="material-symbols:search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
        </div>

        <!-- 桌機版導航 (保持原樣) -->
        <div class="hidden md:flex w-full items-center justify-between">
            <!-- Logo -->
            <nuxt-link to="/" class="group">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name="material-symbols:cherry-blossom" class="text-white text-lg" />
                    </div>
                    <div class="flex flex-col">
                        <span class="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                            Sakura
                        </span>
                        <span class="text-xs text-pink-600 font-medium -mt-1">
                            落櫻ゆきな
                        </span>
                    </div>
                </div>
            </nuxt-link>

            <!-- 桌機版選單 -->
            <div class="flex items-center gap-2">
                <nuxt-link
                    to="/"
                    class="nav-button group px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-md flex items-center"
                >
                    <div class="flex items-center gap-2">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <Icon name="material-symbols:home" class="text-lg leading-none" />
                        </div>
                        <span class="text-sm font-semibold text-gray-700 group-hover:text-pink-600 leading-none">首頁</span>
                    </div>
                </nuxt-link>
                
                <nuxt-link
                    to="/about"
                    class="nav-button group px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-md flex items-center"
                >
                    <div class="flex items-center gap-2">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <Icon name="material-symbols:person" class="text-lg leading-none" />
                        </div>
                        <span class="text-sm font-semibold text-gray-700 group-hover:text-pink-600 leading-none">關於我</span>
                    </div>
                </nuxt-link>
                
                <nuxt-link
                    to="/project"
                    class="nav-button group px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-md flex items-center"
                >
                    <div class="flex items-center gap-2">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <Icon name="material-symbols:work" class="text-lg leading-none" />
                        </div>
                        <span class="text-sm font-semibold text-gray-700 group-hover:text-pink-600 leading-none">作品集</span>
                    </div>
                </nuxt-link>
                
                <nuxt-link
                    to="/introduce"
                    class="nav-button group px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-md flex items-center"
                >
                    <div class="flex items-center gap-2">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <Icon name="material-symbols:article" class="text-lg leading-none" />
                        </div>
                        <span class="text-sm font-semibold text-gray-700 group-hover:text-pink-600 leading-none">介紹</span>
                    </div>
                </nuxt-link>
            </div>

            <!-- 聯絡按鈕 -->
            <div>
                <button class="group bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-xl font-semibold hover:from-pink-500 hover:to-rose-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-400/30">
                    <div class="flex items-center gap-2">
                        <Icon name="material-symbols:mail" class="text-sm" />
                        <span class="text-sm">聯絡我</span>
                    </div>
                </button>
            </div>
        </div>

        <!-- 手機版全螢幕選單 -->
        <div
            :class="[
                'fixed inset-0 bg-gradient-to-br from-pink-50 to-rose-50 md:hidden transition-all duration-500 ease-in-out',
                isOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible translate-y-full'
            ]"
            style="top: 72px;"
        >
            <!-- 選單內容 -->
            <div class="flex flex-col h-full">
                <!-- 用戶信息卡片 -->
                <div class="p-6 bg-white/60 backdrop-blur-sm border-b border-pink-100">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                            <Icon name="material-symbols:cherry-blossom" class="text-white text-2xl" />
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-800">落櫻ゆきな</h3>
                            <p class="text-sm text-pink-600">Web Developer & Designer</p>
                        </div>
                    </div>
                </div>

                <!-- 導航選項 -->
                <div class="flex-1 p-6 space-y-2">
                    <nuxt-link
                        to="/"
                        @click="closeMenu"
                        class="mobile-nav-item"
                    >
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                                <Icon name="material-symbols:home" class="text-white" />
                            </div>
                            <div>
                                <span class="text-lg font-semibold text-gray-800">首頁</span>
                                <p class="text-sm text-gray-500">回到主頁面</p>
                            </div>
                        </div>
                        <Icon name="material-symbols:chevron-right" class="text-gray-400" />
                    </nuxt-link>
                    
                    <nuxt-link
                        to="/about"
                        @click="closeMenu"
                        class="mobile-nav-item"
                    >
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
                                <Icon name="material-symbols:person" class="text-white" />
                            </div>
                            <div>
                                <span class="text-lg font-semibold text-gray-800">關於我</span>
                                <p class="text-sm text-gray-500">了解我的背景</p>
                            </div>
                        </div>
                        <Icon name="material-symbols:chevron-right" class="text-gray-400" />
                    </nuxt-link>
                    
                    <nuxt-link
                        to="/project"
                        @click="closeMenu"
                        class="mobile-nav-item"
                    >
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                                <Icon name="material-symbols:work" class="text-white" />
                            </div>
                            <div>
                                <span class="text-lg font-semibold text-gray-800">作品集</span>
                                <p class="text-sm text-gray-500">查看我的項目</p>
                            </div>
                        </div>
                        <Icon name="material-symbols:chevron-right" class="text-gray-400" />
                    </nuxt-link>
                    
                    <nuxt-link
                        to="/introduce"
                        @click="closeMenu"
                        class="mobile-nav-item"
                    >
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                                <Icon name="material-symbols:article" class="text-white" />
                            </div>
                            <div>
                                <span class="text-lg font-semibold text-gray-800">履歷介紹</span>
                                <p class="text-sm text-gray-500">詳細履歷資訊</p>
                            </div>
                        </div>
                        <Icon name="material-symbols:chevron-right" class="text-gray-400" />
                    </nuxt-link>
                </div>

                <!-- 底部操作區 -->
                <div class="p-6 bg-white/40 backdrop-blur-sm border-t border-pink-100">
                    <div class="grid grid-cols-2 gap-3">
                        <button class="mobile-action-btn bg-gradient-to-r from-pink-400 to-rose-400">
                            <Icon name="material-symbols:mail" class="text-white" />
                            <span class="text-white text-sm font-medium">聯絡我</span>
                        </button>
                        
                        <button class="mobile-action-btn bg-gradient-to-r from-indigo-400 to-purple-400">
                            <Icon name="material-symbols:download" class="text-white" />
                            <span class="text-white text-sm font-medium">下載履歷</span>
                        </button>
                    </div>
                    
                    <!-- 社群媒體 -->
                    <div class="flex justify-center gap-4 mt-4">
                        <a href="#" class="social-icon">
                            <Icon name="devicon:github" class="text-xl" />
                        </a>
                        <a href="#" class="social-icon">
                            <Icon name="skill-icons:linkedin" class="text-xl" />
                        </a>
                        <a href="#" class="social-icon">
                            <Icon name="devicon:twitter" class="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* 桌面版導航連結動畫效果 */
.nav-button {
    position: relative;
    display: flex;
    align-items: center;
    height: 40px; /* 固定高度確保對齊 */
}

.nav-button:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #f472b6, #fb7185);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-button:hover:after {
    width: 80%;
}

/* 確保圖標容器一致對齊 */
.nav-button .flex.items-center.gap-2 {
    display: flex;
    align-items: center;
    height: 100%;
}

/* 手機版導航項目樣式 */
.mobile-nav-item {
    @apply flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 border border-pink-100/50 hover:border-pink-200 hover:shadow-md;
}

.mobile-nav-item:active {
    @apply scale-98 bg-pink-50;
}

/* 手機版操作按鈕 */
.mobile-action-btn {
    @apply flex items-center justify-center gap-2 p-3 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl;
}

/* 社群媒體圖標 */
.social-icon {
    @apply w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 hover:scale-110 transition-all duration-300 border border-pink-100;
}

/* 毛玻璃效果增強 */
.backdrop-blur-md {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}

.backdrop-blur-lg {
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
}

.backdrop-blur-sm {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}

/* 漸層文字效果 */
.gradient-text {
    background: linear-gradient(135deg, #f472b6, #fb7185, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* 自定義動畫 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.mobile-nav-item:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav-item:nth-child(2) { animation-delay: 0.2s; }
.mobile-nav-item:nth-child(3) { animation-delay: 0.3s; }
.mobile-nav-item:nth-child(4) { animation-delay: 0.4s; }

/* 響應式文字大小 */
@media (max-width: 640px) {
    .mobile-nav-item span {
        @apply text-base;
    }
    
    .mobile-nav-item p {
        @apply text-xs;
    }
}

/* iOS Safari 相容性 */
@supports (-webkit-touch-callout: none) {
    .backdrop-blur-md,
    .backdrop-blur-lg,
    .backdrop-blur-sm {
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
    }
}

/* 滑動動畫效果 */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>
