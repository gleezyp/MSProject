<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="card-header">
        <h2 class="title">欢迎登录</h2>
        <p class="subtitle">使用您的账号登录系统</p>
      </div>
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" label-position="top">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名: admin" :prefix-icon="User" clearable />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码: admin" :prefix-icon="Lock"
            show-password @keyup.enter="handleLogin" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" class="login-button" @click="handleLogin"
            v-loading.fullscreen.lock="fullscreenLoading">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>


<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'
import { User, Lock } from '@element-plus/icons-vue'
import login from '../api/manger'

const router = useRouter()
const userStore = useUserStore()
const loginFormRef = ref()
const loading = ref(false)
const fullscreenLoading = ref(false)

const loginForm = reactive({
  username: '',
  password: ''
})

const loginRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 1, max: 5, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 1, max: 5, message: '长度在 6 到 32 个字符', trigger: 'blur' }
  ]
}


const handleLogin = async () => {
  loginFormRef.value.validate((vac: boolean) => {
    if (!vac) {
      return false;
    }
    fullscreenLoading.value = true
    setTimeout(() => {
      fullscreenLoading.value = false
    }, 2000)
    login(loginForm.username, loginForm.password).then(re => {
      //跳转到首页

      userStore.setToken(re.data.data.token) // 存入 Pinia
      router.push('/')
    }).catch(err => {
      console.log(err, "<<<<<<<<---------------")
    })
  })
}
</script>


<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-card {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  text-align: center;
  margin-bottom: 24px;

  .title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }

  .subtitle {
    font-size: 14px;
    color: #999;
  }
}

.login-button {
  width: 100%;
  height: 44px;
  font-size: 16px;
}
</style>