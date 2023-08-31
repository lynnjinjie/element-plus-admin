<!-- eslint-disable vue/comma-dangle -->
<script setup lang='ts'>
import { LogOutOutline as LogoutIcon } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import type { Component } from 'vue'
const { name } = useUserStore()
const dialog = useDialog()
const message = useMessage()
function renderIcon(icon: Component) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}
const options = [
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
]
const router = useRouter()
function logout() {
  router.push('/login')
}
function handleSelect(key) {
  console.log('🚀 ~ file: UserAvatar.vue:28 ~ handleSelect ~ key:', key)
  if (key === 'logout') {
    dialog.warning({
      title: '提示',
      content: '确认退出？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        logout()
        message.success('已退出登录')
      },
    })
  }
}
</script>

<template>
  <n-dropdown :options="options" trigger="hover" @select="handleSelect">
    <div ml-4 flex cursor-pointer items-center>
      <img src="https://assets.qszone.com/images/avatar.jpg" mr-1 h-35px w-35px rounded-full>
      <span>{{ name }}</span>
    </div>
  </n-dropdown>
</template>
