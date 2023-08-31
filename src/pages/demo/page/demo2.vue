<script setup lang='ts'>
defineOptions({
  name: 'Demo2',
})
const count = ref(0)
</script>

<template>
  <div>
    <n-input-number v-model:value="count" />
  </div>
</template>
