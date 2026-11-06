import axios, { type InternalAxiosRequestConfig } from 'axios'

const servic = axios.create({
    baseURL: '/api',
    timeout:10000
})

//请求拦截器
servic.interceptors.request.use((config : InternalAxiosRequestConfig) => {
 const token = localStorage.getItem("token")
 if (token) {
    config.headers.Authorization = ` ${token} `
    config.headers.token = ` ${token} `
    //或者自定义header名
 }
 return config
},
(error) => {
    return Promise.reject(error)
}
)

export default servic