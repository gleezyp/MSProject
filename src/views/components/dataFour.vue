<template>
  <div class="panel panel-capital" style="background: rgb(6, 30, 60, .5);">
    <WaterChart />
  </div>
  <div class="panel panel-rose">
    <RoseChart />
  </div>
</template>

<script setup lang="ts">
import RoseChart from '../charts/roseChart.vue';
import WaterChart from '../charts/waterChart.vue';

</script>

<style scoped>
.panel { flex: 1; min-height: 0; }
/* 右栏上下比例 */
.panel-capital { flex: 0 0 340px; }
.panel-rose    { flex: 1; }
</style>