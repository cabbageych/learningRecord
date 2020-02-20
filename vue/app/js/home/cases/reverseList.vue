<template>
  <div>
      <button @click="list = list.reverse()">点击反转列表</button>
      <ul>
          <li v-for="(item,index) in list">{{index}}:{{item}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        //list:[1,2,3,4,5]
    };
  },
  props:{
      list:[],
  }
};
</script>

