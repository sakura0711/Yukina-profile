<script setup lang="ts"></script>

<template>
    <div class="bg-white py-24">
        <div class="flex flex-col items-center">
            <h1 class="text-6xl font-semibold text-blue-600">
                <b class="text-[clamp(24px,10vw,5rem)]">Sakura Yukina</b>
            </h1>

            <!-- 這段文字會根據視窗大小縮放，但有最小 & 最大值  text-[clamp(min,<>,max) 

                方法一 : clamp(最小值, 視窗寬度百分比, 最大值) 使用元素本體的大小來改變
                <p class="text-[5vw]">這段文字會根據視窗大小縮放</p>

                方法二 : 使用 sm: , md: , lg: , xl: 前綴來改變 (等於 @media screen and (min-width: 640px) { ... })
                ex :  
                <p class="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    這段文字會根據不同裝置改變大小
                </p>
             -->
            <p class="mt-1 text-[clamp(24px,12vw,10rem)] font-bold">落櫻ゆきな</p>
        </div>
        <ContentItem></ContentItem>
    </div>
</template>

<style scoped></style>
