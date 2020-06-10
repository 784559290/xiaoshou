import {request} from "@/network/user_request";
export function AddMonitorisPost(datas) {
    return request({
        method:'POST',
        data:datas,
        url:'/api/bookmark/create',
    })
}