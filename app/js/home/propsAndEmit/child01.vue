<template>
  <div>
    传值给父组件:
    <input type="text" v-model="toParent">
    {{toParent}}
    <button @click="toP">submit</button><br>
    来自父组件的值:{{inputName}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      toParent: "emmm"
    };
  },
  // 接受父组件的值
  props: {
    inputName: String,
    required: true
  },
  methods: {
    toP: function() {
      this.$emit("fromChild", this.toParent);
    }
  }
};
</script>