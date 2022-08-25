<template>
  <div class="破获排名 bordered">
    <h2>案件破获排名</h2>
    <div ref="divRef" class="chart"></div>
      <div class="legend">
        <span class="first"/> 2011年
        <span class="second"/> 2012年
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import {onMounted, ref} from 'vue';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/createEchartsOptions';
const divRef = ref()
const myChart = ref()
const data = [
  {name: '城关区公安局', 2011: 2, 2012: 3},
  {name: '七里河区公安局', 2011: 2, 2012: 3},
  {name: '西固区公安局', 2011: 2, 2012: 3},
  {name: '安宁区公安局', 2011: 2, 2012: 3},
  {name: '红古区公安局', 2011: 2, 2012: 3},
  {name: '永登县公安局', 2011: 2, 2012: 3},
  {name: '皋兰县公安局', 2011: 2, 2012: 3},
  {name: '榆中县公安局', 2011: 2, 2012: 3},
  {name: '新区公安局', 2011: 2, 2012: 3},
];
onMounted(()=>{
  setInterval(()=>{
    const newData = [
      {name: '城关区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10},
      {name: '七里河区公安局', 2011: 2, 2012: Math.random() * 20},
      {name: '西固区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10},
      {name: '安宁区公安局', 2011: 2, 2012: Math.random() * 30},
      {name: '红古区公安局', 2011:Math.random() * 10, 2012: Math.random() * 10},
      {name: '永登县公安局', 2011: 2, 2012: Math.random() * 40},
      {name: '皋兰县公安局', 2011: Math.random() * 10, 2012: 3},
      {name: '榆中县公安局', 2011: Math.random() * 10, 2012: 3},
      {name: '新区公安局', 2011: Math.random() * 10, 2012: 3},
    ];
    x(newData)
  }, 300)
})
const x = (data: any[]) => {
  myChart.value.setOption(createEchartsOptions({
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      splitLine: {show: false},
      axisLabel: {show: false}
    },
    yAxis: {
      axisTick: {show: false},
      type: 'category',
      axisLabel: {
        formatter(val:any) {
          return val.replace('公安局', '\n公安局');
        }
      },
      data: data.map((item: { name: string; }) => item.name)
    },
    series: [
      {
        name: '2011年',
        type: 'bar',
        data: data.map((i: any[]) => i[2011]),
        itemStyle: {
          color: {
            type: 'linear', // 线性渐变
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#1f33fa' // 0%处的颜色
            }, {
              offset: 1,
              color: '#089bfd' // 100%处的颜色
            }]
          }
        }
      },
      {
        name: '2012年',
        type: 'bar',
        data: data.map(i => i[2012]),
        itemStyle: {
          color: {
            type: 'linear', // 线性渐变
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#ba27e9' // 0%处的颜色
            }, {
              offset: 1,
              color: '#626dde' // 100%处的颜色
            }]
          }
        }
      }
    ]
  }))
}
onMounted(()=>{
  myChart.value = echarts.init(divRef.value)
  x(data)
})
</script>

<style lang="scss" scoped>
@import "../page/home";
</style>