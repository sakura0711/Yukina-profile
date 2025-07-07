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
            'fixed left-0 top-0 flex w-full items-center justify-around px-6 py-4 transition-all duration-300 max-2xl:justify-between md:px-10'
        ]"
    >
        <!-- Logo -->
        <nuxt-link to="/">
            <p>
                <b class="text-2xl font-bold">🌸</b>
                <s
                    class="bg-gradient-to-r from-red-300 via-pink-400 via-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent"
                >
                    落櫻ゆきな</s
                >
            </p></nuxt-link
        >

        <!-- 桌機版選單 -->
        <div class="text-bold hidden gap-4 md:flex">
            <div
                class="relative px-2 py-1 text-lg font-bold text-cyan-600 transition-all duration-300"
                style="border-right: 4px double #ced2d9"
            >
                <nuxt-link
                    v-for="(item, index) in [
                        { to: '/introduce', text: '簡介' },
                        { to: '/project', text: '技能樹' },
                        { to: '/about', text: '奇怪的作品' }
                    ]"
                    :key="index"
                    :to="item.to"
                    class="px-3 hover:text-blue-500"
                >
                    {{ item.text }}
                </nuxt-link>
            </div>

            <div class="flex items-center justify-between gap-4 text-zinc-600">
                <a href="https://github.com/sakura0711" class="flex items-center justify-center gap-2" target="_blank">
                    <Icon name="grommet-icons:github" size="1.5em" />
                    <!-- <i>GitHub</i> -->
                </a>
                <a
                    href="https://discordapp.com/users/565550082016149515"
                    class="flex items-center justify-center gap-2"
                    target="_blank"
                >
                    <Icon name="ic:twotone-discord" size="1.6em" />
                    <!-- <i>Discord</i> -->
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=testuseroozx@gmail.com&su=&body="
                    target="_blank"
                    class="flex items-center justify-center gap-2"
                >
                    <Icon name="bx:bxl-gmail" size="1.6em" />
                    <!-- <i>Gmail</i> -->
                </a>
            </div>
        </div>

        <!-- 漢堡選單按鈕（手機版） -->
        <button class="text-3xl md:hidden" @click="toggleMenu">☰</button>

        <!-- 手機版選單 -->
        <div
            v-if="isOpen"
            class="absolute left-0 top-16 flex w-full flex-col items-center gap-6 bg-white py-4 text-cyan-600 shadow-md transition-all duration-300 md:hidden"
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
