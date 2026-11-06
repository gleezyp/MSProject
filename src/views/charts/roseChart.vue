<template>
   <dv-border-box-11 title="水位图" :title-width="400" class="panel-box" :color="['#00c8ff', '#0a3a6e']"
    backgroundColor="rgba(5,20,45,0.5)">
    <div :="djfjjd" style="width: 100%;height:100%;">

    </div>
    <div class="wave-container">
    </div>
  </dv-border-box-11>
   
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
 
const djfjjd = ref({
    "id": "main002"
})
onMounted (() =>{
    initTheChartZhu()
})
function initTheChartZhu () {
// 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(djfjjd.value.id));

      // 指定图表的配置项和数据
   var dataList = [
   { name: "A09-邮电通讯", value: "36" },
   { name: "A01-房屋建筑", value: "30" },
   { name: "A02-市政", value: "14" },
   { name: "A03-公路", value: "8" },
   { name: "A04-铁路", value: "12" },
   { name: "A05-民航", value: "5" },
   { name: "A06-水运", value: "7" },
   { name: "A07-水利", value: "8" },
   { name: "A08-能源", value: "12" },
   { name: "A99-其他", value: "32" },
];
var center = ['40%', '50%'];
var option = {
   // color: colorList,
   title: {
      text: "单位：个", // 主标题文本，支持使用 \n 换行
      textStyle: {
         color: "#808080", // 主标题文字的颜色
         fontSize: 12 // 主标题文字的字体大小
      },
      left: "20", // title 组件离容器左侧的距离
      top: "55" // title 组件离容器上侧的距离
   },
   // 提示框组件
   tooltip: {
      trigger: 'item', // 触发类型
      show: true, // 是否显示
      // formatter: function (params) {
      //    var content = params.marker + params.name + "&nbsp;&nbsp;&nbsp;&nbsp;" + params.value + "个";
      //    return content;
      // }
   },
  
   polar: {
      center: ["40%", "50%"], // 极坐标系的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
      radius: ['47%', '47%'] // 极坐标系的半径
   },
   radiusAxis: {
      axisTick: {
         show: false // 是否显示坐标轴刻度
      },
      axisLabel: {
         show: false // 是否显示刻度标签
      },
      axisLine: {
         show: false // 是否显示坐标轴轴线
      },
      splitLine: {
         show: false // 是否显示分隔线。默认数值轴显示，类目轴不显示
      },
   },
   angleAxis: {
      type: 'category',
      z: 10, // 角度轴组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖
      axisTick: {
         show: false // 是否显示坐标轴刻度
      },
      axisLabel: {
         show: false // 是否显示刻度标签
      },
      axisLine: {
         lineStyle: {
            width: 10, // 坐标轴线线宽
            color: '#051127', // 坐标轴线线的颜色
         }
      },
   },
   series: [
      // 外边设置
      {
         type: 'bar',
         data: [0],
         coordinateSystem: 'polar',
         name: '',
         stack: 'a'
      },
      // 展示层
      {
         type: 'pie',
         center: center, // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
         radius: ['25%', '45%'], // 饼图的半径
         itemStyle: {
            borderWidth: 5, // 描边线宽
            borderColor: '#fff', // 图形的描边颜色
         },
         label: {
            show: true, // 是否显示
            position: 'outside', // 标签的位置
            alignTo: 'labelLine', // 标签的对齐方式
            backgroundColor: '#fff', // 文字块背景色
            height: 0, // 文本显示高度
            width: 0, // 文本显示宽度
            lineHeight: 0, // 文本显示行高
            distanceToLabelLine: 5, // 文字与 label line 之间的距离
            borderRadius: 3, // 文字块的圆角
            borderWidth: 2, // 文字块边框宽度
            borderColor: 'auto', // 文字块边框颜色
            padding: [3, -3, 3, -3], // 文字块的内边距
            formatter: function (params: { name: any; value: any; }) { // 标签内容格式器
               return `{a|${params.name}(${params.value})}`
            },
            rich: { // 自定义富文本样式
               a: {
                  padding: [10, -120, 40, -130], // 边距
                  fontSize: '12px', // 字号
                  color: '#808080', // 字体颜色
               },
               b: {
                  padding: [0, -80, 55, -80], // 边距
                  fontSize: '15px', // 字号
                  color: '#808080', // 字体颜色
               },
            }
         },
         // 该项悬浮时样式设置
         tooltip: {
            valueFormatter: function (value: string) { // 数值显示部分的格式化回调函数
               return value + '个';
            }
         },
         labelLine: {
            show: true, // 是否显示视觉引导线
           
               length: 30, // 视觉引导线第一段的长度
               length2: 150, // 视觉引导项第二段的长度
               align: 'right',
               lineStyle: {
                  width: 2, // 线宽
               
            }
         },
         data: dataList, // 数据
      },
   ],
}

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
}
</script>

<style scoped>

</style>