<template>
  <div>
    <div>something about this(使用箭头函数解决settimeout中function的this指向window的问题)</div>
    <p id="show">content show after setTimeOut:</p>
    <button @click="fn">click to setTimeOut</button>
  </div>
</template>

<script>
export default {
  methods: {
    addContent: function() {
      let show = document.getElementById("show");
      show.append("  done!");
    },
    fn: function() {
      setTimeout(()=>{
          this.addContent();
      }, 2000);
    }
  }
};
</script>

<style>
</style>
