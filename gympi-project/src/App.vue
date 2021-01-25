<template>
  <div id="app">
    <Header></Header>
    <div v-for="(n,key) in count" :key="key"
        @click="openModal()">
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

  </div>
</template>

<script>
import Element from './components/Element.vue'
import Header from './components/Headermenu.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Element,
    Modal,
    Header,
  },
  computed:{
    count(){
      return this.$store.state.fx.count
    },
    group(n){
      return this.$store.state.fx.element[n].group
    }
  },
  data(){
    return{
      modal:false,
      message:''
    }
  },
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
