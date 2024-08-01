export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'nuxt-typed-router', '@nuxt/image'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },
})
