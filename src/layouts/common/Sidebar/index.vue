import { RouterLink } from 'vue-router';
<script setup lang='ts'>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import type { MentionOption } from 'naive-ui'
const props = defineProps<{
  isCollapse?: boolean
}>()
const authStore = useAuthStore()
const { authRoutes } = authStore
function renderIcon(icon: string) {
  return () => h(NIcon, null, { default: () => h(Icon, { icon }) })
}
const collapsed = ref(true)
const activeKey = ref<string | null>(null)
const menuOptions: MentionOption[] = authRoutes.map((item) => {
  return {
    label: () => h(RouterLink, {
      to: {
        path: item.path,
      },
    }, { default: () => item.meta.title }),
    key: item.path,
    icon: renderIcon(item.meta.icon as string),
  }
})
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>

<style lang="scss">

</style>
