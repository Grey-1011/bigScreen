<template>
  <div class="年龄段-图1">
    <div class="chart">
      <div ref="divRef" class="main" />
    </div>
    <div class="legend">
      <span class="one"/>刑事
      <span class="two"/>民事
      <span class="three"/>经济
      <span class="four"/>其他
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import * as echarts from 'echarts';
import {px} from '../shared/px';

const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', ];
const divRef = ref();
onMounted(() => {
  const myChart = echarts.init(divRef.value);
  myChart.setOption(createEchartsOptions({
    color: colors,
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {show: false},
    series: [
      {
        startAngle: -20,
        type: 'pie',
        radius: ['25%', '90%'],
        avoidLabelOverlap: false,
        label: {
          show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
          distanceToLabelLine: 0,
          formatter(options: any) {
            return options.value * 100 + '%';
          }
        },
        labelLine: {show: true, length: 0},
        roseType: 'area',
        itemStyle: {
          shadowBlur: px(200),
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        data: [
          {value: 0.36, name: '刑事案件'},
          {value: 0.20, name: '民事案件'},
          {value: 0.18, name: '经济案件'},
          {value: 0.24, name: '其他案件'},
        ]
      }
    ]
  }));
});
</script>

<style lang="scss" scoped>
@import "../shared/helper";

.年龄段-图1 {

  .legend {
    height: px(40);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    > span {

      display: inline-block;
      width: px(16);
      height: px(10);
      border-radius: px(2);
      margin: 0 px(10);
      font-size: px(16);

      &.one { background: #F46064;}
      &.two { background: #F38E1C }
      &.three { background: #1CDB7C }
      &.four { background: #8D70F8}
    }
  }

  .chart {
    //position: relative;
    display: flex;
    > .main {
      flex: 1;
    }
  }
}
</style>