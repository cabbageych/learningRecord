<template>
  <div class="loading-box" v-show="show">
    <div class="loading-mask"></div>
    <div class="loading-content">
      <div class="animate"></div>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: "正在加载中..."
    }
  }
};
</script>
