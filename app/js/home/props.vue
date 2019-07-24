<template>
  <div>
    <div>
      <h1>数据绑定</h1>
      <my-title title="使用vbind进行绑定"></my-title>
      <my-title v-bind:title="message"></my-title>
      <hr>
    </div>
    <div>
      <h1>props类型</h1>
      <type-test title="cabbage" :count=666 v-bind:arr="[1,2]" :author='{name:"cabbage"}' :tORf='false'></type-test>
      <hr>
    </div>
    <div>
      <h1>prop验证</h1>
      <my-validation :propB=666 propC="hello vue" propF="succe"></my-validation>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return{
          message:"hello cabbage!",
          post:{
            id:'66666',
            content:"cabbage",
          }
      }
      
  }
};
</script>

