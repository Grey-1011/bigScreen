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
const myChart = ref()

const data = [
  { name:'城关区',num:10},
  { name: '七里河区',num:20},
  { name: '西周区',num: 36},
  { name: '安宁区',num:41},
  { name:'红谷区',num:15},
  {name: '永登区', num:26},
  {name: '皋兰区', num:37},
  {name: '榆中区', num:18},
  {name: '兰州新区', num:29}
]

onMounted(()=>{
  setInterval(()=>{
    const newData = [
      { name:'城关区',num:Math.random()*10},
      { name: '七里河区',num:20},
      { name: '西周区',num: Math.random()*20},
      { name: '安宁区',num:41},
      { name:'红谷区',num:Math.random()*30},
      {name: '永登区', num:26},
      {name: '皋兰区', num:Math.random()*40},
      {name: '榆中区', num:18},
      {name: '兰州新区', num:Math.random()*50}
    ]
    x(newData)
  },300)
})

const x = (data: any[]) => {
  myChart.value.setOption({
    ...baseEchartOptions,
    xAxis: {
      data: data.map(i => i.name),
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
        data: data.map(i => i.num)
      }
    ]
  });
}
onMounted(()=>{ // 挂载之后拿到  .chart 的 div
  // console.log(divRef.value)
  myChart.value = echarts.init(divRef.value);
  x(data)
})
</script>

<style lang="scss" scoped>

</style>