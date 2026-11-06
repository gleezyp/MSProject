<template>
    <div>
        <div>欢迎您！</div>
        <div class="dashboard">
            <el-row :gutter="16">
                <el-col :span="6" v-for="(item, idx) in stats" :key="idx">
                    <el-card shadow="hover" class="stat-card">
                        <div class="stat-item">
                            <div class="stat-icon" :style="{ background: item.color }">
                                <el-icon :size="28">
                                    <component :is="item.icon"></component>
                                </el-icon>
                            </div>
                            <div class="stat-info">
                                <p class="stat-label">{{ item.label }}</p>
                                <p class="stat-value">{{ item.value }}</p>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

            <el-row :gutter="12" style="margin-top: 10px;">
                <el-col>
                    <el-card shadow="hover">
                        <template #header>
                            <div class="flex-between">
                                <span>Vue</span>
                                <el-tag type="success" size="small">Vue3 + TS + Vite</el-tag>
                            </div>
                        </template>
                        <div class="intro">
                            <dv-conical-column-chart :config="configdata" style="width:400px;height:200px;" />

                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Money, ShoppingCart, Message } from '@element-plus/icons-vue'
import { shallowRef } from 'vue' 
const currentComponentUser = shallowRef(User)  // 用 shallowRef 替代 ref‌修复把Vue放入ref()
const currentComponentMoney = shallowRef(Money)
const currentComponentshp = shallowRef(ShoppingCart)
const currentComponentMess = shallowRef(Message)

const configdata = reactive({
    data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 71
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 35
    },
    {
      name: '漯河',
      value: 15
    }
  ],
  img: [
    '/1ft.svg',
    '/2ft.svg',
    '/3ft.svg',
    '/4ft.svg',
    '/5ft.svg',
    '/6ft.svg',

  ],
  showValue: true,
  columnColor:'rgba(0, 194, 255, 0.4)',
  textColor: '#aaa'
})
const stats = ref([
    { label: '用户总数', value: '12,846', icon: currentComponentUser, color: '#409EFF' },
    { label: '今日订单', value: '328', icon: currentComponentshp, color: '#67C23A' },
    { label: '今日营收', value: '¥68,420', icon: currentComponentMoney, color: '#E6A23C' },
    { label: '未读消息', value: '16', icon: currentComponentMess, color: '#F56C6C' }
])
</script>
<style lang="scss" scoped>
.dashboard {
    .stat-card {
        .stat-item {
            display: flex;
            align-items: center;
            gap: 16px;

            .stat-icon {
                width: 56px;
                height: 56px;
                border-radius: 10px;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .stat-info {
                .stat-label {
                    margin: 0;
                    color: #909399;
                    font-size: 14px;
                }

                .stat-value {
                    margin: 4px 0 0 0;
                    font-size: 22px;
                    font-weight: 600;
                }
            }
        }
    }

    .intro {
        line-height: 1.8;
        color: #606266;

        ul {
            padding-left: 20px;
            margin: 8px 0;
        }
    }
}
</style>
