<template>
  <div>
    <p>v-if:根据true/false决定是否在文档中添加此结点</p>
    <p>v-show:根据true/false设置display的值</p>
    <h2 v-if="show1">v-if</h2>
    <h2 v-show="show2">v-show</h2>
    <h2 v-show="show3">v-show</h2>
    <hr />
    <p v-for="item in obj.arr" v-if="show1">{{item}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: true,
      obj: {
        arr: [1, 2, 3, 4, 5, 6]
      }
    };
  }
};
</script>

<style>
</style>