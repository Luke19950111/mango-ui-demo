import axios from 'axios';
import config from './config';
import Cookies from "js-cookie";
import router from '@/router'

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout,
      withCredentials: config.withCredentials
    })
    // request 请求拦截器
    instance.interceptors.request.use(
      config => {
        let token = Cookies.get('token')
        // 发送请求时携带token
        if (token) {
          config.headers.token = token
        } else {
          // 重定向到登录页面
          router.push('/login')
        }
        return config
      },
      error => {
        // 请求发生错误时
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )
    
    // response 响应拦截器
    instance.interceptors.response.use(
      response => {
        return response.data
      },
      err => {
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )
    // 请求处理
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}