<script lang="ts">
export default {
  name: 'Home',
}
</script>

<script setup lang="ts">
const { x, y } = useMouse()
const settingStore = useSettingStore()
</script>

<template>
  <div>home hello world</div>
  <div>{{ x }}, {{ y }}</div>
</template>

