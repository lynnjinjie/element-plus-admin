<script setup lang='ts'>
import { useCounterStore } from '~/store/counter'
defineOptions({
  name: 'About',
})
const counter = useCounterStore()
const { count } = counter
</script>

<template>
  <div>
    <router-link to="/">
      home page
    </router-link>
    <div>counter count: {{ count }}</div>
  </div>
</template>
~/store/modules/counter
