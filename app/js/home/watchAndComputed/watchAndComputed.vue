<template>
  <div>
    <div>
      <h3>
        计算属性具有缓存。计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。
        <br />这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
      </h3>
      <p>Original message:{{message}}</p>
      <p>Computed reversed message:{{reversedMessage}}</p>
    </div>
    <div style="margin-top:50px;">
      <h3>侦听属性是你想在某个数据变化时做一些事情，如果做的事情是更新其他数据，那其实与把这个要更新的数据项定义成computed是一样的，这个时候用computed更有可读性，虽然技术上讲watch也可以实现。</h3>
      <p>fullName:{{fullName}}</p>
      <button @click="changeName">change firstName or lastName</button>
    </div>
    <div style="margin-top:50px;">
      <h3>使用computed完成fullName</h3>
      <p>fullNameC:{{fullNameC}}</p>
      <button @click="changeName">change firstName or lastName</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "welcome cabbage!",
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar"
    };
  },
  methods: {
    changeName: function() {
      let num = Math.random();
      if (num > 0.5) {
        this.firstName = num + 'Foo';
      } else {
        this.lastName = num + 'Bar';
      }
    }
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
  },
  computed: {
    //getter
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    fullNameC:{
        get:function(){
            //this.fullNameC = this.firstName+" "+this.lastName;
            return this.firstName+" "+this.lastName;
        },
        /*set:function(val){
            console.log('test');
            this.firstName = 'setF';
            this.lastName = 'setL';
        }*/
    }
  }
};
</script>

<style>
</style>
