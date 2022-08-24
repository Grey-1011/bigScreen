<template>
  <div class="年龄段-图1">
    <div class="chart">
      <div class="main" ref="divRef"></div>
        <div class="text">性别</div>
      </div>
      <div class="legend">
        <span class="male"/>男
        <span class="female"/>女
      </div>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import {px} from '../shared/px';

const divRef = ref();
onMounted(() => {
  const myChart = echarts.init(divRef.value);
  myChart.setOption(createEchartsOptions({
    xAxis: {show: false},
    yAxis: {show: false},
    color: ['#8d70f8', '#33a4fa'],
    legend: {show: false},
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['55%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true, position: 'outer',
          distanceToLabelLine: -25,
          textStyle: {color: 'white', fontSize: px(15)},
          formatter(options: any) {
            return options.value * 100 + '%';
          }
        },
        labelLine: {show: false},
        itemStyle: {
          borderColor: '#0F113A',
          borderWidth: px(4)
        },
        data: [
          {value: 0.2, name: '女'},
          {value: 0.8, name: '男'},
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
    justify-content: center;

    > span {
      display: inline-block;
      width: px(16);
      height: px(10);
      border-radius: px(2);
      margin: 0 px(10);
    }

    .male {
      background: #33a4fa;
    }

    .female {
      background: #8d70f8;
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