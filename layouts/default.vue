<script setup lang="ts"></script>

<template>
    <div>
        <!-- header 固定 -->
        <LayoutHeaderItem class="fixed left-0 top-0 z-50 block w-full shadow-md"></LayoutHeaderItem>

        <!-- 中間顯示內容(類似 <router-view>) -->
        <slot></slot>

        <!-- footer 固定 -->
        <LayoutFooterItem
            class="fixed bottom-0 left-0 z-50 w-full bg-neutral-500/50 p-8 text-white shadow-md backdrop-blur-md"
        ></LayoutFooterItem>
    </div>
</template>

<style scoped></style>
