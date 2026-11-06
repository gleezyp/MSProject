<template>
    <div class="header-1">
        <dv-decoration8 style="width:400px;height:50px;" />
        <div>
            <h3>数据可视化展页</h3>   
            <dv-decoration6 style="width:300px;height:30px;" />
        </div>
        <dv-decoration-11 style="width:300px;height:60px;">
      <div color-green font-900 bg="~ dark/0" style="font-size: xx-large;">
       {{ currentTime }}
      </div>
    </dv-decoration-11>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';


const currentTime = ref('')
//let timer: number | null = null
const updateTime = () => {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  currentTime.value = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}
onMounted(() => {
  updateTime()
  //timer = 
  window.setInterval(updateTime, 1000)
})
</script>

<style  scoped>
.header-1 {
  width: 100%;
 /* height: 13%;*/
  display: flex;
  justify-content: space-between;
  text-align: center;
      align-items: end;
}
.header-1 h3 {
    margin-top: 5px;
    margin-bottom: 5px;
    letter-spacing: 100%;
}
</style>