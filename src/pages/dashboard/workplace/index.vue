<script setup lang='ts'>
import WorkplaceHeader from './components/WorkplaceHeader.vue'
import ProjectCard from './components/ProjectCard.vue'
</script>

<template>
  <div>
    <WorkplaceHeader />
    <div lg:flex>
      <div class="w-full !mr-4 lg:w-7/10">
        <ProjectCard />
      </div>
      <div class="w-full lg:w-3/10">
        right
      </div>
    </div>
  </div>
</template>
