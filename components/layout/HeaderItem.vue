<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isOpen = ref(false)

// 監聽滾動事件
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

// 切換手機選單
const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <nav
        :class="[
            'fixed left-0 top-0 flex w-full items-center justify-between px-6 py-4 transition-all duration-300 md:px-10',
            isScrolled ? 'bg-white shadow-md' : 'bg-gray-100'
        ]"
    >
        <!-- Logo -->
        <nuxt-link to="/" class="text-2xl font-bold text-blue-500">SakuraYukina</nuxt-link>

        <!-- 漢堡選單按鈕（手機版） -->
        <button class="text-3xl md:hidden" @click="toggleMenu">☰</button>

        <!-- 桌機版選單 -->
        <div class="hidden gap-8 text-lg md:flex">
            <nuxt-link
                v-for="(item, index) in [
                    { to: '/introduce', text: 'Intro' },
                    { to: '/project', text: 'Project' },
                    { to: '/about', text: 'Contact Us' }
                ]"
                :key="index"
                :to="item.to"
                class="relative px-4 py-2 transition-all duration-300 hover:text-blue-500"
            >
                {{ item.text }}
                <span
                    class="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"
                ></span>
            </nuxt-link>
        </div>

        <!-- 手機版選單 -->
        <div
            v-if="isOpen"
            class="absolute left-0 top-16 flex w-full flex-col items-center gap-6 bg-white py-4 shadow-md transition-all duration-300 md:hidden"
        >
            <nuxt-link
                v-for="(item, index) in [
                    { to: '/introduce', text: 'Intro' },
                    { to: '/project', text: 'Project' },
                    { to: '/about', text: 'Contact Us' }
                ]"
                :key="index"
                :to="item.to"
                class="w-full py-2 text-center text-lg hover:text-blue-500"
                @click="isOpen = false"
            >
                {{ item.text }}
            </nuxt-link>
        </div>
    </nav>
</template>

<style scoped>
/* 進入動畫 */
nav {
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
