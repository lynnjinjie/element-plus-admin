<script setup lang='ts'>
import * as echarts from 'echarts'
defineOptions({
  name: 'Dashboard',
})
onMounted(() => {
  initChart()
})
function getOptions() {
  const option = {
    title: {
      text: '折线图下钻示例',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}',
    },
    legend: {
      left: 'left',
      data: ['月数据'],
    },
    xAxis: {
      type: 'category',
      name: 'x',
      splitLine: { show: false },
      data: ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    yAxis: {
      type: 'log',
      name: 'y',
    },
    series: [
      {
        name: '月数据',
        type: 'line',
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
      },
    ],
  }
  return option
}
function initChart() {
  const chart = ref(null)
  const myChart = echarts.init(document.getElementById('chart'), 'light')
  myChart.setOption(
    getOptions(),
  )
  myChart.on('click', (params) => {
    console.log('params', params)
    // const option = {}
    // option.xAxis.data =
    // option.series[0].data =
    const dom = document.getElementById('chart')
    echarts.dispose(dom)
    const myChart = echarts.init(dom)
    const option = getOptions()
    option.xAxis.data = [
      '2016-09-01', '2016-09-02', '2016-09-03', '2016-09-04', '2016-09-05', '2016-09-06', '2016-09-07', '2016-09-08',
      '2016-09-09', '2016-09-10', '2016-09-11', '2016-09-12', '2016-09-13', '2016-09-14', '2016-09-15', '2016-09-16',
      '2016-09-17', '2016-09-18', '2016-09-19', '2016-09-20', '2016-09-21', '2016-09-22', '2016-09-23', '2016-09-24',
      '2016-09-25', '2016-09-26', '2016-09-27', '2016-09-28', '2016-09-29', '2016-09-30',
    ]
    option.series[0].data = [
      3, 4, 5, 6, 5, 6, 7, 8, 8, 9,
      12, 13, 15, 16, 20, 12, 30, 21, 22, 29,
      30, 31, 33, 34, 35, 36, 20, 29, 33, 40,
    ]
    myChart.setOption(option, true)
  })
}
function back() {
  // const dom = document.getElementById('chart')
  // echarts.dispose(dom)
  // const myChart = echarts.init(dom)
  // const option = getOptions()
  // myChart.setOption(myChart, option)
  initChart()
}
</script>

<template>
  <div>
    <button @click="back">
      返回
    </button>
    <div id="chart" style="width: 400px; height: 300px" />
    hello dashboard
  </div>
</template>
