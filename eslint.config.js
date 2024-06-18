import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules } from '@eslint/compat'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  { files: ['**/*.jsx', '**/*.js'], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  ...fixupConfigRules(pluginReactConfig),
  {
    extends: ['plugin:react/jsx-runtime']
  }
]
