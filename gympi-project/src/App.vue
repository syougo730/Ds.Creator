<template>
  <div id="app">
    <Header 
      :appname="appname"
    />
    <div v-for="(n,key) in count" :key="key" @click="openModal()">
      <Element 
        :cnt="n"
        :group="0.0"
        :value="0.0"
        name_ja="TOUCH to select Elements." 
        name_en="" 
      />
    </div>
    
    <Modal @close="closeModal" v-if="modal">
      <p>Vue.js Modal Window!</p>
      <div><input v-model="message"></div>
      <template slot="footer">
        <button @click="doSend">送信</button>
      </template>
    </Modal>

    <div v-for="(n,key) in fx['element'].length" :key="key">
      {{ fx.element[key].key }}
      {{ fx.element[key].name }}
      {{ fx.element[key].group }}
      {{ fx.element[key].vv }}
    </div>

  </div>
</template>

<script>
import Element from './components/Element.vue'
import Header from './components/Headermenu.vue'
import Modal from './components/Modal.vue'
import Fx from '../public/json/fxList.json'

export default {
  name: 'App',
  data(){
    return{
      fx:Fx,
      count:3,
    }
  },
  components: {
    Element,
    Modal,
    Header,
  },
  /* data(){
    return{
      modal:false,
      message:''
    }
  }, */
  props:{
  },
  methods:{
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    }
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
