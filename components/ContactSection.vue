<script setup lang="ts">
const form = reactive({
    name: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

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
        alert('送出失敗，請直接寄信至 Email。')
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
    <section id="contact" class="pb-20">
        <div class="mx-auto max-w-3xl px-6">
            <h2 class="mb-10 font-serif text-2xl text-ink-900 dark:text-ink-100">聯繫</h2>

            <div class="space-y-2 text-sm">
                <a
                    href="mailto:vamosnet2025@gmail.com"
                    class="block text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100"
                >
                    vamosnet2025@gmail.com
                </a>
                <a
                    href="https://github.com/sakura0711"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100"
                >
                    github.com/sakura0711
                </a>
                <p class="text-ink-400">台南 / 高雄 / 台中</p>
            </div>

            <div v-if="isSubmitted" class="mt-10">
                <p class="text-sm text-ink-500">訊息已送出，感謝您的聯繫。</p>
            </div>

            <form v-else class="mt-10 max-w-sm space-y-4" @submit.prevent="handleSubmit">
                <input
                    v-model="form.name"
                    type="text"
                    placeholder="姓名"
                    required
                    class="block w-full border-0 border-b border-ink-200 bg-transparent pb-2 text-sm text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none dark:border-ink-800 dark:text-ink-100 dark:placeholder:text-ink-600 dark:focus:border-ink-100"
                />
                <input
                    v-model="form.email"
                    type="email"
                    placeholder="Email"
                    required
                    class="block w-full border-0 border-b border-ink-200 bg-transparent pb-2 text-sm text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none dark:border-ink-800 dark:text-ink-100 dark:placeholder:text-ink-600 dark:focus:border-ink-100"
                />
                <textarea
                    v-model="form.message"
                    rows="3"
                    placeholder="訊息"
                    required
                    class="block w-full resize-none border-0 border-b border-ink-200 bg-transparent pb-2 text-sm text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none dark:border-ink-800 dark:text-ink-100 dark:placeholder:text-ink-600 dark:focus:border-ink-100"
                ></textarea>
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="text-sm text-ink-900 underline decoration-ink-300 underline-offset-4 transition-colors hover:decoration-ink-900 disabled:opacity-50 dark:text-ink-100 dark:decoration-ink-600 dark:hover:decoration-ink-100"
                >
                    {{ isSubmitting ? '送出中...' : '送出' }}
                </button>
            </form>
        </div>
    </section>
</template>
