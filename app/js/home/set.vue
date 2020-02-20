<template>
  <div>
    <ul>
      <li v-for="item in a">{{item}}</li>
    </ul>
    <button @click="addAttr">addAttr</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: {
        name: "cabbage",
        age: 18
      }
    };
  },
  methods: {
    addAttr: function() {
      let parent = document.getElementById("parent");
      //this.a.attr = 'cabbage';  //不会触发视图更新
      this.$set(this.a, "attr", "cabbage");   //触发视图更新，但是不能直接在this上添加属性
      console.log(this.a);
    }
  }
};
</script>

<style>
</style>
