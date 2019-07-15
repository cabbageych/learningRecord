<template>
  <div>
    传值给父组件:
    <input type="text" v-model="toParent">
    {{toParent}}
    <button @click="toP">submit</button><br>
    来自父组件的值:{{inputName}}<br>
    来自父组件的A+B:{{A+B}}<br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toParent: "emmm",
      childArr:[]
    };
  },
  // 接受父组件的值

  props:[
    "inputName",
    "A",
    "B"
  ],
  methods: {
    toP: function() {
      this.$emit("fromChild", this.toParent);  //使用$emit向父组件传值
    },
  },
  mounted(){
    console.log(this.parentArr);
    this.childArr = this.parentArr;
    console.log(this.childArr);
  }
};
</script>