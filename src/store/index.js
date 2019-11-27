import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
const  store = new vuex.Store({
    state:{
        //user:{}//用户详情
    },
    mutations:{//方法
        setdatauser(state,user){
            window.console.log(user)
            //state.user=user;
            vue.set(state,'user',user)
           // vue.delete(state,'user')
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

    },
    modules:{ //模块

    }
})

export default  store
