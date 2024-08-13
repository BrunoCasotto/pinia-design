// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      cdn: {
        auth: '&auth=MjQ5MTYzNTU4Mw__',
        optmise: '/optimise?dppx=4',
        product: 'https://pixboost.com/api/2/img/product'
      }
    }
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: 'Suporte de Monitor Modular com Módulo de Headset Integrado | Organização e Praticidade',
      meta: [
        {
          name: "description",
          content:
            "Descubra o Suporte de Monitor Modular com Módulo de Headset Integrado, perfeito para setups de trabalho e gaming. Organize seu espaço e mantenha seu fone de ouvido ao alcance com design funcional e moderno. Personalize seu setup e melhore a produtividade com módulos versáteis e de alta qualidade.",
        },
      ],
    },
  },
  modules: ["@nuxt/image"],
});
