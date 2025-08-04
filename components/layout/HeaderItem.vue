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
                    
            'fixed left-0 top-0 z-50 flex w-full items-center justify-around px-6 py-4 transition-all duration-300  max-2xl:justify-between md:px-10',
            isScrolled ? ' backdrop-blur-md border-b' : 'bg-transparent'
        ]"
    >
        <!-- Logo -->
        <nuxt-link to="/" class="group">
            <div class="flex items-center gap-2">
                <span class="text-2xl">🌸</span>
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    落櫻ゆきな
                </span>
            </div>
        </nuxt-link>

        <!-- 桌機版選單 -->
        <div class="hidden md:flex items-center gap-8">
            <nuxt-link
                to="/"
                class="nav-link text-black-800 text-lg  hover:text-purple-400 transition-colors duration-300 relative font-extrabold"
            >
                首頁
            </nuxt-link>
            <nuxt-link
                to="/introduce"
                class="nav-link text-black-800 text-lg  hover:text-purple-400 transition-colors duration-300 relative font-extrabold"
            >
                簡介
            </nuxt-link>
            <nuxt-link
                to="/about"
                class="nav-link text-black-800 text-lg  hover:text-purple-400 transition-colors duration-300 relative font-extrabold"
            >
                關於
            </nuxt-link>
            <nuxt-link
                to="/project"
                class="nav-link text-black-800 text-lg  hover:text-purple-400 transition-colors duration-300 relative font-extrabold"
            >
                專案
            </nuxt-link>
        </div>

        <!-- 手機版選單按鈕 -->
        <button
            @click="toggleMenu"
            class="md:hidden p-2 text-black-800 text-lg hover:text-purple-400 transition-colors duration-300"
        >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    v-if="!isOpen"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                    v-else
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>

        <!-- 手機版選單 -->
        <div
            :class="[
                'absolute top-full left-0 w-full md:hidden transition-all duration-300',
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            ]"
        >
            <div class="backdrop-blur-md border-b  px-6 py-4 space-y-4">
                <nuxt-link
                    to="/"
                    @click="isOpen = false"
                    class="block text-black-800 text-lg  hover:text-purple-400 transition-colors duration-300 font-medifont-extrabold"
                >
                    首頁
                </nuxt-link>
                <nuxt-link
                    to="/introduce"
                    @click="isOpen = false"
                    class="block text-black-800 text-lg  hover:text-purple-400 transition-colors duration-300 font-medifont-extrabold"
                >
                    簡介
                </nuxt-link>
                <nuxt-link
                    to="/about"
                    @click="isOpen = false"
                    class="block text-black-800 text-lg  hover:text-purple-400 transition-colors duration-300 font-medifont-extrabold"
                >
                    關於
                </nuxt-link>
                <nuxt-link
                    to="/project"
                    @click="isOpen = false"
                    class="block text-black-800 text-lg  hover:text-purple-400 transition-colors duration-300 font-medifont-extrabold"
                >
                    專案
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #8b5cf6, #ec4899);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.router-link-active.nav-link {
    color: rgb(101, 59, 134);
}

.router-link-active.nav-link::after {
    width: 100%;
}
</style>
