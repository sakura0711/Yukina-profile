<script setup lang="ts">
import { ref,Transition } from 'vue'
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
    <div class="row mt-16 flex w-full flex-row items-center justify-start gap-4 px-4 py-8">
        <!-- 左邊列表欄 -->
        <div class="flex w-1/4 max-w-[250px] flex-col gap-2 ">
            <button
                v-for="item in menu"
                :key="item.key"
                :class="[
                    'flex items-center gap-2 rounded px-3 py-2 text-lg font-bold transition-colors transition-transform duration-300',
                    'transform',
                    activeTab === item.key
                        ? 'bg-blue-100 text-blue-600 scale-105 shadow-lg'
                        : 'text-gray-700 hover:text-blue-500 hover:scale-105 hover:shadow'
                ]"
                @click="activeTab = item.key"
            >
                {{ item.text }}
            </button>
        </div>

        <!-- 右邊內容 (動態元件) -->

        <Transition name="fade" mode="out-in" class="w-3/4">
            <component :is="componentMap[activeTab]" class="mt-4" />
        </Transition>

      
    </div>
</template>

<style scoped>.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}</style>
