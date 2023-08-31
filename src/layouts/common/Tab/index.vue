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
    const title = route.meta?.title
    const icon = route.meta?.icon
    tagsStore.addTag({ name, path, title, icon })
  },
  {immediate: true}
)
function handleClose(tag) {
  console.log("🚀 ~ file: index.vue:25 ~ handleClose ~ tag:", tag)
  tagsStore.removeTag(tag)
}
const isShowCloseIcon = computed(() => tagsStore.tags.length > 1)
</script>

<template>
  <div w-full p-2 border-b>
    <n-space>
      <n-tag
        class="cursor-pointer mx-1 rounded-1 px-4 hover:text-[#1d312e]"
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
