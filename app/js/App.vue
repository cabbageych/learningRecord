<template>
  <div id="app">
    <h1 class="title">vueLearning</h1>
    <div>
      <router-link to="/brother01">brother01</router-link>
      <router-link to="/brother02">brother02</router-link>
      <router-link to="/parent">parent</router-link>
      <router-link to="/store01">store01</router-link>
      <router-link to="/keepAlive">keep-alive</router-link>
      <router-link to="/listRendering">listRendering</router-link>
      <router-link to="/componentsCall">componentsCall</router-link>
      <router-link to="/slot">slot</router-link>
      <router-link to="/set">set</router-link>
      <router-link to="/updateWithIndex">updateWithIndex</router-link>
      <router-link to="/nextTick">nextTick</router-link>
      <router-link to="/watch">watch</router-link>
      <router-link to="/computed">computed</router-link>
      <router-link to="/setTimeOutAndThis">setTimeOutAndThis</router-link>
      <router-link to="/key">key</router-link>
      <router-link to="/lifecycle">lifecycle</router-link>
      <router-link to="/">root</router-link>
    </div>
    <!--<div>
      <h1 style="text-align:center;">单个根元素</h1>
      <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></blog-post>
    </div>
    <router-link to="/brother01">toBrother01</router-link>
    <router-link to="/brother02">toBrother02</router-link>
    <reverse-list :list="myList"></reverse-list>-->
    <router-view></router-view>
    <brother01></brother01>
    <brother02></brother02>
  </div>
</template>
<script>
import reverseList from "./home/cases/reverseList.vue";
import brother01 from "./home/propsAndEmit/brother01.vue";
import brother02 from "./home/propsAndEmit/brother02.vue";
export default {
  data() {
    return {
      myList: [1, 3, 5, 7, 9],
      posts: [
        {
          id: 1,
          title: "my journary with vue",
          content: "welcome to vue test01"
        },
        { id: 2, title: "blogging with vue", content: "welcome to vue test02" },
        { id: 3, title: "why vue is so fun", content: "welcome to vue test03" }
      ]
    };
  },
  components: {
    reverseList: reverseList,
    brother01: brother01,
    brother02: brother02
  },
  mounted() {
    //let c = document.getElementById("cabbage");
    //console.log(this.attributes);
    //console.log(c.attributes);
  }
};
</script>
<style>
#app {
  text-align: center;
}
.title {
  text-align: center;
  margin-bottom: 50px;
}

.blog-post {
  text-align: center;
}
</style>