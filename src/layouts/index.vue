<script setup lang="ts">
const isCollapse = ref(false)
const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <div h-100vh>
    <div w-199px h-full fixed left-0 top-0>
      <Sidebar h-full :is-collapse="isCollapse" />
    </div>
    <div :class="isCollapse ? 'pl-63px' : 'pl-199px'" transition-duration-300 h-full>
      <header>
        <div i-carbon:menu p-3 m-l-1 cursor-pointer @click="toggleSidebar" />
        this is header
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
