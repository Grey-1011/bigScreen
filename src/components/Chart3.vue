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
const myChart = ref()
const data = [
  {name: '盗窃',val: [0.01, 0.02, 0.09,0.11,0.12,0.23]},
  {name: '抢劫',val:[0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,0.10]},
  {name: '诈骗',val: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,0.10, 0.15]},
  {name: '故意伤人',val:[0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,0.08,0.06,0.05]},
  {name: '故意杀人',val: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,0.10,0.11,0.12,0.13]},
  {name: '醉驾',val:[ 0.07, 0.08, 0.09,0.10,0.11,0.12,0.13, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06,]},
]

onMounted(()=>{
  setInterval(()=>{
    const newData = [
      {name: '盗窃',val: [Math.random(), 0.02, 0.09,0.11,0.12,Math.random()]},
      {name: '抢劫',val:[0.01, 0.02, 0.03, Math.random(), 0.05, 0.06, 0.07, 0.08, 0.09,Math.random()]},
      {name: '诈骗',val: [0.01, Math.random(), 0.03, 0.04, 0.05, 0.06, Math.random(), 0.08, 0.09,0.10, Math.random()]},
      {name: '故意伤人',val:[0.01, Math.random(), 0.03, 0.04, 0.05, 0.06, Math.random(), 0.08, 0.09,0.08,0.06,Math.random()]},
      {name: '故意杀人',val: [0.01, 0.02, 0.03, Math.random(), 0.05, 0.06, 0.07, 0.08, 0.09,0.10,0.11,0.12,Math.random()]},
      {name: '醉驾',val:[ 0.07, Math.random(), 0.09,0.10,0.11,0.12,0.13, 0.01,Math.random(), 0.03, 0.04, 0.05, Math.random()]},
    ]
    x(newData)
  },3000)
})

const x = (data: any[]) => {
  myChart.value.setOption(createEchartsOptions({
    legend: {
      bottom: px(10),
      textStyle: {color: 'white'},
      itemWidth: px(30),
      itemHeight: px(16),
      data: data.map(i => i.name)
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
        data: data.find((i)=>{if(i.name === '盗窃') return i.val})?.val
      },
      {
        name: '醉驾',
        type: 'line',
        data: data.find((i)=>{if(i.name === '醉驾') return i.val})?.val
      },
      {
        name: '抢劫',
        type: 'line',
        stack: 'Total',
        connectNulls: true,
        data: data.find((i)=>{if(i.name === '抢劫') return i.val})?.val
      },
      {
        name: '故意杀人',
        type: 'line',
        connectNulls: true,
        stack: 'Total',
        data: data.find((i)=>{if(i.name === '故意杀人') return i.val})?.val
      },
      {
        name: '故意伤人',
        type: 'line',
        stack: 'Total',
        data: data.find((i)=>{if(i.name === '故意伤人') return i.val})?.val
      }
    ].map(obj => ({
      ...obj,
      symbol: 'circle',
      symbolSize: px(8),
      lineStyle: {width: px(1)}
    }))
  }))
}
onMounted(()=>{
  myChart.value = echarts.init(divRef.value)
  x(data)
})
</script>

<style lang="scss" scoped>

</style>