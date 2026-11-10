<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <section id="about" class="pb-20">
        <div class="mx-auto max-w-[70vw] mt-10">
            <p class="max-w-xl text-lg leading-[1.9] text-ink-600 dark:text-ink-400">
                {{ t('about.bio') }}
            </p>
        </div>
    </section>
</template>
