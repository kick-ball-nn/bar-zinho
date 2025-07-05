import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({ autoImport: true })
        )
      })
    },
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  vite: {
    server: {
      watch: {
        usePolling: true,
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  eslint: {
    config: {
      stylistic: true
    }
  }
})
