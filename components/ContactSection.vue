<script setup lang="ts">
const { t } = useI18n()

const form = reactive({
    name: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const toastMessage = ref('')
const toastType = ref<'success' | 'error'>('success')
const showToast = ref(false)

let toastTimer: ReturnType<typeof setTimeout>

function toast(message: string, type: 'success' | 'error' = 'success') {
    toastMessage.value = message
    toastType.value = type
    showToast.value = true
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => { showToast.value = false }, 4000)
}

const handleSubmit = async () => {
    isSubmitting.value = true
    try {
        await $fetch('https://formspree.io/f/xwpkjqgd', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: form
        })
        isSubmitted.value = true
        form.name = ''
        form.email = ''
        form.message = ''
    } catch {
        toast(t('contact.error'), 'error')
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
    <section id="contact" class="pb-20">
        <div class="mx-auto max-w-[80vw] md:max-w-[70vw]">

             <div class="mb-10 flex items-center gap-2">
                <span class="material-symbols-outlined">alternate_email</span>
                <h2 class="font-serif text-2xl text-ink-900 dark:text-ink-100">{{ t('contact.title') }}</h2>
            </div>


            <div class="space-y-3 text-base">
                <a
                    href="mailto:csiangjyun@gmail.com"
                    class="flex items-center gap-2 text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100"
                >
                    <span class="material-symbols-outlined text-[18px]">mail</span>
                    csiangjyun@gmail.com
                </a>
                <a
                    href="https://github.com/sakura0711"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100"
                >
                    <span class="material-symbols-outlined text-[18px]">code</span>
                    github.com/sakura0711
                </a>
                <p class="flex items-center gap-2 text-ink-400">
                    <span class="material-symbols-outlined text-[18px]">location_on</span>
                    {{ t('contact.location') }}
                </p>
            </div>

            <div v-if="isSubmitted" class="mt-10">
                <p class="text-base text-ink-500">{{ t('contact.submitted') }}</p>
            </div>

            <form v-else class="mt-10 max-w-sm space-y-4" @submit.prevent="handleSubmit">
                <input
                    v-model="form.name"
                    type="text"
                    :placeholder="t('contact.namePlaceholder')"
                    required
                    class="block w-full border-0 border-b border-ink-200 bg-transparent pb-2 text-base text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none dark:border-ink-800 dark:text-ink-100 dark:placeholder:text-ink-600 dark:focus:border-ink-100"
                />
                <input
                    v-model="form.email"
                    type="email"
                    placeholder="Email"
                    required
                    class="block w-full border-0 border-b border-ink-200 bg-transparent pb-2 text-base text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none dark:border-ink-800 dark:text-ink-100 dark:placeholder:text-ink-600 dark:focus:border-ink-100"
                />
                <textarea
                    v-model="form.message"
                    rows="3"
                    :placeholder="t('contact.messagePlaceholder')"
                    required
                    class="block w-full resize-none border-0 border-b border-ink-200 bg-transparent pb-2 text-base text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none dark:border-ink-800 dark:text-ink-100 dark:placeholder:text-ink-600 dark:focus:border-ink-100"
                ></textarea>
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="text-base text-ink-900 underline decoration-ink-300 underline-offset-4 transition-colors hover:decoration-ink-900 disabled:opacity-50 dark:text-ink-100 dark:decoration-ink-600 dark:hover:decoration-ink-100"
                >
                    {{ isSubmitting ? t('contact.submitting') : t('contact.submit') }}
                </button>
            </form>
        </div>
    </section>

    <Teleport to="body">
        <Transition name="toast">
            <div
                v-if="showToast"
                class="fixed bottom-8 left-1/2 z-[70] -translate-x-1/2"
            >
                <div
                    class="flex items-center gap-2 rounded-md border px-5 py-3 text-sm shadow-lg backdrop-blur-md"
                    :class="toastType === 'error'
                        ? 'border-red-200/30 bg-red-50/80 text-red-800 dark:border-red-800/30 dark:bg-red-950/80 dark:text-red-300'
                        : 'border-ink-200/30 bg-ink-50/80 text-ink-700 dark:border-ink-700/30 dark:bg-ink-900/80 dark:text-ink-300'"
                >
                    <span class="material-symbols-outlined text-[18px]">
                        {{ toastType === 'error' ? 'error' : 'check_circle' }}
                    </span>
                    {{ toastMessage }}
                    <button
                        class="ml-2 opacity-40 transition-opacity hover:opacity-100"
                        @click="showToast = false"
                    >
                        <span class="material-symbols-outlined text-[16px]">close</span>
                    </button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
}
</style>
