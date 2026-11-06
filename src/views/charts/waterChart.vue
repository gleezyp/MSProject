<template>

  <dv-border-box-11 title="水位图" :title-width="400" class="panel-box" :color="['#00c8ff', '#0a3a6e']"
    backgroundColor="rgba(5,20,45,0.5)">
    <div style="height: 100px; text-align: left; ">fjhdhjd883443o3oo3<br/>
        jdjdsjsjsjnnbvjd
    </div>
    <div class="wave-container">
      <dv-water-level-pond :config="config" style="width:150px;height:200px" />
    </div>
  </dv-border-box-11>
  <dv-decoration-10 style="width:100%;height:5px;" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const config = reactive({
  data: [66, 45],
  shape: 'roundRect',
})
</script>

<style scoped>
.wave-container {
  width: 220px;
  height: 220px;
  margin: 4px auto 0;
  text-align: -webkit-center;
}
</style>