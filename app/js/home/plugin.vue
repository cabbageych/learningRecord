<template>
  <div>
    <button id="cabbageButton" @click="fn">cabbage-button</button>
  </div>
</template>

<script>
export default {
  name:'cabbage-button',
  methods:{
    fn:function(){
      this.$showAttr();
    }
  }
};
</script>
<style scoped>
#cabbageButton{
  height:50px;
  font-size: 20px;
  border:none;
  background: lightblue;
  padding:15px;
  border-radius: 5px;
  box-shadow: 0 0 5px gray;
}
#cabbageButton:hover{
  background: rgb(6, 148, 184);
  color: white;
}
</style>
