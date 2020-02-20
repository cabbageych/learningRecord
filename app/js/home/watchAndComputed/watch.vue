<template>
  <div>
    <p>{{data}}</p>
    <button @click="data='watch test'">click to change data</button>
    <hr />
    <button @click="obj.test='...'">click to change obj.attr</button>
    <button @click="obj={}">click to change obj</button>
    <button @click="obj2.test='cabbage2'">deep watch in obj2</button>
    <button @click="obj3.test='cabbage3'">watch attr by computed</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "hello cabbage!",
      obj: {
        name: "cabbage",
        age: 18,
        test: "test"
      },
      obj2: {
        test: ""
      },
      obj3: {
        test: ""
      }
    };
  },
  computed:{
      test:function(){
          return this.obj3.test;
      }
  },
  watch: {
    data: function() {
      alert("watch!!!");
    },
    obj: function() {
      alert("watch...");
    },
    obj2: {
      handler(newVal, oldVal) {
        alert(newVal.test);
      },
      deep:true
    },
    //也可以直接obj3.test:function(){}进行watch
    test(newVal,oldVal){
        alert(newVal);
    }
  }
};
</script>

<style>
</style>
