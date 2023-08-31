<script setup lang="ts">
import { RouterLink, routerKey } from 'vue-router'
import { Icon } from '@iconify/vue'
import { type MentionOption, NIcon } from 'naive-ui'
defineOptions({
  name: 'Sidebar',
})
const authStore = useAuthStore()
const { authRoutes } = authStore
function renderIcon(icon: string) {
  return () => h(NIcon, null, { default: () => h(Icon, { icon }) })
}
const collapsed = ref(false)
const activeKey = ref<string | null>(null)
const route = useRoute()
const router = useRouter()
const menuRef = ref(null)
watch(route, async () => {
  await nextTick()
  menuRef.value?.showOption()
})
function resolvePath(basePath, path) {
  // if (isExternal(path)) return path
  return (
    `/${
    [basePath, path]
      .filter(path => !!path && path !== '/')
      .map(path => path.replace(/(^\/)|(\/$)/g, ''))
      .join('/')}`
  )
}
function renderItem(item, path = '') {
  item.path = resolvePath(path, item.path)
  return {
    label: () =>
      h(
        'div',
        {
          // to: {
          //   name: item.name,
          // },
        },
        { default: () => item.meta.title },
      ),
    key: item.path,
    path: item.path,
    icon: renderIcon(item.meta.icon as string),
    children: item?.children?.length > 1 ? item.children.map(v => renderItem(v, item.path)) : '',
  }
}
console.log('authRoutes', authRoutes)
const menuOptions: MentionOption[] = authRoutes
  .filter(v => (v.meta.hidden === false))
  .map(item => renderItem(item))
watchEffect(() => {
  activeKey.value = route.fullPath as string
})
function handleMenuSelect(key, item) {
  // console.log('key item', key, item)
  router.push(item.path)
}
</script>

<template>
  <n-layout-sider
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    @expand="collapsed = false"
    @collapse="collapsed = true"
  >
    <div h-14 f-c-c>
      <img src="https://assets.qszone.com/images/avatar.jpg" h-10 w-10>
      <h2 v-show="!collapsed" ml-2 flex-shrink-0 text-5 font-bold text-red-400>
        Snow Admin
      </h2>
    </div>
    <n-menu
      ref="menuRef"
      v-model:value="activeKey"
      accordion
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      @update:value="handleMenuSelect"
    />
  </n-layout-sider>
</template>

<style lang="scss">
.n-menu:not(.n-menu--collapsed) {
  .n-menu-item-content {
    &::before {
      left: 5px;
      right: 5px;
    }
    &.n-menu-item-content--selected,
    &:hover {
      &::before {
        border-left: 4px solid #316C72FF;
      }
    }
  }
}
</style>
