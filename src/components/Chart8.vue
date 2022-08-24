<template>
  <div class="年龄段-图2">
    <div class="chart">
      <div ref="divRef" class="main"></div>
      <div class="text">年龄段</div>
    </div>
    <div class="legend">
      <span class="one"/>10-20
      <span class="two"/>20-30
      <span class="three"/>30-40
      <span class="four"/>40-50
      <span class="five"/>50-60
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import * as echarts from 'echarts';
import {px} from '../shared/px';

const divRef = ref();
const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
onMounted(() => {
  const myChart = echarts.init(divRef.value);
  myChart.setOption(createEchartsOptions({
    color: colors,
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {show: false},
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['55%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true, position: 'outer',
          distanceToLabelLine: -30,
          textStyle: {color: 'white', fontSize: px(15)},
          formatter(options: any) {
            return (options.value * 100).toFixed(0) + '%';
          }
        },
        labelLine: {show: false},
        itemStyle: {
          borderColor: '#0F113A',
          borderWidth: px(4)
        },
        data: [
          {value: 0.07, name: '10-20'},
          {value: 0.10, name: '20-30'},
          {value: 0.23, name: '30-40'},
          {value: 0.28, name: '40-50'},
          {value: 0.32, name: '50-60'},
        ]
      }
    ]
  }));
});
</script>

<style lang="scss" scoped>
@import "../shared/helper";

.年龄段-图2 {
  width: px(290);
  flex-shrink: 0;

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

      &.one {
        background: #856BED
      }

      &.two {
        background: #F46064
      }

      &.three {
        background: #F38E1C
      }

      &.four {
        background: #1CDB7C
      }

      &.five {
        background: #33A4FA
      }
    }
  }

  .chart {
    position: relative;
    display: flex;

    > .main {
      flex: 1;
    }

    > .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #33a4fa;
      font-size: px(20);
      text-shadow: 0 0 px(20) #33a4fa;
      font-weight: bold;
    }
  }
}
</style>