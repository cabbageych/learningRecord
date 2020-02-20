<template>
  <div>
    <h1>进入/离开and列表过渡</h1>
    <hr>
    <div>
      <h1>单元素/组件的过渡</h1>
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <hr>
    <div>
      <h1>CSS过渡</h1>
      <button @click="show02 = !show02">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="show02">hello</p>
      </transition>
    </div>

    <hr>
    <div>
      <h1>CSS动画</h1>
      <button @click="show03 = !show03">Toggle show</button>
      <transition name="bounce">
        <p v-if="show03">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </transition>

      <hr>
      <div>
        <h1>自定义过渡的类名 它们的优先级高于普通的类名</h1>
        <button @click="show04 = !show04">Toggle render</button>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
        >
          <p v-if="show04">hello vue</p>
        </transition>
      </div>

      <hr>
      <div>
        <h1>多个元素的过渡</h1>
        <transition>
          <button v-if="docState === 'saved'" key="saved">Edit</button>
          <button v-if="docState === 'edited'" key="edited">Save</button>
          <button v-if="docState === 'editing'" key="editing">Cancel</button>
        </transition>
        <h1>简化版</h1>
        <transition>
          <button v-bind:key="docState">{{buttonMessage}}</button>
        </transition>
      </div>

      <hr>
      <div style="position:relative;">
        <h1 style="position:relative;">过渡模式--产生活动过渡的效果</h1>
        <transition name="switcher" mode="in-out">
          <button
            style="position:absolute;left:200px;"
            @click="switcher = !switcher"
            v-if="switcher"
          >过渡模式01</button>
        </transition>
        <transition name="switcher" mode="in-out">
          <button
            style="position:absolute;left:200px;"
            @click="switcher = !switcher"
            v-if="!switcher"
          >过渡模式02</button>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      show02: true,
      show03: true,
      show04: true,
      docState: "saved",
      switcher: true,
      view: "v-a"
    };
  },
  computed: {
    buttonMessage: function() {
      switch (this.docState) {
        case "saved":
          return "Edit";
        case "edited":
          return "Save";
        case "editing":
          return "Cancel";
      }
    }
  },

};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/*设置不同的进入动画和离开动画 设置持续时间和动画函数*/
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/*switcher*/
.switcher-enter-active,
.switcher-leave-active {
  transition: all 2s ease;
}
.switcher-enter {
  opacity: 0;
  transform: translateX(60px);
}
.switcher-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

</style>

