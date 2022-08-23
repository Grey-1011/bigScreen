<template>
  <div class="发案趋势 bordered">
    <h2>发案趋势分析</h2>
    <div ref="divRef" class="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import {px} from '../shared/px';

const divRef = ref()
onMounted(()=>{
  const myChart = echarts.init(divRef.value)
  myChart.setOption(createEchartsOptions({
    legend: {
      bottom: px(10),
      textStyle: {color: 'white'},
      itemWidth: px(30),
      itemHeight: px(16),
      data: ['盗窃','抢劫','诈骗','故意伤人','故意杀人','醉驾']
    },
    grid: {
      x: px(20),
      x2: px(20),
      y: px(20),
      y2: px(70),
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      splitLine: {show: true, lineStyle: {color: '#073E78'}},
      axisTick: {show: false},
      axisLine: {show: false},
      data: ['','2011','', '2013','', '2015','', '2017']
    },
    yAxis: {
      type:'value',
      splitLine: {lineStyle: {color: '#073E78'}},
      axisLabel: {
        formatter(val: number) {
          return val * 100 + '%';
        }
      }
    },
    series: [
      {
        name: '盗窃',
        type: 'line',
        stack: 'Total',
        data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.03]
      },
      {
        name: '醉驾',
        type: 'line',
        data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,0.10].reverse()
      },
      {
        name: '抢劫',
        type: 'line',
        stack: 'Total',
        connectNulls: true,
        data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,0.10, 0.15]
      },
      {
        name: '故意杀人',
        type: 'line',
        connectNulls: true,
        stack: 'Total',
        data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,0.08,0.06,0.05]
      },
      {
        name: '故意伤人',
        type: 'line',
        stack: 'Total',
        data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,0.10,0.11,0.12,0.13].reverse()
      }
    ].map(obj => ({
      ...obj,
      symbol: 'circle',
      symbolSize: px(8),
      lineStyle: {width: px(1)}
    }))
  }))
})
</script>

<style lang="scss" scoped>

</style>