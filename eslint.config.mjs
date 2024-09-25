import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    lessOpinionated: true,

    vue: {
      overrides: {
        'vue/operator-linebreak': ['error', 'before'],
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: false,
          },
        ],
      },
    },

    typescript: {
      overrides: {
        'ts/consistent-type-definitions': ['error', 'type'],
        'ts/array-type': [
          'error',
          {
            default: 'array-simple',
            readonly: 'array-simple',
          },
        ],
        'ts/member-ordering': [
          'error',
          {
            default: {
              optionalityOrder: 'required-first',
            },
          },
        ],
      },
    },

    stylistic: {
      overrides: {
        curly: 'off',
      },
    },
  }, {
    files: ['components/ui/**/*.ts'],
    rules: {
      'max-len': 'off',
    },
  }),
)
