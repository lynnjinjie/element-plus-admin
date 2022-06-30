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
  <el-header>
    <i i-carbon:menu cursor-pointer @click="toggleSidebar" />
    this is header
  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  @apply flex items-center bg-#222 text-white;
  i {
    @apply inline-block text-6;
  }
}
</style>
