<script setup lang='ts'>
import Bar from './components/Bar.vue'
import Line from './components/Line.vue'
import GrowCard from './components/GrowCard.vue'
import Radar from './components/Radar.vue'
import Source from './components/Source.vue'
import ProductPie from './components/ProductPie.vue'
</script>

<template>
  <div p-4>
    <GrowCard />
    <n-card content-style="padding: 0;" my-4>
      <n-tabs
        type="line"
        size="large"
        :tabs-padding="20"
        pane-style="padding: 10px;"
      >
        <n-tab-pane name="PARKLIFE" tab="流量趋势">
          <Line />
        </n-tab-pane>
        <n-tab-pane name="ROCKLIFE" tab="访问量">
          <Bar />
        </n-tab-pane>
      </n-tabs>
    </n-card>
    <div md:flex>
      <Radar class="w-full md:w-1/3" />
      <Source class="w-full md:mx-4 md:w-1/3" />
      <ProductPie class="w-full md:w-1/3" />
    </div>
  </div>
</template>
