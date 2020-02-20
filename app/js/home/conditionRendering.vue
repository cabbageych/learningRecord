<template>
  <div>
    <div>
      <h1>条件渲染</h1>
      <h1 v-if="ok">cabbage yes</h1>
      <h1 v-else>cabbage no</h1>
      <hr>
      <hr>
    </div>
    <div>
      <h1>在template上使用v-if条件渲染分组</h1>
      <template v-if="ok">
        <p>template test v-if ok:false</p>
      </template>
      <template v-else>
        <p>template test v-else ok:false</p>
      </template>
      <hr>
      <hr>
    </div>
    <div>
      <h1>v-else-if</h1>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>D</div>
      <hr>
      <hr>
    </div>
    <div>
      <h1>reuse without key</h1>
      <button @click="changeLiginType">切换登陆方式</button>
      <template v-if="loginType === 'username'">
        <label>Username</label>
        <input palceholder="Enter your username">
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
      </template>
      <hr>
      <hr>
    </div>
    <div>
      <h1>reuse with key 避免输入框内容的复用</h1>
      <button @click="changeLiginType">切换登陆方式</button>
      <template v-if="loginType === 'username'">
        <label>Username</label>
        <input palceholder="Enter your username" key="username-input">
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" key="email-input">
      </template>
      <hr>
      <hr>
    </div>
    <div>
      <h1>v-show</h1>
      <div v-show="!ok">v-show="!ok" ok:false</div>
      <article>
        v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
        v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
        相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
        一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
      </article>
      <hr>
      <hr>
    </div>
    <div>
      <h3>
        不推荐同时使用 v-if 和 v-for。请查阅风格指南以获取更多信息。
        当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。请查阅列表渲染指南 以获取详细信息。
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ok: false,
      type: "B",
      loginType: "username"
    };
  },
  methods: {
    changeLiginType: function() {
      if (this.loginType === "username") {
        this.loginType = "email";
      } else {
        this.loginType = "username";
      }
    }
  }
};
</script>

