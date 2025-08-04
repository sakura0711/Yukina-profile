<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import ContentItem from '~/components/index/ContentItem.vue';
</script>

<template>
    <!-- 主容器 - 日式極簡風格 -->
    <div class="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-stone-100">
        
        <!-- 裝飾性幾何圖形 -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none ">
            <!-- 大圓形 -->
            <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full border-4 border-pink-200/30 animate-slow-spin"></div>
            <!-- 小圓點 -->
            <div class="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-float"></div>
            <div class="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float-delay"></div>
            <!-- 線條裝飾 -->
            <div class="absolute bottom-20 left-10 w-32 h-1 bg-gradient-to-r from-pink-300 to-transparent"></div>
            <div class="absolute top-1/3 right-20 w-24 h-1 bg-gradient-to-l from-purple-300 to-transparent"></div>
        </div>

        <!-- 主要內容區域 -->
        <div class="relative z-10 container mx-auto px-6 pt-20 pb-12">
            
            <!-- Hero 區域 -->
            <div class="grid lg:grid-cols-12 gap-8 items-center min-h-[60vh]">
                
                <!-- 左側文字內容 -->
                <div class="lg:col-span-7 space-y-6 text-left flex flex-col items-center">
                    
                    <!-- 問候語 -->
                    <div class="animate-slide-up">
                        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm border border-gray-200">
                            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span class="text-sm text-gray-600 font-medium">你好，我是</span>
                        </div>
                    </div>

                    <!-- 主標題 -->
                    <div class="animate-slide-up delay-100">
                        <h1 class="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            <span class="block">Sakura</span>
                            <span class="block text-pink-500">Yukina</span>
                        </h1>
                        <h2 class="text-xl lg:text-2xl text-gray-600 font-light mt-3">
                            落櫻ゆきな
                        </h2>
                    </div>

                    <!-- 描述文字 -->
                    <div class="animate-slide-up delay-200">
                        <p class="text-lg text-gray-700 leading-relaxed max-w-lg">
                            一個熱愛<span class="font-bold text-pink-600">寫程式</span>的人
                            <br>
                            用程式碼編織數位世界的故事
                        </p>
                    </div>

                    <!-- 按鈕組 -->
                    <div class="animate-slide-up delay-300 flex flex-wrap gap-3">
                        <button class="group px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                            <span class="flex items-center gap-2">
                                查看作品
                                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </span>
                        </button>
                        <button class="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-pink-300 hover:text-pink-600 transform hover:scale-105 transition-all duration-300">
                            聯絡我
                        </button>
                    </div>

                    <!-- 社交連結 -->
                    <div class="animate-slide-up delay-400 flex items-center gap-4">
                        <span class="text-sm text-gray-500">聯絡我:</span>
                        <div class="flex gap-2">
                            <a href="#" class="w-9 h-9 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md hover:scale-110 transition-all duration-300">
                                <Icon name="mdi:github" class="text-base text-gray-600" />
                            </a>
                            <a href="#" class="w-9 h-9 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md hover:scale-110 transition-all duration-300">
                                <Icon name="mdi:email" class="text-base text-gray-600" />
                            </a>
                            <a href="#" class="w-9 h-9 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md hover:scale-110 transition-all duration-300">
                                <Icon name="ic:baseline-chat" class="text-base text-gray-600" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 右側視覺元素 -->
                <div class="lg:col-span-5 flex justify-center lg:justify-start">
                    <div class="animate-slide-up delay-200 relative">
                        
                        <!-- 主要卡片 -->
                        <div class="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            
                            <!-- 個人照片 -->
                            <div class="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-6 relative">
                                <img
                                    src="/1.jpg"
                                    alt="Sakura Yukina"
                                    class="w-full h-full object-cover"
                                />
                                <!-- 彩色邊框 -->
                                <div class="absolute inset-0 rounded-2xl border-4 border-gradient-to-br from-pink-400 via-purple-400 to-indigo-400"></div>
                            </div>

                            <!-- 裝飾文字 -->
                            <div class="text-center space-y-2">
                                <p class="text-gray-600 font-medium">Frontend Developer</p>
                                <div class="flex justify-center gap-2">
                                    <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                                    <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                                    <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                                </div>
                            </div>
                        </div>

                        <!-- 浮動小卡片們 -->
                        <div class="absolute -top-4 -left-8 bg-yellow-100 px-3 py-2 rounded-lg shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                            <span class="text-sm font-semibold text-yellow-800">✨ Vue.js</span>
                        </div>
                        
                        <div class="absolute -bottom-6 -right-4 bg-blue-100 px-3 py-2 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                            <span class="text-sm font-semibold text-blue-800">🎨 Design</span>
                        </div>
                        
                        <div class="absolute top-1/2 -right-12 bg-green-100 px-3 py-2 rounded-lg shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                            <span class="text-sm font-semibold text-green-800">💻 Code</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 詳細資訊區塊 -->
            <section class=" mt-10">
                <ContentItem class="animate-slide-up delay-500" />
            </section>
        </div>
    </div>
</template>

<style scoped>
/* 自定義動畫 */
@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slow-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.animate-slide-up {
    animation: slide-up 0.8s ease-out both;
}

.animate-slow-spin {
    animation: slow-spin 20s linear infinite;
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-float-delay {
    animation: float 3s ease-in-out infinite 1s;
}

.delay-100 {
    animation-delay: 100ms;
}

.delay-200 {
    animation-delay: 200ms;
}

.delay-300 {
    animation-delay: 300ms;
}

.delay-400 {
    animation-delay: 400ms;
}

.delay-500 {
    animation-delay: 500ms;
}

/* 響應式調整 */
@media (max-width: 768px) {
    h1 {
        font-size: 3rem;
    }
    
    .lg\:col-span-5 .relative {
        max-width: 320px;
        margin: 0 auto;
    }
    
    .absolute.-top-4 {
        position: relative;
        top: auto;
        left: auto;
        margin: 1rem 0;
    }
    
    .absolute.-bottom-6 {
        position: relative;
        bottom: auto;
        right: auto;
        margin: 1rem 0;
    }
    
    .absolute.top-1\/2 {
        position: relative;
        top: auto;
        right: auto;
        margin: 1rem 0;
    }
}

/* 卡片懸停效果 */
.bg-white:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 平滑滾動 */
html {
    scroll-behavior: smooth;
}
</style>
