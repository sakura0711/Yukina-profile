<script setup lang="ts">
import { ref, Transition } from 'vue'
import ProgramItem from '~/components/about/ProgramItem.vue'
import ArtItem from '~/components/about/ArtItem.vue'
import OtherItem from '~/components/about/OtherItem.vue'

const activeTab = ref('ProgramItem')

const menu = [
    { key: 'ProgramItem', text: '程式相關' },
    { key: 'ArtItem', text: '藝術相關' },
    { key: 'OtherItem', text: '其他' }
]

// 元件映射表
const componentMap: Record<string, Component> = {
    ProgramItem,
    ArtItem,
    OtherItem
}
</script>

<template>
    <UiWindowsWindow 
        title="關於我 - Sakura Yukina"
        icon="material-symbols:person"
        :show-close-button="true"
    >
        <div class="p-8 min-h-full">
            <div class="flex w-full flex-row items-start justify-start gap-8">
                <!-- 左邊列表欄 -->
                <div class="flex w-1/4 min-w-[200px] flex-col gap-3">
                    <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>📋</span>
                        分類選單
                    </h2>
                    <button
                        v-for="item in menu"
                        :key="item.key"
                        :class="[
                            'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300',
                            'transform hover:scale-105',
                            activeTab === item.key
                                ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600 border border-gray-200 hover:border-pink-300 hover:shadow-md'
                        ]"
                        @click="activeTab = item.key"
                    >
                        <span class="w-2 h-2 rounded-full" 
                              :class="activeTab === item.key ? 'bg-white' : 'bg-pink-400'">
                        </span>
                        {{ item.text }}
                    </button>
                </div>

                <!-- 右邊內容 (動態元件) -->
                <div class="flex-1 relative">
                    <div class="relative w-full">
                        <Transition name="fade">
                            <component 
                                :is="componentMap[activeTab]" 
                                :key="activeTab"
                                class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 w-full" 
                            />
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </UiWindowsWindow>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.fade-leave-active {
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 確保過渡期間容器保持穩定 */
.flex-1.relative {
  min-height: 500px;
}

.relative.w-full {
  min-height: 500px;
  position: relative;
}
</style>
