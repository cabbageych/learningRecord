<template>
  <div>
    <ul id="container">
      <li v-for="(item,index) in arr1" :id="index">
        {{item}}
        <input placeholder="input something..." />
        <button @click="del(index)">delete</button>
      </li>
    </ul>
    <div>
      <child v-for="item,index in arr" :content="item.el" :key="item.id" @del="del2(index)"></child>
    </div>
  </div>
</template>

<script>
import child from "./keyChild.vue";
export default {
  components: {
    child
  },
  data() {
    return {
      arr: [
        { id: 20, el: 0 },
        { id: 21, el: 1 },
        { id: 22, el: 2 },
        { id: 23, el: 3 },
        { id: 24, el: 4 },
        { id: 25, el: 5 }
      ],
      arr1: [0, 1, 2, 3, 4, 5]
    };
  },
  methods: {
    del: function(id) {
      this.arr1.splice(id, 1);
    },
    del2: function(id) {
      this.arr.splice(id, 1);
    }
  }
};
</script>

<style>
</style>
