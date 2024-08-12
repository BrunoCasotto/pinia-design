// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
      meta:[
        {name: 'viewport', content: 'initial-scale=1.0, width=device-width, height=device-height, viewport-fit=cover' }
      ]
    },
  },

  modules: ["@nuxt/image"]
})