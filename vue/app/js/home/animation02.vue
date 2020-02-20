<template>
  <div>
    <div>
      <h1>多个组件的过渡</h1>
      <input type="radio" value="v-a" v-model="view">&nbsp;
      <label>A</label>
      <input type="radio" value="v-b" v-model="view">&nbsp;
      <label>B</label>
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="view"></component>
      </transition>
      <hr>
    </div>

    <div>
      <h1>列表的过渡--transition-group默认以span呈现元素，可以通过tag特性更换为其他元素，内部元素总是要提供唯一的key属性值</h1>
      <button v-on:click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">{{item}}</span>
      </transition-group>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      view: "v-a",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }
  },
  components: {
    "v-a": {
      template: "<div>Component A</div>"
    },
    "v-b": {
      template: "<div>Component B</div>"
    }
  }
};
</script>
<style>
/*列表的过渡*/
.list-item{
    display:inline-block;
    margin-right:10px;
}
.list-enter-active,.list-leave-active{
    transition:all 1s;
}
.list-enter{
    opacity:0;
    transform:translateY(-30px);
}
.list-leave-to{
    opacity:0;
    transform:translateY(30px);
}

/*多个组件的过渡*/
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>

