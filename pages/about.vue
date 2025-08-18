<script setup lang="ts"></script>

<template>
    <UiWindowsWindow 
        title="個人簡介 - Introduction"
        icon="material-symbols:article"
        :show-close-button="true"
    >
        <div class="p-8 min-h-full bg-gradient-to-br from-indigo-50 to-purple-50">
            <!-- 個人簡介標題 -->
            <div class="text-center mb-8">
                <div class="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span class="text-4xl text-white">📋</span>
                </div>
                <h1 class="text-3xl font-bold text-gray-800 mb-2">個人簡介</h1>
                <p class="text-gray-600">了解更多關於我的背景與經歷</p>
            </div>

            <!-- 簡介內容 -->
            <div class="max-w-4xl mx-auto">
                <!-- 基本資料卡片 -->
                <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                            <span class="text-2xl text-white">🌸</span>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-gray-800">Sakura Yukina</h2>
                            <p class="text-pink-600 font-medium">落櫻ゆきな</p>
                            <p class="text-gray-600 text-sm">前端開發者 | UI/UX 設計師</p>
                        </div>
                    </div>

                    <div class="prose prose-gray max-w-none">
                        <p class="text-gray-700 leading-relaxed">
                            您好！我是 Sakura Yukina，一位充滿熱忱的前端開發者和 UI/UX 設計師。
                            我熱愛創造美觀且實用的數位體驗，專精於現代 Web 技術和使用者介面設計。
                        </p>
                    </div>
                </div>

                <!-- 技能與專長 -->
                <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Icon name="material-symbols:computer" />
                        技能與專長
                    </h3>
                    <div class="grid md:grid-cols-3 gap-4">
                        <div class="bg-blue-50 rounded-xl p-4">
                            <h4 class="font-semibold text-blue-800 mb-2">前端開發</h4>
                            <ul class="text-sm text-blue-700 space-y-1">
                                <li>• Vue.js / Nuxt.js</li>
                                <li>• React / Next.js</li>
                                <li>• TypeScript</li>
                                <li>• Tailwind CSS</li>
                            </ul>
                        </div>
                        <div class="bg-green-50 rounded-xl p-4">
                            <h4 class="font-semibold text-green-800 mb-2">設計工具</h4>
                            <ul class="text-sm text-green-700 space-y-1">
                                <li>• Adobe Photoshop</li>
                                <li>• Figma</li>
                                <li>• Adobe Illustrator</li>
                                <li>• Sketch</li>
                            </ul>
                        </div>
                        <div class="bg-purple-50 rounded-xl p-4">
                            <h4 class="font-semibold text-purple-800 mb-2">其他技能</h4>
                            <ul class="text-sm text-purple-700 space-y-1">
                                <li>• Git 版本控制</li>
                                <li>• RESTful API</li>
                                <li>• 響應式設計</li>
                                <li>• 效能優化</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 教育背景 -->
                <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>🎓</span>
                        教育背景
                    </h3>
                    <div class="space-y-4">
                        <div class="flex gap-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-blue-600">🏫</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">資訊工程學系</h4>
                                <p class="text-gray-600 text-sm">大學 | 2020 - 2024</p>
                                <p class="text-gray-700 text-sm mt-1">專精於軟體開發、資料結構與演算法</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 興趣愛好 -->
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>❤️</span>
                        興趣愛好
                    </h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
                            <Icon name="material-symbols:palette" class="text-2xl" />
                            <div>
                                <h4 class="font-semibold text-gray-800">數位藝術</h4>
                                <p class="text-gray-600 text-sm">喜歡創作插畫和數位設計</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                            <span class="text-2xl">📚</span>
                            <div>
                                <h4 class="font-semibold text-gray-800">學習新技術</h4>
                                <p class="text-gray-600 text-sm">持續關注前端技術發展</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                            <span class="text-2xl">🎵</span>
                            <div>
                                <h4 class="font-semibold text-gray-800">音樂欣賞</h4>
                                <p class="text-gray-600 text-sm">喜歡各種類型的音樂</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                            <span class="text-2xl">🎮</span>
                            <div>
                                <h4 class="font-semibold text-gray-800">遊戲開發</h4>
                                <p class="text-gray-600 text-sm">業餘時間研究遊戲設計</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UiWindowsWindow>
</template>

<style scoped>
.prose {
    max-width: none;
}
</style>
