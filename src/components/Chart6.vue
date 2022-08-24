<template>
  <div class="籍贯分布 bordered">
    <h2>全市犯罪人员籍贯分布地</h2>
    <div class="wrapper">
      <div ref="divRef" class="chart"></div>
        <div class="legend bordered">
          <span class="icon gs"/>甘肃籍
          <span class="icon sc"/>四川籍
          <span class="icon qh"/>青海籍
      </div>
      <div class="notes">部分地区中国地图</div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import china from '../geo/china.json';

const divRef = ref();
onMounted(() => {
  const myChart = echarts.init(divRef.value);
  const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
  echarts.registerMap('CN', (china as any));
  myChart.setOption(createEchartsOptions({
    xAxis: {show: false},
    yAxis: {show: false},
    series: [
      {
        type: 'map',
        mapType: 'CN',
        label: {show: false, color: 'white'},
        data: [
          {name: '甘肃省', value: 1},
        ],
        itemStyle: {
          areaColor: '#010D3D',
          color: colors['甘肃省'],
          borderColor: '#01A7F7',
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
        }
      },

      {
        type: 'map',
        mapType: 'CN', // 自定义扩展图表类型
        data: [
          {name: '四川省', value: 100},
        ],
        itemStyle: {
          areaColor: '#010D3D',
          color: colors['四川省'],
          borderColor: 'yellow',
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
        }
      },
      {
        type: 'map',
        mapType: 'CN', // 自定义扩展图表类型
        data: [
          {name: '青海省', value: 100},
        ],
        itemStyle: {
          areaColor: '#010D3D',
          color: colors['青海省'],
          borderColor: '#01A7F7',
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
        }
      }
    ]
  }));
});
</script>

<style lang="scss" scoped>
@import "../shared/helper";

.籍贯分布 {
  height: px(753) !important; background: transparent !important;
  .wrapper {
    position: relative;width: 100%;flex: 1;
    display: flex; flex-direction: column;
    .chart {flex: 1;}
    .legend {
      position: absolute;top: px(40);left: px(20);display: flex;
      align-items: center;
      font-size: px(20); padding: px(15) px(10) px(20) 0;
      border-radius: 0;
      .icon {
        margin: 0 px(10);
        display: inline-block;
        width: px(16);
        height: px(16);
        border-radius: 50%;
        background: #1cecd9;
      }
      .gs {
        background: #15B8FD;
      }
      .sc {
        background: #06E1EE;
      }
      .qh{
        background: #BB31F7;
      }
    }
    .notes{
      position: absolute;
      bottom: px(10);
      right: px(10);
    }
  }
}
</style>