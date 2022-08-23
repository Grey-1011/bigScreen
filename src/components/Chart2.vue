<template>
  <div class="管辖统计 bordered">
    <h2>案件破获排名</h2>
    <div ref="divRef" class="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import {onMounted, ref} from 'vue';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/createEchartsOptions';
const divRef = ref()

onMounted(()=>{
  const myChart = echarts.init(divRef.value)
  myChart.setOption(createEchartsOptions({
    ...baseEchartOptions,
    grid: {
      x: px(100),
      y: px(40),
      x2: px(40),
      y2: px(40),
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局', '永登县公安局','皋兰县公安局','榆中县公安局','新区公安局']
    },
    series: [
      {
        name: '破案排名1',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '破案排名2',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ]
  }))
})
</script>

<style lang="scss" scoped>

</style>