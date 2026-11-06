<template>
  <el-row class="header1" style="position: relative;">
    <el-col :span="12" style="height: 100%;">
      <div class="head-left">
        <span>
          <el-icon class="iconbtn">
            <ArrowLeftBold />
          </el-icon>
          yan ping
        </span>
      </div>
    </el-col>
    <el-col :span="12" style="height: 100%;">
      <div class="head-right">
        <el-icon class="iconbtn" style="top: 5px;">
          <rank v-if="isFullscreen" />
          <FullScreen @click="toggle"/>
        </el-icon>
        
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="29" :src="atvd" style="margin-right: 10px;"/>
            <span>张燕萍</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item @click="loginOut()">退出</el-dropdown-item>

            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { useUserStore } from '../../store/user'
import { useRouter } from 'vue-router';
import { useFullscreen } from '@vueuse/core'

const userStore = useUserStore()
const atvd = useUserStore().avtar
const router = useRouter();
const { isFullscreen, toggle } = useFullscreen()

function loginOut() {
  console.log('点击了退出')
  userStore.clearToken()
  router.push('/login')
}
</script>

<style scoped>
.header1 {
  padding: 0 0px 0 3px;
  border-bottom: 1px solid var(--vt-c-divider-light);
  background: #6b9bff;
  height: 100%;
}

.head-left {
  margin: 17px;
}

.head-left span {
  font-weight: 400;
  font-size: larger;
}

.head-right {
  padding: 9px;
  text-align: right;
}

.iconbtn {
  width: 42px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 4px;
}

.iconbtn:hover {
  background: #1a44ee;
}
</style>
