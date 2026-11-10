export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    devServer: {
        host: '0.0.0.0',
        port: 5173
    },

    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/icon'],

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            htmlAttrs: { lang: 'zh-TW' },
            title: 'SIANG-JYUN | 前端工程師 — Portfolio',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content:
                        '前端工程師SIANG-JYUN的個人作品集，Vue 3 / Nuxt / TypeScript，工研院實習經歷，ISO 27001 主導稽核員。'
                },
                { property: 'og:title', content: 'SIANG-JYUN | 前端工程師 — Portfolio' },
                {
                    property: 'og:description',
                    content:
                        '前端工程師SIANG-JYUN的個人作品集，Vue 3 / Nuxt / TypeScript，工研院實習經歷，ISO 27001 主導稽核員。'
                },
                { property: 'og:type', content: 'website' },
                { property: 'og:locale', content: 'zh_TW' },
                { name: 'author', content: 'SIANG-JYUN' }
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;600;700&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
                }
            ]
        }
    }
})
