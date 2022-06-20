<script setup lang="ts">
  const route = useRoute()
  console.log('router',route.query)
  const {name, age} = route.query
</script>
<template>
  <div class="user">
    <span>hi, {{name}} {{age}}</span>
    <i i-carbon:accessibility-alt text="3xl green"></i></div>
  <i i-carbon:bee></i>
</template>

<style>
.user {
  @apply text-red bg-#222 text-3xl m-3px text-center align-baseline;
}
i {
  @apply inline-block;
}
</style>

<route>
{
  name: "User2"
}
</route>
