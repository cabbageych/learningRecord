<template>
  <div>
      <h2>child compnoent!</h2>
      {{show}}
      <button @click="show = !show">click to change show</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    },
    beforeCreate(){
        console.log("child--before create!");
    },
    created(){
        console.log("child--created!");
    },
    beforeMount(){
        console.log("child--before mount!");
    },
    mounted(){
        console.log("child--mounted!");
    },
    beforeUpdate(){
        console.log("child--before update!");
    },
    updated(){
        console.log("child--updated!");
    },
    beforeDestroy(){
        console.log("child--before destroy!");
    },
    destroyed(){
        console.log("child--destroyed!");
    }
};
</script>

<style>
</style>
