<script setup lang="ts">
const isScrolled = ref(false)
const isMobileOpen = ref(false)
const isDark = useDark()
const toggleDark = useToggle(isDark)

const navLinks = [
    { label: '經歷', href: '#experience' },
    { label: '作品', href: '#projects' },
    { label: '聯繫', href: '#contact' }
]

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

const scrollTo = (href: string) => {
    isMobileOpen.value = false
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
    <header
        :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled
                ? 'bg-ink-50/90 dark:bg-ink-950/90 backdrop-blur-md'
                : 'bg-transparent'
        ]"
    >
        <nav class="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
            <a
                href="#"
                class="text-sm text-ink-900 dark:text-ink-100"
                @click.prevent="window.scrollTo({ top: 0, behavior: 'smooth' })"
            >
                鄭翔駿
            </a>

            <div class="hidden items-center gap-5 md:flex">
                <a
                    v-for="link in navLinks"
                    :key="link.href"
                    :href="link.href"
                    class="text-sm text-ink-400 transition-colors hover:text-ink-900 dark:text-ink-500 dark:hover:text-ink-100"
                    @click.prevent="scrollTo(link.href)"
                >
                    {{ link.label }}
                </a>

                <button
                    class="text-ink-400 transition-colors hover:text-ink-900 dark:text-ink-500 dark:hover:text-ink-100"
                    aria-label="切換深色模式"
                    @click="toggleDark()"
                >
                    <Icon :name="isDark ? 'lucide:sun' : 'lucide:moon'" class="h-3.5 w-3.5" />
                </button>
            </div>

            <div class="flex items-center gap-3 md:hidden">
                <button
                    class="text-ink-400 transition-colors hover:text-ink-900 dark:text-ink-500 dark:hover:text-ink-100"
                    aria-label="切換深色模式"
                    @click="toggleDark()"
                >
                    <Icon :name="isDark ? 'lucide:sun' : 'lucide:moon'" class="h-3.5 w-3.5" />
                </button>
                <button
                    class="text-ink-400 transition-colors hover:text-ink-900 dark:text-ink-500 dark:hover:text-ink-100"
                    aria-label="選單"
                    @click="isMobileOpen = !isMobileOpen"
                >
                    <Icon :name="isMobileOpen ? 'lucide:x' : 'lucide:menu'" class="h-4 w-4" />
                </button>
            </div>
        </nav>

        <Transition name="slide">
            <div
                v-if="isMobileOpen"
                class="bg-ink-50 px-6 pb-4 md:hidden dark:bg-ink-950"
            >
                <a
                    v-for="link in navLinks"
                    :key="link.href"
                    :href="link.href"
                    class="block py-2 text-sm text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100"
                    @click.prevent="scrollTo(link.href)"
                >
                    {{ link.label }}
                </a>
            </div>
        </Transition>
    </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>
