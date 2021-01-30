import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import Fx from '../public/json/fxList.json'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  data:{
    json:[],
    fx:Fx,
  },
  created:{
    
  }
}).$mount('#app')

