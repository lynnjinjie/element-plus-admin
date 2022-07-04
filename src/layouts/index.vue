<script setup lang="ts">
const isCollapse = ref(false)
const toggleSidebar = (value) => {
  console.log('value', value)
  isCollapse.value = !isCollapse.value
}
const route = useRoute()
console.log('route', route)
</script>

<template>
  <div h-screen>
    <n-layout has-sider h-screen>
      <Sidebar :is-collapse="isCollapse" />
      <n-layout>
        <Header @toggle="toggleSidebar" />
        <n-layout-content>
          <router-view />
        </n-layout-content>
        <n-layout-footer>
          this is footer
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </div>
</template>

<style lang="scss" scoped>

</style>
