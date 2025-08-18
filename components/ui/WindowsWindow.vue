<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  title?: string
  icon?: string
  showCloseButton?: boolean
  isMaximized?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '視窗',
  icon: 'material-symbols:article',
  showCloseButton: true,
  isMaximized: false
})

const emit = defineEmits<{
  close: []
  minimize: []
  maximize: []
}>()

const isClosing = ref(false)
const windowRef = ref<HTMLElement>()
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const windowPosition = ref({ x: 0, y: 0 })
const isWindowMaximized = ref(false)
const originalSize = ref({ width: '', height: '', x: 0, y: 0 })

// 調整大小相關狀態
const isResizing = ref(false)
const resizeStart = ref({ x: 0, y: 0, width: 0, height: 0, windowX: 0, windowY: 0 })
const resizeDirection = ref('')
const windowSize = ref({ width: 1300, height: 800 })
const minSize = { width: 400, height: 300 }


const handleClose = () => {
  isClosing.value = true
  
  // 添加關閉動畫
  if (windowRef.value) {
    windowRef.value.classList.add('window-slide-out')
  }
  
  // 動畫完成後導航
  setTimeout(() => {
    navigateTo('/')
    emit('close')
  }, 300)
}

const handleMinimize = () => {
  // 恢復到初始大小和位置
  if (isWindowMaximized.value) {
    isWindowMaximized.value = false
    windowPosition.value = { x: originalSize.value.x, y: originalSize.value.y }
  } else {
    // 如果已經是正常大小，則重置到中心位置
    windowPosition.value = { x: 0, y: 0 }
  }
  
  // 添加恢復動畫
  if (windowRef.value) {
    windowRef.value.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
  }
  
  emit('minimize')
}

const handleMaximize = () => {
  if (!isWindowMaximized.value) {
    // 儲存當前位置和大小
    originalSize.value = {
      width: windowRef.value?.style.width || '',
      height: windowRef.value?.style.height || '',
      x: windowPosition.value.x,
      y: windowPosition.value.y
    }
    
    // 最大化 - 重置位置，讓 CSS 處理大小
    isWindowMaximized.value = true
    windowPosition.value = { x: 0, y: 0 }
  } else {
    // 還原大小
    isWindowMaximized.value = false
    windowPosition.value = { x: originalSize.value.x, y: originalSize.value.y }
  }
  
  emit('maximize')
}

// 拖動相關功能
const startDrag = (event: MouseEvent) => {
  if (isWindowMaximized.value) return // 最大化時不允許拖動
  
  // 防止按鈕被觸發
  if ((event.target as HTMLElement).closest('.window-control-btn')) return
  
  isDragging.value = true
  dragStart.value = {
    x: event.clientX - windowPosition.value.x,
    y: event.clientY - windowPosition.value.y
  }
  
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  
  // 添加拖動時的樣式
  if (windowRef.value) {
    windowRef.value.classList.add('dragging', 'no-select')
    windowRef.value.style.transition = 'none'
  }
  
  // 防止預設行為
  event.preventDefault()
}

const onDrag = (event: MouseEvent) => {
  if (!isDragging.value) return
  
  windowPosition.value = {
    x: event.clientX - dragStart.value.x,
    y: event.clientY - dragStart.value.y
  }
  
  // 限制視窗不能拖出螢幕邊界
  const maxX = window.innerWidth - 200 // 至少保留200px可見
  const maxY = window.innerHeight - 100 // 至少保留100px可見
  
  windowPosition.value.x = Math.max(-500, Math.min(maxX, windowPosition.value.x))
  windowPosition.value.y = Math.max(-70, Math.min(maxY, windowPosition.value.y))
}

const stopDrag = () => {
  isDragging.value = false
  
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  
  // 恢復過渡動畫和樣式
  if (windowRef.value) {
    windowRef.value.classList.remove('dragging', 'no-select')
    windowRef.value.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
  }
}

