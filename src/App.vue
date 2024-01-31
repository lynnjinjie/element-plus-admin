<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
const { theme } = toRefs(useSettingStore())
</script>

<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN" class="h-full">
    <n-dialog-provider>
      <n-message-provider>
        <router-view />
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

