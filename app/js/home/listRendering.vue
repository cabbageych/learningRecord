<template>
  <div>
    <div>
      <h1>使用v-for渲染列表</h1>
      <ul>
        <li v-for="item in items">{{item.message}}</li>
      </ul>
      <h1>使用of替代in</h1>
      <ul>
        <li v-for="item of items">{{item.message}}</li>
      </ul>
      <hr>
      <hr>
    </div>
    <div>
      <h1>v-for with index</h1>
      <ul>
        <li v-for="(item, index) in items">{{index}}-{{item.message}}</li>
      </ul>
      <hr>
      <hr>
    </div>
    <div>
      <h1>使用v-for迭代对象属性</h1>
      <ul>
        <li v-for="(item, index) in object">{{index}}-{{item}}</li>
      </ul>
      <h1>传入的第三个参数为索引</h1>
      <ul>
        <li v-for="(item, key, index) in object">{{index}}-{{key}}-{{item}}</li>
      </ul>
      <hr>
      <hr>
    </div>
    <div>
      <h1>变异方法</h1>
      <p>arr[2]:{{arr[2]}}</p>
      <button
        @click="arrPop"
        style="background:lightblue;height:30px;width:100px;border-radius:10px;"
      >after pop</button>
      <hr>
      <hr>
    </div>

    <div>
      <h1>数组变动检测</h1>
      <p>非响应 arr[2]:{{arr[2]}}</p>
      <p>非响应 arr.[2]:{{arr[2]}}</p>
      <button
        @click="changeArr"
        style="background:lightblue;height:30px;border-radius:10px;"
      >arr[2]=1Andarr.length=5</button>
      <h1>触发状态更新</h1>
      <p>Vue.set(vm.items, indexOfItem, newValue) arr[2]:{{arr[2]}}</p>
      <button @click="changeState">触发状态更新</button>
      <hr>
      <hr>
    </div>

    <div>
      <h1>对象更改检测</h1>
      <p>由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除</p>
      <p>{{object.name}}</p>
      <p>{{object.num}}</p>
      <button @click="changeObject">对象更改</button>
      <hr>
      <hr>
    </div>
    <div>
      <h1>为对象添加多个新的属性</h1>
        add1:{{object.add1}}-add2:{{object.add2}}
      <button @click="addAttr">对象属性增加</button>
      <hr>
      <hr>
    </div>
    <div>
      <h1>显示过滤结果</h1>
        <ul>
            <li v-for="i in even(numbers)">{{i}}</li>
        </ul>
      <hr>
      <hr>
    </div>
  </div>
</template>
<script>
import Vue from '../main.js';
export default {
  data() {
    return {
      items: [
        { message: "cabbage" },
        { message: "xixihaha" },
        { message: "hello vue" }
      ],
      object: {
        name: "cabbage",
        age: "22",
        hobby: "playing",
        sex: "man"
      },
      arr: [1, 2, 3],
      numbers:[11,2,3,44,5,6]
    };
  },
  methods: {
    arrPop: function() {
      this.arr.pop();
    },
    changeArr: function() {
      this.arr.length = 5;
      this.arr[2] = 1;
    },
    changeState: function() {
      this.arr.splice(2, 1, 10);
    },
    changeObject:function(){
        this.$set(this.object,'num',25);
    },
    addAttr:function(){
        this.object = Object.assign({},this.object,{
            add1:'add1',
            add2:'add2'
        });
    },
    even:function(num){
        return this.numbers.filter(function (num){
            return num%2===0;
        })
    }
  },
  mounted() {}
};
</script>
