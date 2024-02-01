<script setup lang='ts'>
import { growCardList } from '../data'
</script>

<template>
  <div md:flex>
    <template v-for="(item, index) in growCardList" :key="index">
      <n-card :title="item.title" rounded :class="{ '!md:mr-4' : index + 1 < 4, '!mt-4': index >= 0 }">
        <template #header-extra>
          <n-tag :color="{ color: item.color }">
            {{ item.action }}
          </n-tag>
        </template>
        <p py-2 text-6 font-bold>
          ${{ item.value }}
        </p>
        <template #footer>
          <div flex justify-between>
            <span>总{{ item.title }}</span>
            <span>${{ item.total }}</span>
          </div>
        </template>
      </n-card>
    </template>
  </div>
</template>
