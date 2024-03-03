<script setup lang='ts'>
import { groupItems } from '../data'
</script>

<template>
  <n-card title="项目">
    <template #header-extra />
    <n-grid :x-gap="10" :y-gap="8" :cols="3">
      <n-grid-item v-for="(item, index) in groupItems" :key="index">
        <span>{{ item.title }}</span>
      </n-grid-item>
    </n-grid>
  </n-card>
</template>
