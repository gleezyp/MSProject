<template>
    <div class="first-item" v-for="(intem, ) in goldStoreList">
        <div class="ov-label">{{ intem.title }}</div>
         <div class="ov-value" >
          {{ intem.num }}
          <span class="ov-unit">{{ intem.unti }}</span>
        </div>
       
    </div>
</template>

<script setup lang="ts">
import { reactive} from 'vue'

const goldStoreList = reactive([
    {"title": "flidi", "num": 234, "unti": "元/克"},
    {"title": "flidi", "num": 244, "unti": "元/克"},
    {"title": "flidi", "num": 288, "unti": "元/克"},
    {"title": "flidi", "num": 2348, "unti": "元/克"},
    {"title": "flidi", "num": 2757, "unti": "元/克"},
    {"title": "flidi", "num": 2347, "unti": "元/克"},
    {"title": "flidi", "num": 2570, "unti": "元/克"},
    {"title": "flidi", "num": 2541, "unti": "元/克"},
    {"title": "flidi", "num": 3991, "unti": "元/克"}
])


</script>

<style  scoped>
/* ===== 9宫格指标条 ===== */
.overview-bar {
  height: 90px; flex-shrink: 0;
  display: grid; grid-template-columns: repeat(9, 1fr);
  gap: 8px; padding: 0 0 10px 0;
}
 .first-item{
    display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: linear-gradient(180deg, rgba(0,80,160,0.35) 0%, rgba(0,50,100,0.15) 100%);
  border: 1px solid rgba(0,180,255,0.35);
  border-top: 2px solid rgba(0,200,255,0.7);
  position: relative;
    &::before, &::after {
    content: ''; position: absolute; width: 10px; height: 10px;
    border: 2px solid #00e5ff;
  }
  &::before { left: -1px; top: -1px; border-right: none; border-bottom: none; }
  &::after  { right: -1px; bottom: -1px; border-left: none; border-top: none; }


  .ov-label { font-size: 15px; color: #d8e8ff; letter-spacing: 2px; margin-bottom: 6px; }
  .ov-value { font-size: 30px; font-weight: bold; font-family: DINAlternate-Bold, Arial, sans-serif; text-shadow: 0 0 8px currentColor;
    .ov-unit { font-size: 14px; margin-left: 3px; color: #d8e8ff; font-weight: normal; }
  }
   }
</style>