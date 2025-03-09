/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '400px' // 設定 `xs` 斷點
            }
        }
    },
    plugins: []
}
