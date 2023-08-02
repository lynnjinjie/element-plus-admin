<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
const { history } = useTab()
const activeHistory = ref()
onMounted(() => {
  console.log('routes', history)
})
const route = useRoute()
watchEffect(() => {
  activeHistory.value = route.name
})
</script>

<template>
  <div w-full p-2 border-b>
    <n-space>
      <n-tag
        v-for="item in history"
        :key="item.name"
        :bordered="false"
        :type="activeHistory === item.name ? 'success' : 'default'"
        closable
        @click="$router.push({ name: item.name })"
      >
        {{ item.name }}
      </n-tag>
    </n-space>
  </div>
</template>
