import * as echarts from 'echarts/core'

import {
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
} from 'echarts/charts'

import {
  GridComponent,
  LegendComponent,
  RadarComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'

import { SVGRenderer } from 'echarts/renderers'

echarts.use([
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  RadarComponent,
  LegendComponent,
  SVGRenderer,
])

export default echarts
