<template>
  <div>
    <h2 :style="{marginTop:100+'px'}">非父子组件传值</h2>
    <ul>
      <li>
        创建公共文件bus.js（import Vue from 'vue';
        export default new Vue();）
      </li>
      <li>分别在两个组件中引入该文件(import bus from "./bus.js";)</li>
      <li>
        注册监听事件(bus.$on("txt", function(msg) {
        this.msg = msg;
        console.log(this.msg);
        });)
      </li>
      <li>触发事件(bus.$emit('txt',this.msg);)</li>
    </ul>
    <span>show message:{{msg}}</span>
  </div>
</template>
<script>
import bus from "./bus.js";
export default {
  data() {
    return {
      foo: "foo component",
      msg: "I come from brother01"
    };
  },
  mounted: function() {
    console.log("brother01");
    var _this = this;
    bus.$on("txt", function(__this) {
      __this.msg = "message send from brother01";
      console.log("send message");
    });
  }
};
</script>

