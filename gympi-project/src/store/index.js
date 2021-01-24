import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

// Storeを生成
const store = new Vuex.Store({
    state: {
        appname:'Ds.Creator',
        version:'3.0.0',
        fx: {
            count: 3,//技数
            element: [
                {name:"default name",group:"Ⅱ",value:"B"}
            ]
        }
    },
    mutations:{
        addElem(state){
            //countの数だけElementを追加する
            console.log(state.fx.count);
            for (var i = 0; i < state.fx.count ; i++) {
                state.fx.element.$set(this.fx.element[i].name, 'default name')
                state.fx.element.$set(this.fx.element[i].group, 'Ⅱ')
                state.fx.element.$set(this.fx.element[i].value, 'B')
            }
        }
    }

});
export default store;