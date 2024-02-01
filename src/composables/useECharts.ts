import type { EChartsOption } from 'echarts'
import type { Ref } from 'vue'
import { tryOnMounted, useDebounceFn } from '@vueuse/core'
import echarts from '~/utils/echarts'
import { getCollapsed } from '~/utils/common/index'

export function useECharts(
  elRef: Ref<HTMLDivElement>,
  theme: 'light' | 'dark' | 'default' = 'default',
) {
  let chartInstance: echarts.ECharts | null = null
  let resizeFn = resize
  const cacheOptions = ref({}) as Ref<EChartsOption>

  resizeFn = useDebounceFn(resize, 200)

  const getOptions = computed(() => {
    return {
      backgroundColor: 'transparent',
      ...cacheOptions.value,
    } as EChartsOption
  })

  function initCharts(t = theme) {
    const el = unref(elRef)
    if (!el || !unref(el))
      return

    chartInstance = echarts.init(el, t)
    window.addEventListener('resize', resizeFn)
  }

  function setOptions(options: EChartsOption, clear = true) {
    cacheOptions.value = options
    return new Promise((resolve) => {
      if (unref(elRef)?.offsetHeight === 0) {
        setOptions(unref(getOptions))
        resolve(null)
      }
      nextTick(() => {
        if (!chartInstance)
          initCharts('default')

        clear && chartInstance?.clear()

        chartInstance?.setOption(unref(getOptions))
        resolve(null)
      })
    })
  }

  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn',
      },
    })
  }

  tryOnMounted(() => {
    if (!chartInstance)
      return
    chartInstance.dispose()
    chartInstance = null
  })

  watch(getCollapsed, () => {
    setTimeout(() => {
      resizeFn()
    }, 30)
  })

  function getInstance(): echarts.ECharts | null {
    if (!chartInstance)
      initCharts('default')

    return chartInstance
  }

  onUnmounted(() => {
    window.removeEventListener('resize', resizeFn)
  })

  return {
    setOptions,
    resize,
    echarts,
    getInstance,
  }
}
