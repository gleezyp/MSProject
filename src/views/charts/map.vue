<template>
  <div :="djfjjd" style="width: 100%;height:100%;">

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import chinaMap from '../../assets/china.json'

const djfjjd = ref({
  "id": "map"
})
onMounted(() => {
  initTheChartZhu()
})
function initTheChartZhu() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(djfjjd.value.id));
  echarts.registerMap("china", chinaMap as any)
  // 指定图表的配置项和数据
  var option = {
    geo: {
      show: true,
      //设置中心点
      center: [105.194115019531, 35.582111640625],
      map: 'china',
      roam: false, //是否允许缩放，拖拽
      zoom: 1.5, //初始化大小
      //缩放大小限制
      scaleLimit: {
        min: 0.1, //最小
        max: 12, //最大
      },
      //各个省份模块样式设置
      itemStyle: {
          areaColor: '#3352c7',//背景色
          color: 'red',//字体颜色
          borderColor: '#5e84fd',
          borderWidth: 2,
      
      },
      //高亮状态
      emphasis: {
        itemStyle: {
          areaColor: '#ffc601',
        },
        label: {
          show: true,
          color: '#fff',
        },
      },
      // 显示层级
      z: 10,
    },
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
</script>

<style scoped></style>