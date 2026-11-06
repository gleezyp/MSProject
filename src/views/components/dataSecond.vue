<template>
    <div class="panel panel-bar">
     <ChartZhu/>
     </div>
     <div class="panel panel-table">
     <ScorpChat/>
     </div>
    
</template>

<script setup lang="ts">
import ChartZhu from '../charts/chartZhu.vue';
import ScorpChat from '../charts/scorpChat.vue';

</script>

<style   scoped>
.panel { flex: 1; min-height: 0; }
/* 左栏上下比例：条形图 约 45%，表格约 55% */
.panel-bar   { flex: 0 0 60%; }
.panel-table { flex: 1; }
</style>