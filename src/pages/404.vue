<template>
      <el-result
        icon="error"
        title="404"
        sub-title="页面丢了"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/index')">回到首页</el-button>
        </template>
      </el-result>
   
</template>

<script setup lang="ts"></script>
