<template>
  <div>
    <span v-once>这个值将不会改变：{{msg}}</span>
    <hr><hr>
    <div>
        <p>Using mustaches:{{rawHtml}}</p>
        <p>Using v-html directive:<span v-html="rawHtml"></span></p>
    </div>
    <hr><hr>
    <div>
        <button v-bind:disabled="isButton">button</button>
        <button :disabled="!isButton">button</button>
    </div>
    <hr><hr>
    <div>
        <h1>使用js表达式</h1>
        <ul>
            <li>{{ok?"yes":"no"}}</li>
            <li>{{message.split("").reverse()}}</li>
        </ul>
    </div>
    <hr><hr>
    <div>
        <h1>使用if</h1>
        <p v-if="isButton">now you can see me</p>
        <p v-if="!ok">now you can see me</p>
    </div>
    <hr><hr>
    <div>
        <h1>使用v-on</h1>
        <p v-on:click="alertTip">click!</p>
        <p @click="alertTip">click02!</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 5,
      rawHtml:"<span style='color:red'>this should be red.</span>",
      isButton:true,
      ok:false,
      message:"cabbage"
    };
  },
  methods: {
    changeMsg: function() {
        this.msg = (Math.random() * 100).toString();
        requestAnimationFrame(this.changeMsg);
    },
    alertTip:function(){
        alert("xixihaha");
    }
  },
  mounted(){
      this.changeMsg();
  }
};
</script>
