<template>
  <div>
    父组件:
    <span>childValue:{{childValue}}</span>
    <child :inputName="name" v-on:fromChild="showValueC"></child>
    父组件传值给子组件:name:<input v-model="name">{{name}}
  </div>
</template>
<script>
import child from "./child01.vue";
export default {
  components: {
    child
  },
  data() {
    return {
      name: "toChild",
      childValue: "waiting..."
    };
  },
  methods: {
    showValueC: function(tempstr) {
      this.childValue = tempstr;
    }
  }
};
</script>