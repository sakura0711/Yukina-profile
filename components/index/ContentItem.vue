<script setup lang="ts"></script>

<template>
    <div
        class="animate-fadein-delay2 mx-auto mt-16 w-[70%] rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-md md:min-w-[720px] xl:w-[50%]"
    >
        <img
            src="/public/1.jpg"
            class="animate-fadein-delay3 absolute -right-20 -top-20 z-10 h-40 w-40 rounded-3xl shadow-2xl"
            alt=""
        />
        <h2 class="mb-4 text-2xl font-semibold text-gray-700">關於我</h2>
        <p class="mb-5 text-xl font-black font-semibold tracking-normal text-violet-400">
            一個前端小廢物，正在嘗試學習使用 <br />
            <Icon name="skill-icons:raspberrypi-light" />Raspberry Pi + <Icon name="skill-icons:nginx" /> Nginx +
            <Icon name="skill-icons:nuxtjs-light" /> Nuxt 3 + <Icon name="skill-icons:vuejs-light" /> Vue3
            <br />來架設屬於自己的小小網站。希望可以堅持下去 <i class="text-xs text-gray-500">2025/03/08</i>.
        </p>
        <h2 class="mb-2 text-2xl font-semibold text-gray-700">技能</h2>
        <ul class="mb-6 flex flex-wrap gap-3">
            <li class="flex items-center justify-center rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-800">
                <Icon name="skill-icons:photoshop" class="mr-2" /> photoshop
            </li>
            <li class="flex items-center justify-center rounded-full bg-green-100 px-4 py-2 font-medium text-green-800">
                <Icon name="skill-icons:vuejs-light" class="mr-2" /> Vue3
            </li>
            <li
                class="flex items-center justify-center rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-800"
            >
                <Icon name="ep:element-plus" class="mr-2" /> element-plus
            </li>
            <li
                class="flex items-center justify-center rounded-full bg-yellow-100 px-4 py-2 font-medium text-yellow-800"
            >
                <Icon name="logos:bootstrap" class="mr-2" /> bootstrap
            </li>
        </ul>
        <h2 class="mb-2 text-2xl font-semibold text-gray-700">聯絡方式</h2>
        <div class="flex flex-col flex-wrap gap-1">
            <span class="font-semibold text-gray-500"
                ><img src="/public/icons8-gmail-144.png" class="ml-[0.1rem] inline-block h-8 w-8" alt="" />
                testuseroozx@gamil.com</span
            >
            <span class="font-semibold text-gray-500"
                ><img src="/public/icons8-line-logo-144.png" class="inline-block h-9 w-9" alt="" />nope</span
            >
        </div>
    </div>
</template>

<style scoped></style>
