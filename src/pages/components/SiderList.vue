<template>
  <div class="side-menu el-menu">
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
      text-color="#fff" @select="handleSelect" >
    <template v-for="(value,) in sideMenus" :key="value.name">
      <el-sub-menu v-if="value.child && value.child.length > 0" :index="value.name" >
        <template #title>
          <el-icon>
            <component :is="value.icon"></component>
          </el-icon>
          <span>{{ value.name }}</span>
        </template>
        <el-menu-item-group v-for="(item1, ) in value.child" title="item">
          <el-menu-item :index="item1.pathna">{{ item1.name}}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item v-else :index="value.pathna" >
        <el-icon>
             <component :is="value.icon"></component>
        </el-icon>
        <span>{{ value.name }}</span>
      </el-menu-item>
    </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const route = useRouter();
const sideMenus = [
  { "name": "系统盘",
    "icon": "location",
    "pathna": "/index",
    "child": []
  },
  { "name": "数据实时",
    "icon": "Film",
    "pathna": "/dataNow",
    "child": []
  },
  { "name": "用户管理",
    "icon": "Avatar",
    "child": [
      { "name": "客户管理",
        "icon": "Avatar",
        "pathna": "/index/userman",
        "child": []
     }
    ]
  }
]
const handleSelect = (key: string, keyPath: string[]) => {
 console.log(key,   keyPath)
  route.push(key)

}
</script>



<style scoped>
.read-the-docs {
  color: #888;
}
.side-menu {
border-right: solid 1px #dcdfe6;
    background-color: #545c64;
        height: 100%;
        overflow: auto;
}
</style>
