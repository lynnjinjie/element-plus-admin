<script setup lang='ts'>
import { getList } from '~/server/index'
const props = defineProps<{
  value?: boolean
}>()
defineOptions({
  name: 'Demo1',
})
const columns = [
  { title: 'NO', key: 'no' },
  { title: 'Title', key: 'title' },
  { title: 'Length', key: 'length' },
]
const data = ref([])
const tableLoading = ref(false)
async function getData() {
  const { data: res } = await useFetch('/api/get').get().json()

  // console.log('🚀 ~ file: demo1.vue:27 ~ res:', res.value)
}
// getData()
onMounted(async () => {
  tableLoading.value = true
  const { data: fetdata } = await getList().json()
  setTimeout(() => {
    tableLoading.value = false
    data.value = fetdata.value.data.list
  }, 3000)
})
</script>

<template>
  <div>
    <n-data-table
      :loading="tableLoading"
      bordered
      :single-line="false"
      :columns="columns"
      :data="data"
      :pagination="false"
    />
  </div>
</template>
