<script lang="ts">
export default {
  name: 'Hello'
}
</script>
<script setup lang="ts">

  const props = defineProps({
    name: {
      type: String,
      default: 'name'
    }
  })
  const router = useRouter()
  console.log('hello',router)
</script>
<template>
  <div>hi,  {{props.name}}</div>
</template>

<route lang="yaml">
name: 'Hello'
</route>
