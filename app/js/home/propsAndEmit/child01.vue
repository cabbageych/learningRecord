<template>
  <div>
    传值给父组件:
    <input type="text" v-model="toParent">
    {{toParent}}
    <button @click="toP">submit</button><br>
    来自父组件的值:{{inputName}}<br>
    <button @click="changeParentArr">改变parentArr</button>
  </div>
</template>
<script>
export default {
  props:['parentArr'],
  data() {
    return {
      toParent: "emmm",
      childArr:[]
    };
  },
  // 接受父组件的值
  props: {    //使用props接受父组件传来的值
    inputName: String,
    required: true
  },
  methods: {
    toP: function() {
      this.$emit("fromChild", this.toParent);  //使用$emit向父组件传值
    },
    changeParentArr:function(){
      console.log(this.childArr);
      this.childArr = [4,6,5];
      console.log(this.parentArr);
      console.log(this.childArr);
      this.$emit('arrTest');
    }
  },
  mounted(){
    console.log(this.parentArr);
    this.childArr = this.parentArr;
    console.log(this.childArr);
  }
};
</script>