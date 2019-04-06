<template>
  <div>
    <div>
      <button @click="domTest($event)">原生dom</button>
      <hr>
      <hr>
    </div>
    <div>
        <h1>事件修饰符</h1>
        <div @click.self="tipG" style="width:150px;height:150px;background:lightblue;">
            stop:阻止冒泡继续
            <div @click="tipP" style="width:100px;height:100px;background:red;">
                <div @click="tipC" style="width:50px;height:50px;background:white;"></div>
            </div>
        </div>
      <hr>
      <hr>
    </div>
    <div>
        <h1>按键修饰符</h1>
        {{keyValue}}
        <input @keyup.13="keyValue = '111'" @keyup.right="keyValue = '100'" @keyup.200="keyValue = '200'">
      <hr>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return{
          keyValue:'null'
      }
  },
  methods: {
    domTest: function(e) {
      console.log(e);
    },
    tipG:function(){
        alert("grandfather");
    },
    tipP:function(){
        alert("parent");
    },
    tipC:function(){
        alert("child");
    },
  },
  mounted(){
      
  }
};
</script>

