<script setup lang='ts'>
import black_cat from '~/assets/images/black_cat.png'
const work_overview = [
  { title: '待办', content: 10 },
  { title: '项目', content: 8 },
  { title: '团队', content: 300 },
]
</script>

<template>
  <div mx-2 my-4 justify-between lg:flex>
    <div class="flex items-center justify-between">
      <n-avatar :size="72" round :src="black_cat" mr-4 />
      <div>
        <h1 text-md md:text-lg>
          早安, Snow Admin, 开始您一天的工作
        </h1>
        <p mt-2>
          今日晴, 20℃ - 25℃!
        </p>
      </div>
    </div>
    <div flex items-center>
      <div
        v-for="(item, index) in work_overview"
        :key="index"
        class="mx-4 flex flex-col items-center"
      >
        <span text-gray>{{ item.title }}</span>
        <span text-2xl>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>
