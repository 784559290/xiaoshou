import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
import createPersistedState from "vuex-persistedstate"

const  store = new vuex.Store({
    state:{
        user:[]//用户详情
    },
    mutations:{//方法
        setdatauser(state,user){
            vue.set(state,'user',user)
        },
        deletedata(state,data){
            vue.delete(state,data)
        }


    },
    actions:{//异步系统监听
        Abou_aupa(context,data){
            context.commit('setdatauser',data)
        }

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
