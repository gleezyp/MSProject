<template>
  <el-tabs v-model="activeTab" type="card"  class="demo-tabs" @tab-remove="handleTabsRemove"
    @tab-change="handleTabChange">
    <el-tab-pane v-for="item in tabList" :key="item.path" :label="item.title" :name="item.path"
      :closable="item.path != '/'">
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate,onBeforeRouteLeave } from 'vue-router';
defineProps<{ msg: string }>()
import type { TabPaneName } from 'element-plus'
import router from '../../router';
import { getCookie, setCookie } from '../../componit/cookie';
const route = useRoute()
const activeTab = ref(route.path)
const tabList = ref([
  {
    title: '系统盘',
    path: '/',
  },

])
 onBeforeRouteLeave((to, fro) => {
  console.log(to, "'to>>>>>99999999999>>>>>>'", fro)
activeTab.value = to.path
  addThisTab({
    toTpath: to.path,
    toTitle: to.meta.name
  })
 })
onBeforeRouteUpdate((to, from) => {
  console.log(to, "'to>>>>>>>>>>>'", from)
  activeTab.value = to.path
  addThisTab({
    toTpath: to.path,
    toTitle: to.meta.name
  })
})
function addThisTab(obj: any) {
  console.log(obj, "'>>>>>>>>>>>'")

  const noThisTab = tabList.value.findIndex(t => t.path == obj.toTpath) == -1
  activeTab.value = obj.toTpath
  if (noThisTab) {
    tabList.value.push({
      title: obj.toTitle,
      path: obj.toTpath
    })
  }
  setCookie("tabList", JSON.stringify(tabList.value))
}
onMounted(() => {
  console.log( "'to>>>>>>>>>>>'",)

  let tbs = getCookie("tabList")
  if (tbs) tabList.value = JSON.parse(tbs)
})

const handleTabChange = (a: string) => {
  activeTab.value = a
  router.push(a)
}
const handleTabsRemove = (
  targetName: TabPaneName) => {

  const tabs = tabList.value
  let activeName = activeTab.value

  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]

        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
    activeTab.value = activeName
    tabList.value = tabs.filter((tab) => tab.path !== targetName)
    setCookie("tabList", JSON.stringify(tabList.value))
    router.push(activeName)
  }
}

</script>



<style scoped>
.read-the-docs {
  color: #888;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
