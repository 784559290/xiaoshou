import  axios from 'axios'
import Qs from 'qs'
import store from "@/store";
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.transformRequest = [obj => Qs.stringify(obj)]

export function request(config) {
    const instance = axios.create({
        baseURL:'',
        timeout:5000
    })

    //axios 拦截器 提交到服务器前
    instance.interceptors.request.use(config =>{
        config.headers.common['Authorization'] = 'Bearer '+ store.state.token;

        return config
    },error => {
        return error
    })
    //axios 拦截器 相应拦截
    instance.interceptors.response.use(res =>{
        return res.data
    },error => {
        return error
    })

    return instance(config)

}