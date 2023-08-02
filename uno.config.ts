// uno.config.js
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  // ...
  shortcuts: {
    btn: 'px-2 py-1 mr-1 border-round-2',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerDirective(),
  ],
})
