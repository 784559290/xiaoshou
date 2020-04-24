import  axios from 'axios'
import router from "@/router";
import store from "@/store";

//axios.defaults.headers.Authorization='Bearer '+ store.state.token;

export function request(config) {
    const instance = axios.create({
        baseURL:'http://querylist.com',
        timeout:5000,
    })


    //axios 拦截器 提交到服务器前
    instance.interceptors.request.use(config =>{
        config.headers.common['Authorization'] = 'Bearer '+ store.state.token;
        console.log(config)
        return config
    },error => {
        return error
    })
    //axios 拦截器 相应拦截
    instance.interceptors.response.use(res =>{
        if (res.data.status ==444){
            router.push('/login')
        }
        return res.data
    },error => {
        return error
    })

    return instance(config)

}