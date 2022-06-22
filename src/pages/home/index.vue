<script lang="ts">
export default {
  name: 'Home',
}
</script>

<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div>home</div>
  <div>{{ x }}, {{ y }}</div>
</template>

