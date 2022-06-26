<script setup lang='ts'>
const props = defineProps<{
  isCollapse?: boolean
}>()
</script>

<template>
  <el-menu
    background-color="#222"
    text-color="#fff"
    :collapse="props.isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <div i-carbon:align-box-middle-left text-18px />
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title>
          <span>Group One</span>
        </template>
        <el-menu-item index="1-1">
          item one
        </el-menu-item>
        <el-menu-item index="1-2">
          item two
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">
          item three
        </el-menu-item>
      </el-menu-item-group>
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
    <el-menu-item index="3" disabled>
      <template #title>
        Navigator Three
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <template #title>
        Navigator Four
      </template>
    </el-menu-item>
  </el-menu>
</template>
