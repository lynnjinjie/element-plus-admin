<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import type { MentionOption } from 'naive-ui'
const props = defineProps<{
  isCollapse?: boolean
}>()
const { isCollapse } = toRefs(props)
const authStore = useAuthStore()
const { authRoutes } = authStore
function renderIcon(icon: string) {
  return () => h(NIcon, null, { default: () => h(Icon, { icon }) })
}
// console.log('authRoutes', authRoutes)
const collapsed = ref(false)
const activeKey = ref<string | null>(null)
const menuOptions: MentionOption[] = authRoutes
  .filter(v => (v.meta.hidden === false))
  .map((item) => {
    return {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: item.path,
            },
          },
          { default: () => item.meta.title },
        ),
      key: item.name,
      icon: renderIcon(item.meta.icon as string),
      // children: item.children,
    }
  })
const route = useRoute()
watchEffect(() => {
  activeKey.value = route.name as string
})
</script>

<script lang="ts">
export default {
  name: 'SideBar',
}
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="isCollapse"
  >
    <n-menu
      v-model:value="activeKey"
      :collapsed="isCollapse"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>

<style lang="scss"></style>
