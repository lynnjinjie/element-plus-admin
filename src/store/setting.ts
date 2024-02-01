import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
  const isDark = useDark()
  const collapsed = ref<boolean>(false)
  const theme = computed<GlobalTheme | undefined>(() => {
    return isDark.value ? darkTheme : undefined
  })
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }
  const setCollapsed = (val: boolean) => {
    collapsed.value = val
  }
  return {
    isDark,
    theme,
    toggleTheme,
    collapsed,
    setCollapsed,
  }
}, { persist: true })
