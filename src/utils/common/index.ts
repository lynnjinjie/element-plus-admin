import { h } from 'vue'
import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'
import SvgIcon from '~/components/SvgIcon.vue'

import { useSettingStore } from '~/store/setting'

export function renderIcon(icon, props = { size: 12 }) {
  return () => h(NIcon, props, { default: () => h(Icon, { icon }) })
}

export function renderCustomIcon(icon, props = { size: 12 }) {
  return () => h(NIcon, props, { default: () => h(SvgIcon, { icon }) })
}

export function getCollapsed() {
  const { collapsed } = useSettingStore()
  return unref(collapsed)
}
