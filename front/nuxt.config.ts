import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        config.plugins.push(
          vuetify({ autoImport: true }),
        )
      })
    },
  ],
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-04-03',
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
