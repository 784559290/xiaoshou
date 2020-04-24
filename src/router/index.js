import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("@views/Home/Home");
const About_index = () => import("@views/About/About-index");
const Sort_index = () => import("@views/Sort/Sort-index");
const Ranking_index = () => import("@views/Ranking/Ranking-index");
const Search = () => import("@views/Search/Search");
const BookDast = () => import("@views/Book/BookDetails/index");
const Read = () => import("@views/Book/Read/Read-index");
const login = () => import("@views/About/login/About-login");

//安装路由插件
Vue.use(Router)
//路由重复点击问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
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
        component: About_index,
    },
    {
        path:'/Sort',
        component: Sort_index
    },
    {
        path:'/Ranking',
        component: Ranking_index
    },
    {
        path:'/BookDast',
        component: BookDast
    },
    {
        path:'/Read',
        component: Read
    },
    {
        path:'/login',
        name:'login',
        component:login,
    }
]

const router = new Router({
    routes,
    mode:'history'
})

//导出



export default  router
