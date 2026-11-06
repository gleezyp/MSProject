import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/assets/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index.ts'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)

const createpin = createPinia();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(DataVVue3)
app.use(createpin)
createpin.use(piniaPluginPersistedstate) // 启用持久化
app.use(router)
app.use(ElementPlus)
app.mount('#app')