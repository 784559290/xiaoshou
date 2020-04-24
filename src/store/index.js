import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
import createPersistedState from "vuex-persistedstate"

const  store = new vuex.Store({
    state:{
        user:[],//用户详情
        token:'',
        Apilink:""
    },
    mutations:{//方法
        setdatauser(state,user){
            vue.set(state,'user',user)
        },
        setdatatoken(state,user){
            vue.set(state,'token',user)
        },
        setdataApilink(state,user){
            vue.set(state,'Apilink',user)
        },
        deletedata(state,data){
            vue.delete(state,data)
        }


    },
    actions:{//异步系统监听
        Abou_aupa(context,data){
            context.commit('setdatauser',data)
        },
        ajax_token(context,data){
            context.commit('setdatatoken',data)
        },
        ajax_Apilink(context,data){
            context.commit('setdataApilink',data)
        },


    },
    getters:{//计算熟悉
        userlentgh(state){
            return state.user
        }
    },
    modules:{ //模块

    },
    plugins: [createPersistedState()]
})

export default  store
