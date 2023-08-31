import { defineStore } from 'pinia'
import router from '~/router'

export const useTagsStore = defineStore('tags', () => {
  const tags = ref([])
  const activeTag = ref('')

  function setActiveTag(path) {
    activeTag.value = path
  }
  function addTag(tag: any) {
    const findItem = tags.value.find(item => item.path === tag.path)
    if (!findItem)
      tags.value.push(tag)
    setActiveTag(tag.path)
  }
  function removeTag(tag) {
    tags.value = tags.value.filter(item => item.path !== tag.path)
    if (activeTag.value === tag.path)
      router.push(tags.value[tags.value.length - 1].path)
  }

  return {
    tags,
    addTag,
    removeTag,
  }
})
