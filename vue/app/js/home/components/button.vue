<template>
  <div>
    <button
      id="btnComponent"
      v-bind:style="{height:height+'px',width:width+'px',background:background}"
    >{{text==undefined?'temp':text}}</button>
  </div>
</template>

<script>
export default {
  props: ["height", "width", "background", "text"],
  data() {
    return {};
  },
  beforeMount() {
    if(this.height == undefined){
        this.height = 30;
    }
    if(this.width == undefined){
        this.width = 50;
    }
    if(this.background == undefined){
        this.background = 'lightskyblue';
    }
  }
};
</script>

<style scoped>
button {
  height: 30px;
  width: 50px;
  border-radius: 10px;
  font-size: 18px;
  background: white;
  border: none;
  color:white;
}
button:focus{
    outline: none;
}
button:hover{
    background: rgb(5, 73, 116) !important;
}
</style>
