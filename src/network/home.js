import {request} from "@/network/request";
export function getHomeContent() {
    return request({
        url:'/api/home/index'
    })
}

export function getHomeMultidata1() {
    return request({
        url:'/home/multidata'
    })
}
