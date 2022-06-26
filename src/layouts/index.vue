<script setup lang="ts">
const isCollapse = ref(false)
const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}
// const pl = watchEffect(() => {
//   return isCollapse.value ? 'pl-63px' : 'pl-199px'
// })
</script>

<template>
  <div h-100vh>
    <div w-199px h-full fixed left-0 top-0>
      <Sidebar h-full :is-collapse="isCollapse" />
    </div>
    <div :class="isCollapse ? 'pl-63px' : 'pl-199px'" transition-duration-300>
      <header>
        this is header
        <el-button @click="toggleSidebar">
          切换
        </el-button>
      </header>
      <main>
        <router-view />
      </main>
      <footer>
        this is footer
      </footer>
    </div>
  </div>
</template>

<style>

</style>
