<script setup lang='ts'>
const props = defineProps<{
  isCollapse?: boolean
}>()
const authStore = useAuthStore()
const { authRoutes } = authStore
</script>

<template>
  <el-menu
    background-color="#222"
    text-color="#fff"
    :collapse="props.isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <div class="icon" i-carbon:align-box-middle-left text-20px m-r-1 />
        <span>Navigator One</span>
      </template>
      <el-sub-menu index="1-4">
        <template #title>
          <span>item four</span>
        </template>
        <el-menu-item index="1-4-1">
          item one
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <template #title>
        Navigator Two
      </template>
    </el-menu-item>
    <el-menu-item v-for="item in authRoutes" :key="item.name">
      <template #title>
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </template>
    </el-menu-item>
  </el-menu>
</template>
