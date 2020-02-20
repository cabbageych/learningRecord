<template>
  <div>
    <h1>
      <span>show message:{{msg}}</span>
    </h1>
  </div>
</template>
<script>
import bus from "./bus.js";
export default {
  data() {
    return {
      msg: "I come from brother02"
    };
  },
  mounted: function() {
    bus.$emit("txt", this);
  }
};
</script>

