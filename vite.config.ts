
import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Pages from 'vite-plugin-pages'
import Layout from 'vite-plugin-vue-layouts'
import Unocss  from 'unocss/vite'
import { presetUno, presetIcons, presetAttributify } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    Vue({
      reactivityTransform: true
    }),
    Pages(),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    Layout(),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router'
      ],
      resolvers: [ElementPlusResolver()]
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    })
  ],
})
