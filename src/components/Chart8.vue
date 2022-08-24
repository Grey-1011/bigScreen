<template>
  <div class="年龄段-图2">8
    <div ref="divRef" class="chart">

    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import * as echarts from 'echarts';

const divRef = ref()
onMounted(()=>{
  const myChart = echarts.init(divRef.value)
  myChart.setOption(createEchartsOptions({
    xAxis: {show: false},
    yAxis: {show: false},
  }))
})
</script>

<style lang="scss" scoped>
@import "../shared/helper";

</style>