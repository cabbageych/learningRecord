<template>
  <div>
    <p v-for="item,key in obj1">{{key}}-{{item}}</p>
    <button @click="opObj1">addObj1</button>
    <hr />
    <h2>this.$set()</h2>
    <p v-for="item,key in obj2">{{key}}-{{item}}</p>
    <button @click="opObj2">addObj2</button>
    <button @click="delObj2">delObj2</button>
    <hr />
    <h2>Object.assign()</h2>
    <p v-for="item,key in obj3">{{key}}-{{item}}</p>
    <button @click="opObj3">addObj3</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj1: {
        name: "cabbage1",
        age: 18
      },
      obj2: {
        name: "cabbage2",
        age: 18
      },
      obj3: {
        name: "cabbage3",
        age: 18
      }
    };
  },
  methods: {
    opObj1: function() {
      this.obj1.test = "xixihaha";
      console.log(this.obj1);
    },
    opObj2: function() {
      this.$set(this.obj2, "test", "testObj2");
      console.log(this.obj1);
    },
    delObj2: function() {
      this.$set(this.obj2, "test", null);
      console.log(this.obj2);
    },
    opObj3: function() {
      this.obj3.test = "test3";
      this.obj3 = Object.assign({}, this.obj3);
      console.log(this.obj1);
    }
  }
};
</script>

<style>
</style>