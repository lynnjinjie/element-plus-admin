<script setup lang='ts'>
const props = defineProps<{
  isCollapse?: boolean
}>()
const authStore = useAuthStore()
const { authRoutes } = authStore
const router = useRouter()
const linkPath = (value) => {
  router.push({ path: value.path })
}
</script>

<template>
  <el-aside class="admin-menu" :class="{ close: props.isCollapse }">
    <el-menu
      background-color="#222"
      text-color="#fff"
      :collapse="props.isCollapse"
      :collapse-transition="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <i>
            <div class="icon" i-carbon:align-box-middle-left text-20px m-r-1 />
          </i>
          <span>Navigator One</span>
        </template>
        <el-sub-menu index="1-4">
          <template #title>
            item four
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
      <template v-for="item in authRoutes" :key="item.name">
        <el-menu-item :index="item.name" @click="linkPath(item)">
          <template #title>
            <span>
              {{ item.name }}
            </span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<style lang="scss">
.el-menu {
  border-right: none;
  @apply h-full;
}
.admin-menu {
  @apply w-[250px] duration-500 min-h-screen h-full border-gray-200 border-solid z-50;
  &.close {
    @apply w-[70px] duration-500;
  }
}
// .el-aside {
//   transition: width 0.3s;
//   -webkit-transition: width 0.3s;
// }
</style>
