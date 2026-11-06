<template>
    <div class="bg">
        <DataHeader />
        <div class="bg-contain">
            <DataFirst />
        </div>
        <div class="bg-main">
            <div class="clo-left">
               <DataSecond />
            </div>
             <div class="clo-center">
               <DataThree />
            </div>
             <div class="clo-right">
              <DataFour />
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import DataHeader from './components/dataHeader.vue';
import DataFirst from './components/dataFirst.vue';
import DataSecond from './components/dataSecond.vue';
import DataThree from './components/dataThree.vue';
import DataFour from './components/dataFour.vue';
import { useScreenScale } from '../composables/useScreenScale.ts';

const cleanup = useScreenScale()
//let timer: number | null = null
onMounted(() => {
  cleanup()
   // timer = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  cleanup()
 // if (timer) clearInterval(timer)
})

</script>

<style scoped>
html,
body {
    background: url("/bgd.gif") no-repeat center;
    background-size: cover;
}

.bg {
    width: 1920px;
    height: 1080px;
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    color: chartreuse;
}

.bg-contain {
   /* ===== 9宫格指标条 ===== */
  height: 90px; flex-shrink: 0;
  display: grid; grid-template-columns: repeat(9, 1fr);
  gap: 8px; padding: 0 0 10px 0;
}

.bg-main {
 flex: 1; display: flex; gap: 10px;
  min-height: 0;
}
.clo-left   { width: 360px; flex-shrink: 0; display: flex; flex-direction: column; gap: 10px; }
.clo-center { flex: 1; display: flex; flex-direction: column; gap: 10px; min-width: 0; }
.clo-right  { width: 500px; flex-shrink: 0; display: flex; flex-direction: column; gap: 10px; }


.mainItem {
    color: #000;
}

.bg-contain div:nth-child(1) {
    grid-column: 1 / 3;
}

.bg-contain div:nth-child(2) {
    grid-row: 2 /4;
}
</style>