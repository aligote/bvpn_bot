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
      base: './dt/clients'
    },
    db_configs: {
      driver: 'fs',
      base: './dt/configs'
    },
    disable_buying: {
      driver: 'fs',
      base: './dt/disable-buying'
    },
  } },
  compatibilityDate: '2024-12-04'
});
