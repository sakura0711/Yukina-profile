export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    devServer: {
        host: '0.0.0.0',
        port: 5173
    },

    site: {
        url: 'https://www.sakurayukina.com'
    },

    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/i18n', '@nuxtjs/sitemap'],

    sitemap: {
        xslColumns: [
            { label: 'URL', width: '65%' },
            { label: 'Last Modified', width: '25%' },
            { label: 'Priority', width: '10%' }
        ]
    },

    i18n: {
        locales: [
            { code: 'zh-TW', name: '中文' },
            { code: 'en-US', name: 'English' }
        ],
        defaultLocale: 'zh-TW',
        strategy: 'no_prefix'
    },

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
                        '鄭翔駿 (SIANG-JYUN) — 前端工程師作品集。Vue 3 / Nuxt / TypeScript 全端開發，工研院智慧醫療 AMR 實習經歷，共創 VecStruct AI 平台，ISO 27001 主導稽核員認證。'
                },
                { property: 'og:title', content: 'SIANG-JYUN | 前端工程師 — Portfolio' },
                {
                    property: 'og:description',
                    content:
                        '鄭翔駿 (SIANG-JYUN) — 前端工程師作品集。Vue 3 / Nuxt / TypeScript 全端開發，工研院智慧醫療 AMR 實習經歷，共創 VecStruct AI 平台，ISO 27001 主導稽核員認證。'
                },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://www.sakurayukina.com/' },
                { property: 'og:locale', content: 'zh_TW' },
                { property: 'og:image', content: 'https://www.sakurayukina.com/images/projects/vecstruct.png' },
                { property: 'og:image:width', content: '1587' },
                { property: 'og:image:height', content: '991' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'SIANG-JYUN | 前端工程師 — Portfolio' },
                {
                    name: 'twitter:description',
                    content:
                        '鄭翔駿 (SIANG-JYUN) — 前端工程師作品集。Vue 3 / Nuxt / TypeScript 全端開發，工研院智慧醫療 AMR 實習經歷，共創 VecStruct AI 平台，ISO 27001 主導稽核員認證。'
                },
                { name: 'twitter:image', content: 'https://www.sakurayukina.com/images/projects/vecstruct.png' },
                { name: 'author', content: 'SIANG-JYUN' },
                { name: 'google-site-verification', content: 'xda8Sr-hW7nInlORT40XVP23rs-HLV18cKfl5DnfNLQ' }
            ],
            link: [
                { rel: 'canonical', href: 'https://www.sakurayukina.com/' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon_02.ico' },
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
