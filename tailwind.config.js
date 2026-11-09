/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue'
    ],
    theme: {
        extend: {
            colors: {
                ink: {
                    50: '#faf9f7',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                    950: '#0c0a09'
                }
            },
            fontFamily: {
                sans: ['"DM Sans"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
                serif: ['"Instrument Serif"', '"Noto Serif TC"', 'Georgia', 'serif']
            }
        }
    },
    plugins: []
}
