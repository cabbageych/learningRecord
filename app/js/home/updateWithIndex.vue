<template>
  <div>
    {{arr}}
    <h3 v-for="item in arr">{{item}}</h3>
    <button @click="change">changeArr</button>
    {{temp}}
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
      vm.arr[3] = 6;
      this.arr.length = 1;
      this.arr[2] = this.arr[2] + 1;
      this.temp = this.arr[2];
    }
  }
};
</script>
