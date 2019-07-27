<template>
  <div>
    {{arr}}
    <h3 v-for="item in arr">{{item}}</h3>
    <button @click="change">changeArr</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [11, 22, 34, 2, 55],
      temp: ""
    };
  },
  methods: {
    change: function() {
      //this.arr[2] = this.arr[2] + 1; //视图不会更新
      this.arr.splice(2,1,this.arr[2]+1); //splice实现更新
      //this.$set(this.arr,2,this.arr[2]+1);  //this.$set实现更新
    }
  }
};
</script>
