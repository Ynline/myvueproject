<<<<<<< HEAD
import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=uft-8'
=======
<<<<<<< HEAD
import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=uft-8'
=======
import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)

const service = axios.create()

// 请求拦截器
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 12c18c8 (day2)
service.interceptors.request.use(req => {
  // 判断缓存的过期事件和文件是否改动，说明不管服务器有没有设置‘Cache-Control’，每次请求都必须重新获取
  req.headers['Cache-Control'] = 'no-cache'
  return req
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  if (res.request.responseType === 'blob') {
    return res.data
  }
  // 登陆的判断
  return res.data
}, error => {
  Promise.reject(error)
})

export default service
<<<<<<< HEAD
=======
=======
service.interceptors.request.use( req => {
    // 判断缓存的过期时间和文件是否改动，说明不管服务器有没有设置'Cache-Control'，每次请请求都必须重新获取
    req.headers['Cache-Control'] = 'no-cache'
    return req
}, error =>{
    Promise.reject(error)
} )

// 响应拦截器
service.interceptors.response.use( res => {
    // 如果返回的文件需要转成blob对象 后台用的多
    if( res.request.responseType === 'blob' ){
        return res.data
    }
    //登录的判断
    return res.data
}, error =>{
    Promise.reject(error)
} )

export default service;
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
