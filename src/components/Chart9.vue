<template>
  <div class="年龄段-图3">
    <h3>犯罪年龄趋势图</h3>
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
      data: ['盗窃'],
      bottom: px(-5),
      left:0,
      textStyle: {color: '#f29e18'},
      itemWidth: px(30),
      itemHeight: px(16),
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: false,
      splitLine: {show: true, lineStyle: {color:'#073E78'} },
      axisLine: {show:false},
      data: ['','18', '28', '38', '48', '58','68','78']
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
        name: '盗窃',
        data: [0.2, 0.22, 0.27,
          0.35, 0.25, 0.20,
          0.15, 0.10],
        type: 'line',
        symbol: 'circle',
        symbolSize: px(8),
        itemStyle:{color: '#f29e18'},
        lineStyle: {width: px(2),color:'#f29e18'},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#f29e18'
          }, {
            offset: 1,
            color: '#1b1731'
          }])
        }
      }
    ]
  }))
})
</script>

<style lang="scss" scoped>
@import "../shared/helper";
.年龄段-图3 {
  border: 1px solid #08397d;
  h3 {font-size: px(20); color: #7ab6db; margin-top: px(6);}
}
</style>