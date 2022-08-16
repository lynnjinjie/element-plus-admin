import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
  const isDark = useDark()
  const theme = computed<GlobalTheme | undefined>(() => {
    return isDark.value ? darkTheme : undefined
  })
  const setDarkMode = () => {
    isDark.value = !isDark.value
  }
  return {
    isDark,
    theme,
    setDarkMode,
  }
})
