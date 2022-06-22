<script setup lang="ts">
const route = useRoute()
const { name, age } = route.query
</script>

<template>
  <div class="user">
    <span>hi, {{ name }} {{ age }}</span>
    <i i-carbon:accessibility-alt text="3xl green" />
  </div>
  <i i-carbon:bee />
</template>

<style>
.user {
  @apply text-red bg-#222 text-3xl m-3px text-center align-baseline;
}
i {
  @apply inline-block;
}
</style>

