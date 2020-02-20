<template>
  <div>
    <hr />
    <h2>child</h2>
    <button @click="addCount">add</button>&nbsp;&nbsp;
    <button @click="minCount">min</button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
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
