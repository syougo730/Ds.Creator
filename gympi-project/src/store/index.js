import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

// Storeを生成
const store = new Vuex.Store({
    state: {
        appname:'Ds.Creator',
        version:'3.0.0',
        modal:{
            openflg:false,
            message:'',
        },
        fx: {
            count: 3,//技数
            element: [
                {name:"default name",group:"Ⅱ",value:"B"}
            ]
        }
    },

    getters:{
        //appnameを使用するゲッター
        appname(state){return state.appname}

    },

    mutations:{
        /* addElem(state){
            //countの数だけElementを追加する
            console.log(state.fx.count);
            for (var i = 0; i < state.fx.count ; i++) {
                state.fx.element.$set(this.fx.element[i].name, 'default name')
                state.fx.element.$set(this.fx.element[i].group, 'Ⅱ')
                state.fx.element.$set(this.fx.element[i].value, 'B')
            }
        } */

        setAppname(state,payload){
            state.appname = payload.appname;
        }

    },

    actions:{
        doUpdate(context,payload){
            context.commit('setAppname', { payload })
            
        }
    },



});
export default store;