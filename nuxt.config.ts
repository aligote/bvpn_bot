// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  nitro: { storage: {
    clients: {
      driver: 'fs',
      base: './.data/clients'
    },
    db_configs: {
      driver: 'fs',
      base: './.data/configs'
    },
    disable_buying: {
      driver: 'fs',
      base: './.data/disable-buying'
    },
  } },
  compatibilityDate: '2024-12-04'
});
