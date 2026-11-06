<template>
  <dv-decoration-10 style="width:100%;height:5px;" />
  <div class="rings-inner">
    <div class="ring-item" v-for="(, i) in 5" :key="i">
      <dv-border-box-11 :title="config.shape" class="ring-box" :color="['#00c8ff', '#0a3a6e']" backgroundColor="rgba(5,20,45,0.4)">
      <div style="height: 30%;"></div>
        <dv-decoration-9 style="width:110px;height:110px;">
          <div color-green font-600 class="content" bg="~ dark/0">
            66%
          </div>
        </dv-decoration-9>
      </dv-border-box-11>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const config = reactive({
  data: [66, 45],
  shape: 'roundRect',
})
</script>

<style scoped>
.rings-inner {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  height: 100%;
  padding: 4px;
}

.ring-item {
  height: 100%;
  text-align: -webkit-center;
}

.ring-box {
  width: 100%;
  height: 100%;
}

.content {
  font-size: 28px;
  text-shadow: 0 0 3px #7acaec;
}
</style>