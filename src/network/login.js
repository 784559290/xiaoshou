import {request} from "@/network/request";
export function postlogin(data) {
    return request({
        method:'POST',
        data:data,
        url:'/api/login/login'
    })
}