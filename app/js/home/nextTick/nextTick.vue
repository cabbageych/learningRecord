<template>
  <div>
      <p>界面渲染发生在一次事件循环之后，即调用栈中同步代码执行完之后。<br>因此,点击changeTest，#show中更新的信息为message信息更新之前的内容</p>
      <p id="message">{{test}}</p>
      <p id="show"></p>
      <button @click="change">changeTest</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        test:'init',
    };
  },
  methods:{
      change:function(){
          this.test = 'change!';
          let message = document.getElementById('message');
          let show = document.getElementById('show');

          show.innerHTML = message.innerHTML;
      }
  }
};
</script>

<style>
</style>
