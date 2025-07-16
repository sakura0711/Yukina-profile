module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ['@nuxt/eslint-config', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        // 若需要，可在此客製規則
    }
}
