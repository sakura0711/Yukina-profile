// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },

    devServer: {
        host: '0.0.0.0',
        port: 5173
    },

    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@formkit/auto-animate', '@nuxt/icon'],

    css: [
        '~/assets/css/animations.css'
    ],

    app: {
        pageTransition: { 
            name: 'page', 
            mode: 'out-in' 
        },
        layoutTransition: { 
            name: 'layout', 
            mode: 'out-in' 
        }
    }
})
