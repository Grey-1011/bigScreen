<template>
  <div class="管辖统计 bordered">
    <h2>案发派出所管辖统计</h2>
    <div ref="divRef" class="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';


const divRef = ref()
onMounted(()=>{ // 挂载之后拿到  .chart 的 div
  console.log(divRef.value)
  const myChart = echarts.init(divRef.value);

  myChart.setOption({
    ...baseEchartOptions,
    xAxis: {
      data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区','皋兰区','榆中区', '兰州新区'],
      axisTick: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color:'#083870'}
      },
      axisLabel:{
        fontSize: px(12),
        formatter: function (val: any){
          if(val.length > 2){
            // 这里不能写成一行，因为  splice 返回的并不是原数组
            const array = val.split('')
            array.splice(2, 0,'\n')
            return array.join('')
          }else {
            return val
          }
        }
      }
    },
    yAxis: {
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color:'#083870'}
      },
      axisLabel: {
        fontSize: px(12)
      },

    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }
    ]
  });
})
</script>

<style lang="scss" scoped>

</style>