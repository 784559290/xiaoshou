import {request} from "@/network/request";
export function CatalogApi(datas) {
    return request({
        method:'POST',
        data:datas,
        url:'/api/Novel/Catalog',
    })
}
export function BookDastApi(datas) {
    return request({
        method:'POST',
        data:datas,
        url:'/api/Novel/queryNovel',
    })
}
export function NocontentApi(datas) {
    return request({
        method:'POST',
        data:datas,
        url:'/api/Novel/Nocontent',
    })
}

export function NobookmarkApi(datas) {
    return request({
        method:'POST',
        data:datas,
        url:'/api/bookmark/show',
    })
}


