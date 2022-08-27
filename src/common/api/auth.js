import request from './request.js'
import { Decrypt } from '@/utils/aes.js'

// 账号密码登录接口
export function loginByJson(params){
    return request({
        url:'/api/u/loginByJson',
        method:'POST',
        data:params
    })
}

// 创建token
export function createToken(){
    return request({
        url:'/api/token/createToken',
        method:'POST'
    })
}

//获取个人信息
export function getInfo({token}){
    return request({
        url:'/api/member/getInfo?token=' + token,
        method:'GET',
        headers:{
            // 本地保存的accessToken
            'Authorization': Decrypt(localStorage.getItem('token'))
        }
    })
}