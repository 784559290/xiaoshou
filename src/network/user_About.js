import {request} from "@/network/user_request";
export function GetAbout() {
    return request({
        url:'/api/about/index',
        method:'GET',
    })
}
export function GetAbout_Bookmark() {
    return request({
        url:'/api/bookmark/index',
        method:'POST',
        //data:{1:1}
    })
}

