<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
defineOptions({
  name: 'Demo1',
})
const count = ref(0)
</script>

<template>
  <div>
    <input v-model="count" type="number">
  </div>
</template>
