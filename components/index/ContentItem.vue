<script setup lang="ts"></script>

<template>
    <div class="w-full max-w-5xl mx-auto space-y-6">
        
        <!-- 關於我卡片 -->
        <div class="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-5">
                <div class="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
                <h2 class="text-2xl font-bold text-gray-800">關於我</h2>
                <div class="flex-1 h-px bg-gradient-to-r from-pink-200 to-transparent"></div>
            </div>
            
            <div class="grid lg:grid-cols-3 gap-6">
                <!-- 個人資訊 -->
                <div class="lg:col-span-2 space-y-4">
                    <div class="prose prose-lg">
                        <p class="text-gray-700 leading-relaxed text-base">
                            一個喜歡<span class="text-pink-600 font-semibold">寫程式</span>的人，
                            偶爾會熬夜 debug 到懷疑人生 🤔 但還是樂此不疲地在前端這條路上摸索著。
                        </p>
                        <p class="text-gray-600 text-sm">
                            一天不寫Code難受，但Debug難受一整天
                        </p>
                        <p class="text-pink-500 font-medium text-xs italic">
                            p.s. 程式縮排 2 格是邪教吧 😤
                        </p>
                    </div>
                    
                    <!-- 技術棧展示 -->
                    <div class="bg-gray-50 rounded-2xl p-4">
                        <h3 class="text-base font-semibold text-gray-800 mb-3">目前在玩的技術</h3>
                        <div class="flex flex-wrap items-center gap-3 text-sm">
                            <div class="tech-item">
                                <Icon name="skill-icons:raspberrypi-light" class="text-xl" />
                                <span>Raspberry Pi</span>
                            </div>
                            <span class="text-pink-400 font-bold">+</span>
                            <div class="tech-item">
                                <Icon name="skill-icons:nginx" class="text-xl" />
                                <span>Nginx</span>
                            </div>
                            <span class="text-pink-400 font-bold">+</span>
                            <div class="tech-item">
                                <Icon name="skill-icons:nuxtjs-light" class="text-xl" />
                                <span>Nuxt 3</span>
                            </div>
                            <span class="text-pink-400 font-bold">+</span>
                            <div class="tech-item">
                                <Icon name="skill-icons:vuejs-light" class="text-xl" />
                                <span>Vue3</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-xs text-gray-400 italic flex items-center gap-2">
                        <Icon name="mdi:calendar-clock" class="text-sm" />
                        持續學習中... 2025/03/08
                    </p>
                </div>

                <!-- 技能標籤雲 -->
                <div class="space-y-4">
                    <div>
                        <h3 class="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span>🛠️</span>
                            技能工具箱
                        </h3>
                        <div class="flex flex-wrap gap-3">
                            <span class="skill-badge bg-blue-50 text-blue-700 border-blue-200">
                                <Icon name="skill-icons:photoshop" class="text-sm" />
                                Photoshop
                            </span>
                            <span class="skill-badge bg-green-50 text-green-700 border-green-200">
                                <Icon name="skill-icons:vuejs-light" class="text-sm" />
                                Vue3
                            </span>
                            <span class="skill-badge bg-purple-50 text-purple-700 border-purple-200">
                                <Icon name="ep:element-plus" class="text-sm" />
                                Element Plus
                            </span>
                            <span class="skill-badge bg-orange-50 text-orange-700 border-orange-200">
                                <Icon name="skill-icons:bootstrap" class="text-sm" />
                                Bootstrap
                            </span>
                        </div>
                    </div>
                    
                    <!-- 狀態指示器 -->
                    <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-100">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span class="text-sm font-medium text-gray-700">目前狀態</span>
                        </div>
                        <p class="text-xs text-gray-600">正在學習新技術中...</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 聯絡方式卡片 -->
        <div class="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <h2 class="text-2xl font-bold text-gray-800">聯絡我吧</h2>
                <div class="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent"></div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
                <div class="contact-card group">
                    <div class="flex items-center gap-4">
                        <div class="contact-avatar bg-red-50 border-red-200">
                            <Icon name="skill-icons:gmail-light" class="text-2xl" />
                        </div>
                        <div class="flex-1">
                            <p class="text-gray-500 text-sm font-medium">Email</p>
                            <p class="text-gray-800 font-semibold">testuser002x@gmail.com</p>
                            <p class="text-xs text-gray-400 mt-1">工作聯絡首選</p>
                        </div>
                    </div>
                </div>
                
                <div class="contact-card group">
                    <div class="flex items-center gap-4">
                        <div class="contact-avatar bg-green-50 border-green-200">
                            <Icon name="ic:baseline-chat" class="text-2xl text-green-600" />
                        </div>
                        <div class="flex-1">
                            <p class="text-gray-500 text-sm font-medium">LINE</p>
                            <p class="text-gray-800 font-semibold">@yukina</p>
                            <p class="text-xs text-gray-400 mt-1">日常閒聊歡迎</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 聯絡我按鈕 -->
            <div class="mt-8 text-center">
                <button class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <Icon name="mdi:email-fast" class="text-lg" />
                    發個訊息給我
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 技術項目樣式 */
.tech-item {
    @apply flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 font-medium text-gray-700;
    transition: all 0.3s ease;
}

.tech-item:hover {
    @apply shadow-md transform scale-105;
}

/* 技能標籤樣式 */
.skill-badge {
    @apply inline-flex items-center gap-2 px-3 py-2 rounded-lg border font-medium text-sm;
    transition: all 0.3s ease;
}

.skill-badge:hover {
    @apply transform scale-105 shadow-md;
}

/* 聯絡卡片樣式 */
.contact-card {
    @apply p-6 bg-gray-50 rounded-2xl border border-gray-100;
    transition: all 0.3s ease;
}

.contact-card:hover {
    @apply bg-white shadow-lg transform scale-105;
}

/* 聯絡頭像樣式 */
.contact-avatar {
    @apply w-14 h-14 rounded-xl border-2 flex items-center justify-center;
    transition: all 0.3s ease;
}

.contact-card:hover .contact-avatar {
    @apply transform scale-110;
}

/* 響應式調整 */
@media (max-width: 768px) {
    .grid.lg\\:grid-cols-3 {
        grid-template-columns: 1fr;
    }
    
    .tech-item {
        font-size: 0.875rem;
    }
    
    .skill-badge {
        font-size: 0.75rem;
        padding: 0.375rem 0.75rem;
    }
}

/* 文字動畫效果 */
.prose p {
    animation: fadeInUp 0.6s ease-out;
}

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
</style>
