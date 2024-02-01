<script setup lang='ts'>
const props = defineProps<{
  value?: boolean
}>()
const activeHistory = ref()
const route = useRoute()
const tagsStore = useTagsStore()
onMounted(() => {
  // console.log('routes', history)
})
watchEffect(() => {
  activeHistory.value = route.name
})
watch(
  () => route.path,
  () => {
    const { name, fullPath: path } = route
    console.log("🚀 ~ route:", route)

    const title = route.meta?.title
    const icon = route.meta?.icon || ''
    tagsStore.addTag({ name, path, title, icon })
  },
  {immediate: true}
)
function handleClose(tag) {
  tagsStore.removeTag(tag)
}
const isShowCloseIcon = computed(() => tagsStore.tags.length > 1)
</script>

<template>
  <div w-full p-2 border-y border-gray-200>
    <n-space>
      <n-tag
        class="cursor-pointer mx-0.4 rounded-1 px-3 hover:text-[#316C72FF]"
        v-for="tag in tagsStore.tags"
        :key="tag.path"
        :bordered="false"
        :type="activeHistory === tag.name ? 'primary' : 'default'"
        :closable="isShowCloseIcon"
        @click="$router.push({ path: tag.path })"
        @close="handleClose(tag)"
      >
      <template v-if="tag.icon" #icon>
        <TheIcon :icon="tag.icon" class="mr-1" />
      </template>
       {{ tag.title }}
      </n-tag>
    </n-space>
  </div>
</template>
