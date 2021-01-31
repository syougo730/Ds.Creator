<template>
    <div>
        <div class="waza">
            <div class="num">{{cnt}}</div>
            <div class="element btn"  :data-num="cnt" @click="openModal()">
              <span class="name_ja">{{name_ja}}</span><br>
              <span class="name_en">{{name_en}}</span>
            </div>
            <div class="glp-val">
              <div class="group">{{group}}</div>
              <div class="value">{{value}}</div>
            </div>
            <div class="cv btn">GroupⅣ / CV</div>
        </div>
    </div>
</template>
<script>

export default {
  name:'Element',
    props: {
        cnt: Number,
        group:Number,
        value:Number,
        name_ja:String,
        name_en:String,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.waza {
    display: flex;
    height: 60px;
    align-items: center;
    margin: 5px 0;
}
.num {
    width: 5%;
    height: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #616161;
    color: #fff;
    margin: 3px;
}
.element {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 65%;
    background: #5C6BC0;
    color: #fff;
    margin: 0 3px;
}
.glp-val {
    width: 10%;
    height: 100%;
}
.glp-val>.group {
    width: 100%;
    height: 28px;
    margin-bottom: 2px;
    background: #616161;
}
.value {
    width: 100%;
    height: 29px;
    margin-top: 2px;
    background: #616161;
}
.cv {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3F51B5;
    color: #fff;
    margin: 0 3px;
}
.group, .value {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>