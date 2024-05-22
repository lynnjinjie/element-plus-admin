import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
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
    viteCompression(),
    Vue(),
    viteMockServe({
      mockPath: 'src/mock/api',
      enable: true,
      watchFiles: true,
    }),
    Components({
      dirs: ['src/components', 'src/layouts/common'],
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
          '@vueuse/core': ['useDark', 'useStorage', 'useFetch'],
          'naive-ui': ['useDialog', 'useMessage', 'useNotification'],
        },
      ],
      dirs: ['src/composables', 'src/store'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Unocss(),
    Inspect(),
  ],
})
