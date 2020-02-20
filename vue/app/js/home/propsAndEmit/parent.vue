<template>
  <div style="position:relative;margin:20px;">
    父组件:
    <span>childValue:{{childValue}}</span>
    <child :parentArr="arr" :inputName="name" :A="A" :B="B" v-on:fromChild="showValueC" v-on:arrTest="showTest"></child>
    父组件传值给子组件:name:<input v-model="name">{{name}}<br>
    父组件传值给子组件:A:<input v-model="A">{{A}}<br>
    父组件传值给子组件:B:<input v-model="B">{{B}}<br>
  </div>
</template>
<script>
import child from "./child01.vue";
export default {
  components: {
    child
  },
  data() {
    return {
      name: "toChild",
      childValue: "waiting...",
      arr:[1,2],
      A:'',
      B:''
    };
  },
  methods: {
    showValueC: function(tempstr) {
      this.childValue = tempstr;
    },
    showTest:function(){
      console.log("parent:");
      console.log(this.arr);
    }
  }
};
</script>