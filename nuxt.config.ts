// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      email: 'mrgirardflorent@gmail.com ',
      tel: '+33638520096',
      server: 'http://localhost:4000',
    },
  },

  modules: [
    [
      'nuxt-purgecss',
      {
        enabled: true,
        safelist: [/swiper/, 'button', /nuxt-devtools/],
      },
    ],
    ['@nuxtjs/robots', { UserAgent: '*' }],
    [
      '@nuxtjs/i18n',

      {
        defaultLocale: 'fr',
        detectBrowserLanguage: false,
        lagacy: false,
        locales: [
          {
            code: 'en',
            name: 'En',
            iso: 'en-US',
          },
          {
            code: 'fr',
            name: 'Fr',
            iso: 'fr-FR',
          },
        ],
      },
    ],
    '@nuxtjs/device',
    'nuxt-swiper',
    '@formkit/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
})
