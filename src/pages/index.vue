<template>
  <el-container class="main-container">
    <el-header style="padding: 0;height: 7%;position: relative;">
      <IndexHead />
    </el-header>
    <el-container class="main-container2">
      <el-aside width="10%">
        <SiderList />
      </el-aside>
      <el-main style="padding: 10px;height: 100%;" width="90%">
        <MainContainer msg="glo" />
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>

</template>

<script setup lang="ts">

import IndexHead from './components/IndexHead.vue';
import MainContainer from './components/MainContainer.vue';
import SiderList from './components/SiderList.vue';


</script>

<style lang="scss">
.main-container {
  height: 100%;
}
.main-container2 {
  height: 93%;
}
</style>