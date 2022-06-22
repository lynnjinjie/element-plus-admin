<script setup lang="ts">
const props = defineProps({
  msg: {
    required: true,
    default: 'hello',
  },
})
const count = ref(0)
</script>

<template>
  <div @click="count++">
    {{ count }}
  </div>
  <button>{{ props.msg }}</button>
</template>