// 調整大小功能
const startResize = (event: MouseEvent, direction: string) => {
  if (isWindowMaximized.value) return // 最大化時不允許調整大小
  
  event.preventDefault()
  event.stopPropagation()
  
  isResizing.value = true
  resizeDirection.value = direction
  resizeStart.value = {
    x: event.clientX,
    y: event.clientY,
    width: windowSize.value.width,
    height: windowSize.value.height,
    windowX: windowPosition.value.x,
    windowY: windowPosition.value.y
  }
  
  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', stopResize)
  
  // 禁用過渡效果
  if (windowRef.value) {
    windowRef.value.style.transition = 'none'
  }
}

const onResize = (event: MouseEvent) => {
  if (!isResizing.value) return
  
  const deltaX = event.clientX - resizeStart.value.x
  const deltaY = event.clientY - resizeStart.value.y
  
  let newWidth = resizeStart.value.width
  let newHeight = resizeStart.value.height
  let newX = resizeStart.value.windowX
  let newY = resizeStart.value.windowY
  
  // 根據拖拽方向調整尺寸和位置
  if (resizeDirection.value.includes('right')) {
    // 右邊調整：右邊緣移動，左邊緣固定
    newWidth = Math.max(minSize.width, resizeStart.value.width + deltaX)
  }
  
  if (resizeDirection.value.includes('left')) {
    newWidth = Math.max(minSize.width, resizeStart.value.width - deltaX)
  }
  
  if (resizeDirection.value.includes('bottom')) {
    // 下方調整：下邊緣移動，上邊緣固定
    newHeight = Math.max(minSize.height, resizeStart.value.height + deltaY)
  }
  
  // 更新視窗大小和位置
  windowSize.value = {
    width: newWidth,
    height: newHeight
  }
  
  windowPosition.value = {
    x: newX,
    y: newY
  }
}

