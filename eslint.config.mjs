import sjkeyConfig from '@sjkey/eslint-config-vue'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  sjkeyConfig({
    files: ['components/ui/**/*.ts'],
    rules: {
      'max-len': 'off',
    },
  }),
)
