export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-typed-router',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    'dayjs-nuxt',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  i18n: {
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
  },

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },
})
