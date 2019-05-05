<template>
  <div>
    <div>
      <h1>button-counter</h1>
      <h1>可以对组件进行任意次数的复用</h1>
      <button-counter></button-counter>
      <button-counter></button-counter>
      <article>注意当点击按钮时，每个组件都会各自独立维护它的 count。因为你每用一次组件，就会有一个它的新实例被创建。</article>
    </div>
    <hr>
    <div>
      <h1>使用props向自组件传递自定义属性</h1>
      <my-title title="xixihaha"></my-title>
      <my-title title="hello world"></my-title>
    </div>
    <hr>
    <div>
      <h1>使用props向自组件传递数据</h1>
      <my-title v-for="post in test" v-bind:key="post.id" v-bind:title="post.title"></my-title>
    </div>
    <hr>
    <div>
      <h1>使用局部注册组件</h1>
      <component-a :value="temp"></component-a>
      <my-test></my-test>
    </div>
  </div>
</template>
<script>
//var test =() => import('./testC.vue');
import test from "./testC.vue";
//局部主键注册
//var ComponentA =
export default {
  data() {
    return {
      temp: "test",
      test: [
        { id: 1, title: "my journary with vue" },
        { id: 2, title: "blogging with vue" },
        { id: 3, title: "why vue is so fun" }
      ]
    };
  },
  components: {
    "component-a": {
      template: "<div>{{value}}</div>",
      props:[
        'value'
      ],
      data: function() {
        return {
          value: this.value
        };
      }
    },
    "my-test": test
  }
};
</script>
<style>
hr {
  height: 10px;
  background: lightblue;
}
</style>


