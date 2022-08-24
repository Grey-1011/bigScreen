<template>
  <div class="案发类型-柱形图">1
    <div ref="divRef" class="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';

const divRef = ref()
onMounted(()=>{
  const myChart = echarts.init(divRef.value)
  myChart.setOption(createEchartsOptions({

  }))
})
</script>

<style lang="scss" scoped>
.案发类型-柱形图 {

}
</style>