<script setup lang='ts'>
import UserAvatar from './components/UserAvatar.vue'
defineOptions({
  name: 'Header',
})
const { toggleTheme } = useSettingStore()
</script>

<template>
  <div h-63px flex items-center justify-end px-4>
    <div mx-2 cursor-pointer text-5 i="carbon-sun dark:carbon-moon" @click="toggleTheme()" />
    <UserAvatar />
  </div>
</template>

<style lang="scss" scoped>
</style>
