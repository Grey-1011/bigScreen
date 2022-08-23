<template>
  <div class="案发时段  bordered">
    <h2>案发时段分析</h2>
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
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: false,
      splitLine: {show: true, lineStyle: {color:'#073E78'} },
      axisLine: {show:false},
      data: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis: {
      type: 'value',
      splitLine: {lineStyle: {color: '#073E78'}},
      axisLabel: {
        formatter(val:number){
          return val * 100 + '%'
        }
      }
    },
    series: [
      {
        data: [0.15, 0.13, 0.11,
          0.13, 0.14, 0.15,
          0.16, 0.18, 0.21,
          0.19, 0.17, 0.16,
          0.15],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: px(8),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }])
        }
      }
    ]
  }))
})
</script>

<style lang="scss" scoped>

</style>