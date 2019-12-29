import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("@views/Home/Home");
const About_index = () => import("@views/About/About-index");
const Sort_index = () => import("@views/Sort/Sort-index");
const Ranking_index = () => import("@views/Ranking/Ranking-index");
const Search = () => import("@views/Search/Search");

//安装路由插件
Vue.use(Router)

const routes = [
    {
        path:'/',
        redirect:'/Home',
        component: Home
    },
    {
        path:'/Home',
        component: Home
    },
    {
        path:'/Search',
        component: Search
    },
    {
        path:'/About',
        component: About_index
    },
    {
        path:'/Sort',
        component: Sort_index
    },
    {
        path:'/Ranking',
        component: Ranking_index
    }
]

const router = new Router({
    routes,
    mode:'history'
})

//导出



export default  router
