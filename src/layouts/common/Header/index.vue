<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
const emit = defineEmits(['toggle'])
const toggleSidebar = () => {
  emit('toggle', 1)
}
</script>

<template>
  <n-layout-header>
    <i i-carbon:menu cursor-pointer @click="toggleSidebar" />
    this is header
  </n-layout-header>
</template>

<style lang="scss" scoped>
</style>
