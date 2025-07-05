import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    camelcase: ['error'],
  },
})
