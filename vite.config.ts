import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    Components({
      dirs: [
        'src/components',
        'src/layouts/common',
      ],
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
      ],
      dirs: [
        'src/composables',
        'src/store',
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Unocss(),
  ],
})
