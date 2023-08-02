<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
const { theme } = toRefs(useSettingStore())
</script>

<template>
  <n-config-provider
    :theme="theme"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full"
  >
    <!-- <div h-screen> -->
    <naive-provider>
      <router-view />
    </naive-provider>
    <!-- </div> -->
  </n-config-provider>
</template>

<style>
</style>

