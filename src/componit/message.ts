import { ElNotification } from 'element-plus'

export default function toast(type: string){

    return ElNotification({
      message: '请勿重复登录',
      type: type as any,
      duration: 6000,
      progress: true,
  })
}