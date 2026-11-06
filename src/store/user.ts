import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
  // 状态：初始化时尝试从 localStorage 读取，确保持久化生效
  const token = ref<string>(localStorage.getItem('token') || '')
  const userInfo = ref<any>(null)
  const avtar = "/523738ba990ceef2d32fbabced01234a.jpg"


  // 动作：设置 Token
  const setToken = (newToken: string) => {
    token.value = newToken
    localStorage.setItem('token', newToken) // 同步写入本地存储
  }

  // 动作：清除 Token
  const clearToken = () => {
    token.value = ''
    userInfo.value = null
    localStorage.removeItem("token")
  }

  return { token, userInfo, setToken, clearToken, avtar }
}, {
  //  persist: true // 开启自动持久化（若已全局注册插件，此处可省略手动 localStorage 操作，但建议保留双重保险或仅依赖插件）
})