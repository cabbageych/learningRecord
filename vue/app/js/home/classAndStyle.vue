<template>
  <div>
    <div>
      <h1>绑定class</h1>
      <div v-bind:class="{active:isActive}">v-bind AND class</div>
      <div class="static" v-bind:class="{ active: isActive}">嵌套</div>
    </div>
    <hr>
    <hr>
    <div>
      <h1>数组语法</h1>
      <div :class="[class01,class02]">数组语法尝试绑定多个css样式</div>
      <div v-bind:class="[isActive ? class01 : '', class02]">三元表达式</div>
      <div v-bind:class="[{ active: isActive }, class02]">对象语法</div>
    </div>
    <hr>
    <hr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      class01:"active",
      class02:"static"
    };
  }
};
</script>
<style>
.active {
  color: red;
}
.static{
    font-size:30px;
    border:5px solid lightcoral;
}
</style>


