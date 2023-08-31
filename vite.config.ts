import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    splitVendorChunkPlugin(),
    viteCompression(),
    Vue({
      reactivityTransform: true,
    }),
    Components({
      dirs: [
        'src/components',
        'src/layouts/common',
      ],
      dts: 'src/types/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            'useDark',
            'useStorage',
          ],
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
          ],
        },
      ],
      dirs: [
        'src/composables',
        'src/store',
      ],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Unocss(),
    Inspect(),
  ],
})
