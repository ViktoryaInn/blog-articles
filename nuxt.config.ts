// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/shared/variables" as *;'
        }
      }
    }
  },

  // @nuxt/icon
  icon: {
    mode: 'svg',
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons',
      },
    ],
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/icon'],

  runtimeConfig: {
    public: {
      apiBase: process.env.PROXY_URL,
    },
  },
})
