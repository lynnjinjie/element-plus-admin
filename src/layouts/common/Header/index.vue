<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
const emit = defineEmits(['toggle'])
const toggleSidebar = () => {
  emit('toggle', 1)
}
const data = ref('')
data.value = localStorage.getItem('data')
const router = useRouter()
const logout = () => {
  router.push('/login')
}
</script>

<template>
  <n-layout-header h-63px p-x-2 flex items-center>
    header
    <n-button @click="logout">
      退出
    </n-button>
  </n-layout-header>
</template>

<style lang="scss" scoped>
</style>
