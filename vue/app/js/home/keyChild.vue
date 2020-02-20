<template>
  <div>
    {{content}}
    <input placeholder="input something..." />
    <button @click="remove">clickToDel</button>
  </div>
</template>

<script>
export default {
  props: ["content"],
  methods: {
    remove: function() {
      this.$emit("del",666);
    }
  }
};
</script>

<style>
</style>
