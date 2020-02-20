<template>
  <div>
    <div>{{count}}</div>
    <br />
    <button @click="addCount">add</button>&nbsp;&nbsp;
    <button @click="minCount">min</button>
    <br />
    <br />
    <child></child>
  </div>
</template>

<script>
import child from "./store02Child.vue";
export default {
  components: {
    child
  },
  data() {
    return {
      welcome: "welcome to vue!"
    };
  },
  computed: {
    count: function() {
      return this.$store.getters.getCount;
    }
  },
  methods: {
    addCount: function() {
      this.$store.dispatch("addCount");
    },
    minCount: function() {
      this.$store.dispatch("minCount");
    }
  }
};
</script>

<style>
</style>
