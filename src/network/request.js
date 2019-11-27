import  axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })

    //axios 拦截器 提交到服务器前
    instance.interceptors.request.use(config =>{
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