<template>
  <el-card shadow="hover">
    <template #header>
      <div class="flex-between">
        <!-- <span>用户管理3</span> -->
        <el-button type="primary" size="small" icon="Plus" @click="dialogFormVisible = true">新增用户</el-button>
      </div>
    </template>
    <el-table :data="tableData" border style="width: 100%" height="450">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="username" label="姓名" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="user_level.name" label="角色" />
      <el-table-column prop="status" label="状态">
        <template #default="{ row }">
          <el-tag :type="row.status === 1 ? 'success' : 'danger'">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button size="small" type="primary" link @click="update(row)">编辑</el-button>
          <el-button size="small" type="danger" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
     <el-dialog v-model="dialogFormVisible" title="用户" width="500">
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="角色" :label-width="formLabelWidth">
        <el-select v-model="form.user_level.name" placeholder="Please select a role">
          <el-option label="普通会员" value="普通会员" />
          <el-option label="火箭" value="火箭" />
          <el-option label="黑金会员" value="黑金会员" />
          <el-option label="无会员" value="无会员" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" >
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  </el-card>

</template>

<script setup lang="ts">
defineOptions({ name: 'User' })
import { ref, onActivated, onMounted, reactive } from 'vue'
import getUsers from '../../api/user';

const tableData = ref([])
// const tableData = ref([
//   { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '启用' },
//   { id: 2, name: '李四', email: 'lisi@example.com', role: '编辑', status: '启用' },
//   { id: 3, name: '王五', email: 'wangwu@example.com', role: '访客', status: '禁用' },
//   { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '编辑', status: '启用' }
// ])
let dialogFormVisible = ref(false)
const formLabelWidth = '140px'
let form = reactive({
  username: '',
  email: '',
  user_level: {name:''},
 
})

 function update (row: any){
  dialogFormVisible.value = true
  console.log("////",row.target);
  form = row
}
onMounted (() =>{
  getUsers(1).then(response => {
    if(response.status == 200){
     //const getUserLis = reactive([])
      tableData.value = response.data.data.list

    //  response.data.data.list.forEach((iten:any,index:any)=>{
    //  const user = reactive([])
     // tableData = iten
    //   user.id = iten.id
    //   user.username = iten.username
    //   user.email = iten.email
    //  // user.id = iten.id
    //   user.role = iten.user_level.name
    //   getUserLis.push(user)
      
      //user.value.userLevelId = iten.userLevelId
   //   })
    }
  })
})


// 演示 keep-alive：组件激活时输出，只会在首次/重新激活时触发
onActivated(() => {
  console.log('[用户管理] 页面被激活 (activated)，说明 keep-alive 生效')
})
</script>


<style lang="scss" scoped>
.page-wrap {
    width: 100%;
  //  height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    /* 整体禁止页面滚动 */
    box-sizing: border-box;
    // padding: 8px;

    .top-bar {
        width: 100%;
        height: 80px;
        border: 2px solid red;
        box-sizing: border-box;
    }

    .second-bar {
        width: 100%;
        height: 60px;
        border: 2px solid red;
        box-sizing: border-box;
    }

    .main-container {
        flex: 1;
        display: flex;
        gap: 8px;

        .sidebar {
            width: 220px;
            height: 100%;
            border: 2px solid red;
            box-sizing: border-box;
            overflow: hidden; // 外层截断，inner负责滚动

            .sidebar-inner {
                width: 100%;
                height: 100%;
                overflow-y: auto; // 垂直滚动
                overflow-x: hidden;
            }
        }

        .right-wrap {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 8px;

            .right-top {
                flex: 1;
                border: 2px solid red;
                box-sizing: border-box;
                overflow: hidden;

                .right-top-inner {
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                    overflow-x: hidden;
                }
            }

            .right-bottom {
                height: 120px;
                border: 2px solid red;
                box-sizing: border-box;
            }
        }
    }
}
</style>
