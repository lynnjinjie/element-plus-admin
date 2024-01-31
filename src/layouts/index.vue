<script setup lang="ts">
const tagsStore = useTagsStore()
const includePage = computed(() => tagsStore.tags.map(tag => tag.name))
</script>

<template>
  <div h-screen>
    <n-layout has-sider h-screen>
      <Sidebar />
      <n-layout>
        <n-layout-header>
          <Header />
        </n-layout-header>
        <Tab />
        <n-layout-content content-style="height: calc(100vh - 145px)">
          <router-view v-slot="{ Component, route }" >
              <keep-alive :include="includePage">
                <component :is="Component" :key="route.fullPath"></component>
              </keep-alive>
            </router-view>
        </n-layout-content>
        <n-layout-footer>
          <Footer />
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </div>
</template>

<style lang="scss" scoped>
</style>
