<script setup lang="ts">
import { useCounterStore } from '~/store/counter'
const counter = useCounterStore()
const { count, doubleCount, doublePlusOne, getUserName } = storeToRefs(counter)
const { increment, userInfo } = counter
function add() {
  increment()
  // counter.$patch({ count: counter.count + 1 })
}
function reset() {
  counter.$patch(() => {
    // count = 0
    userInfo.push({ name: '李四', age: 12 })
  })
}
</script>

<script lang="ts">
export default {
  name: 'Demo',
}
</script>

<template>
  <div>demo</div>
  <div>Current count: {{ count }} {{ doubleCount }} {{ doublePlusOne }}</div>
  <div>{{ userInfo }} {{ getUserName('张三') }}</div>
  <button class="btn" @click="add">
    increment2
  </button>
  <button class="btn" @click="reset">
    reset
  </button>
</template>