const stopResize = () => {
  isResizing.value = false
  
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
  
  // 恢復過渡效果
  setTimeout(() => {
    if (windowRef.value) {
      windowRef.value.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  }, 100)
}

// 雙擊標題列最大化/還原
const handleDoubleClick = () => {
  handleMaximize()
}

// 組件掛載時添加進入動畫
onMounted(() => {
  if (windowRef.value) {
    windowRef.value.classList.add('window-bounce-in')
  }
})
</script>

<template>
  <div class="fixed inset-0 z-40 flex items-center justify-center fade-in mb-10 pointer-events-none">
    <!-- 視窗容器 -->
    <div 
      ref="windowRef"
      :class="[
        'bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden pointer-events-auto relative',
        isWindowMaximized ? 'fixed top-0 left-0 right-0 rounded-none' : 'mx-4',
        isDragging ? 'cursor-grabbing' : '',
        isResizing ? 'cursor-nw-resize' : ''
      ]"
      :style="{
        transition: (isDragging || isResizing) ? 'none' : 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: !isWindowMaximized ? `translate(${windowPosition.x}px, ${windowPosition.y}px)` : 'none',
        width: !isWindowMaximized ? `${windowSize.width}px` : '100%',
        height: isWindowMaximized ? 'calc(100vh - 100px)' : `${windowSize.height}px`
      }"
    >
      <!-- 視窗標題列 -->
      <div 
        class="window-header bg-gradient-to-r from-pink-400 to-blue-300 px-4 py-3 flex items-center justify-between select-none"
        @mousedown="startDrag"
        @dblclick="handleDoubleClick"
        :class="{ 'cursor-grab': !isDragging && !isWindowMaximized, 'cursor-grabbing': isDragging }"
      >
        <div class="flex items-center gap-3">
          <!-- 視窗圖標和標題 -->
          <div class="flex items-center gap-2">
            <Icon :name="icon" class="text-lg text-white" />
            <span class="text-white text-sm font-medium">{{ title }}</span>
          </div>
        </div>

        <!-- 視窗控制按鈕 -->
        <div class="flex items-center gap-1">
         
          <!-- 最大化/還原按鈕 -->
          <button 
            @click="handleMaximize"
            class="window-control-btn hover:bg-pink-300"
            :title="isWindowMaximized ? '還原' : '最大化'"
          >
            <svg class="w-3 h-3 text-white" viewBox="0 0 12 12">
              <rect v-if="!isWindowMaximized" x="0" y="0" width="9" height="9" stroke="currentColor" stroke-width="1" fill="none"/>
              <g v-else>
                <rect x="0" y="2" width="7" height="7" stroke="currentColor" stroke-width="1" fill="none"/>
                <rect x="2" y="0" width="7" height="7" stroke="currentColor" stroke-width="1" fill="none"/>
              </g>
            </svg>
          </button>

          <!-- 關閉按鈕 -->
          <button 
            v-if="showCloseButton"
            @click="handleClose"
            class="window-control-btn hover:bg-red-400 transition-all duration-200"
            title="關閉"
          >
            <svg class="w-3 h-3 text-white" viewBox="0 0 12 12">
              <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M2 2l8 8M10 2l-8 8"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- 視窗內容區域 -->
      <div class="window-content h-full overflow-auto bg-gray-50 pb-12">
        <slot />
      </div>
      
      <!-- 調整大小區域 -->
      <template v-if="!isWindowMaximized">
        <!-- 左邊調整區域 -->
        <div 
          @mousedown="(e) => startResize(e, 'left')"
          class="resize-handle-edge absolute top-0 left-0 w-1 h-full cursor-ew-resize opacity-0 hover:opacity-100 hover:bg-blue-400 transition-all duration-200"
          title="拖拽調整寬度"
        ></div>
        
        <!-- 右邊調整區域 -->
        <div 
          @mousedown="(e) => startResize(e, 'right')"
          class="resize-handle-edge absolute top-0 right-0 w-1 h-full cursor-ew-resize opacity-0 hover:opacity-100 hover:bg-blue-400 transition-all duration-200"
          title="拖拽調整寬度"
        ></div>
        
        <!-- 下方調整區域 -->
        <div 
          @mousedown="(e) => startResize(e, 'bottom')"
          class="resize-handle-edge absolute bottom-0 left-0 w-full h-1 cursor-ns-resize opacity-0 hover:opacity-100 hover:bg-blue-400 transition-all duration-200"
          title="拖拽調整高度"
        ></div>
        
        <!-- 右下角調整區域 -->
        <div 
          @mousedown="(e) => startResize(e, 'bottom-right')"
          class="resize-handle-corner absolute bottom-0 right-0 w-4 h-4 cursor-nw-resize opacity-0 hover:opacity-100 transition-opacity duration-200"
          title="拖拽調整大小"
        >
          <svg class="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="currentColor">
            <path d="M16 16V10h-2v4H10v2h6zM16 6V0h-6v2h4v4h2z"/>
          </svg>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* 視窗控制按鈕 */
.window-control-btn {
  @apply w-8 h-6 flex items-center justify-center rounded-lg transition-colors duration-200;
}

.window-header {
  cursor: grab;
}

.window-header:active {
  cursor: grabbing;
}

/* 調整大小控制區域 */
.resize-handle-edge {
  z-index: 10;
}

.resize-handle-edge:hover {
  background-color: rgba(59, 130, 246, 0.3) !important;
}

.resize-handle-corner {
  z-index: 20;
  background: linear-gradient(-45deg, transparent 0%, transparent 30%, rgba(156, 163, 175, 0.3) 30%, rgba(156, 163, 175, 0.3) 50%, transparent 50%, transparent 80%, rgba(156, 163, 175, 0.3) 80%);
  background-size: 8px 8px;
}

.resize-handle-corner:hover {
  background: linear-gradient(-45deg, transparent 0%, transparent 30%, rgba(156, 163, 175, 0.6) 30%, rgba(156, 163, 175, 0.6) 50%, transparent 50%, transparent 80%, rgba(156, 163, 175, 0.6) 80%);
  background-size: 8px 8px;
}

/* 滾動條美化 */
.window-content::-webkit-scrollbar {
  width: 8px;
}

.window-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.window-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.window-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 按鈕懸浮效果 */
.window-control-btn:hover {
  transform: scale(1.1);
}

.window-control-btn:active {
  transform: scale(0.95);
}

/* 拖動時的效果 */
.dragging {
  z-index: 1000;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

/* 防止拖動時選中文字 */
.no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
