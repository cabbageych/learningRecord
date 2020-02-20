<template>
  <div>
    <p id="activated">activated:</p>
    <p id="deactivated">deactivated:组件退出时触发(页面已经渲染为另一个页面)</p>
    <input v-model="dataA" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataA: "cabbageA"
    };
  },
  mounted() {
    console.log("mounted!");
  },
  activated() {
    let activated = document.getElementById("activated");
    activated.append("done!");
    console.log("activated!");
  },
  deactivated() {
    console.log("deactivated!");
  }
};
</script>

