<script setup lang="ts">
const { theme } = toRefs(useSettingStore())
</script>

<template>
  <n-config-provider :theme="theme">
    <div h-screen>
      <router-view />
    </div>
  </n-config-provider>
</template>

<style>
</style>

