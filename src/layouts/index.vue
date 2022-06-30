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
    <el-container h-screen>
      <Sidebar :is-collapse="isCollapse" />
      <el-container>
        <Header @toggle="toggleSidebar" />
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          this is footer
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
