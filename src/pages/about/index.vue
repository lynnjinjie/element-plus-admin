<script lang="ts">
export default {
  name: 'About',
}
</script>

<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
</script>

<template>
  <div>
    <router-link to="/">
      home page
    </router-link>
  </div>
</template>
