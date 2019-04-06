<template>
  <div id="app">
    <h1 class="title">vueLearning</h1>
    <div>
      <h1 style="text-align:center;">单个根元素</h1>
      <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></blog-post>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style>
.title {
  text-align: center;
}
hr{
     height:10px;
     background:lightblue;
 }
 .blog-post{
   text-align:center;
 }
</style>