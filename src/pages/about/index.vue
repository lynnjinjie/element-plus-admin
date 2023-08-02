<script setup lang='ts'>
import { useCounterStore } from '~/store/counter'
const counter = useCounterStore()
const { count } = counter
</script>

<script lang="ts">
export default {
  name: 'About',
}
</script>

<template>
  <div>
    <router-link to="/">
      home page
    </router-link>
    <div>counter count: {{ count }}</div>
  </div>
</template>
