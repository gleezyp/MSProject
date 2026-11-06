<template>
  <dv-border-box11 title="dv-border-box-11" :title-width="200" :animate="false" class="panel-box">
    <div style="height: 10%;"></div>
    <div :="djfjjd" style="width: 100%;height:100%;">
    </div>
  </dv-border-box11>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const djfjjd = ref({
  "id": "main001"
})
onMounted(() => {
  initTheChartZhu()
})
function initTheChartZhu() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(djfjjd.value.id));

  // 指定图表的配置项和数据
  var option = {
    color: ["#3398DB"],
    title: {
       text: 'dhshsjf',
       left: "0",
       textStyle: {
         fontSize: 30,
         color: "#fff"
    }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: '15%',
      bottom: '18%'
    },
    xAxis: [{
      type: "value",
      data:[{value:0, textStyle: {fontSize: 16, color: 'white' } }]
    }],
    yAxis: [{

      type: "category",
      data: [
      { value:"Mon", textStyle: {fontSize: 16, color: 'white' }},  
      { value:"Tue", textStyle: {fontSize: 16, color: 'white' }} , 
      { value:"Web", textStyle: {fontSize: 16, color: 'white' }},  
      { value:"Thu", textStyle: {fontSize: 16, color: 'white' }},  
      { value:"Fri", textStyle: {fontSize: 16, color: 'white' }},  
      { value:"Sat", textStyle: {fontSize: 16, color: 'white' }}, 
      { value:"Sun", textStyle: {fontSize: 16, color: 'white' }}  
    ]
    }],
    series: [{
      name: "直接访问",
      type: "bar",
      barWidth: "60%",
      data: [
      10, 52, 200, 334, 390, 330, 220]
    }],
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
</script>

<style scoped>
.panel-box {
  position: relative;
}
</style>