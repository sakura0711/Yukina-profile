<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import ContentItem from '~/components/index/ContentItem.vue';
</script>

<template>
    <div
        class="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 py-24"
    >
        <div class="animate-fadein flex flex-col items-center">
            <h1 class="text-6xl font-semibold text-blue-600 drop-shadow-lg">
                <b class="text-[clamp(24px,10vw,5rem)]">Sakura Yukina</b>
            </h1>
            <div class="my-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400"></div>
            <p class="animate-fadein-delay mt-1 text-[clamp(24px,12vw,10rem)] font-bold text-pink-500">落櫻ゆきな</p>
            <p class="animate-fadein-delay2 mt-2 text-lg italic text-gray-600"></p>
            <div class="animate-fadein-delay3 mt-6 flex gap-4">
                <a href="#" class="rounded-full bg-white p-3 shadow transition hover:bg-blue-100"></a>
                <a href="#" class="rounded-full bg-white p-3 shadow transition hover:bg-pink-100"></a>
                <a href="#" class="rounded-full bg-white p-3 shadow transition hover:bg-yellow-100"></a>
            </div>
        </div>
        <div class="relative flex w-full justify-center">
            <ContentItem class="animate-fadein-delay3 relative mt-8" />
        </div>
    </div>
</template>

<style scoped>
@keyframes fadein {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: none;
    }
}
.animate-fadein {
    animation: fadein 1s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.animate-fadein-delay {
    animation: fadein 1s 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.animate-fadein-delay2 {
    animation: fadein 1s 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.animate-fadein-delay3 {
    animation: fadein 1s 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
}
</style>
