<template>
  <div ref="divRef" class="chart"></div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';

const divRef = ref()
onMounted(()=>{
  const myChart = echarts.init(divRef.value)
  myChart.setOption(createEchartsOptions({
    xAxis: {
      data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        formatter(val:any) {
          if (val.length > 2) {
            const array = val.split('');
            array.splice(2, 0, '\n');
            return array.join('');
          } else {
            return val;
          }
        }
      },
    },
    yAxis: {
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color: '#083B70'}
      }
    },
    series: [{
      type: 'bar',
      data: [40, 22, 20, 18, 32],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#0A97FB'
      }, {
        offset: 1,
        color: '#1E34FA'
      }]),
    }]
  }));
})
</script>

<style lang="scss" scoped>

</style>