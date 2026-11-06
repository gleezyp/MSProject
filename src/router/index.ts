import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from '../store/user.ts'
import  toast  from '../componit/message.ts'

const router = createRouter({
  // 路由的工作模式采用 history
  history: createWebHistory(),
  // 路由数组用来配置多个路由
  routes: [
    // 其中一个路由
  {
      path: '/index',        // key
      component: () => import('../pages/index.vue'),  // 组件
      children:[
      {
         path: '/index', 
         name:'系统盘',       // key
      component: () => import('../pages/components/mainContai.vue'),  // 组件
      meta: {name: '系统盘', requiresAuth: true },  //需要路由守卫
      },
        {
         path: 'userman',        // key
      component: () => import('../pages/components/userman.vue'),  // 组件
      meta: {name: '用户管理页', requiresAuth: true },  //需要路由守卫
      }
      ]
    },
     {
      path: '/login',        // key
      name: 'login',
      component: () => import('../pages/login.vue'),  // 组件
       meta: {name: '项目登录页' }
    },
      {
         path: '/userman',        // key
      component: () => import('../pages/components/userman.vue'),  // 组件
      meta: {name: '用户管理页', requiresAuth: true },  //需要路由守卫
      },
    {
      path: '/dataNow',        // key
      name: 'dataNow',
      component: () => import('../views/DataNow.vue'),  // 组件
       meta: {name: '数据可视化' }
        },

    // 另一个路由
    {
      path: '/:pathMatch(.*)*',       // key
      name: 'NotFund',
      component: () => import('../pages/404.vue'), // 组件
       meta: {name: '出错了' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const hasToken = userStore.token

  if (to.meta.requiresAuth) {
    
    if (hasToken ) {
     console.log(to, 'g,g,',from)
      next()
    } else {
      next('/login')
    }

  }else  if(hasToken && to.path == '/login'){
           toast('warning')
    return next(from.path)
        }else {
            next()
  }

})

  router.afterEach((to, ) =>{
  let globalTitle = to.meta.name ? to.meta.name: ''
  document.title=globalTitle as string
  console.log(    '//////////', globalTitle)

  })
// 将路由器导出
export default router