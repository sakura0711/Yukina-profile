<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 建立一個 ref 來引用目標元素
const targetElement = ref<HTMLElement | null>(null)

onMounted(() => {
  // 建立 Intersection Observer 來監聽元素是否進入視窗
  const observer = new IntersectionObserver(
    (entries) => {
      // 遍歷所有被監聽的元素
      entries.forEach((entry) => {
        // 判斷元素是否在視窗範圍內
        if (entry.isIntersecting) {
          // 元素進入視窗時，添加 'in-view' class 來觸發動畫
          entry.target.classList.add('in-view')
        } else {
          // 元素離開視窗時，移除 'in-view' class
          entry.target.classList.remove('in-view')
        }
      })
    },
    { 
      // 當元素 10% 進入視窗時觸發
      threshold: 0.1 
    }
  )

  // 如果目標元素存在，開始監聽
  if (targetElement.value) {
    observer.observe(targetElement.value)
  }
})
</script>

<template>
    <div class="mt-16">
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1 class="text-rose-900 animate-slide-in-fade" ref="targetElement">            Project :D</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
        <h1>            Project</h1>
    </div>
</template>

<style scoped>
.in-view {
  animation: slideInFade 1s ease-out forwards;
}

@keyframes slideInFade {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>