<script setup lang="ts">
defineOptions({
  name: 'Home',
})
const { x, y } = useMouse()
</script>

<template>
  <div>home hello world</div>
  <div>{{ x }}, {{ y }}</div>
</template>

