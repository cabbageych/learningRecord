<template>
  <div>
      <h2 v-if="show">内容展示</h2>
      <button @click="show = !show">showTitle?</button>
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
        console.log("before create!");
    },
    created(){
        console.log("created!");
    },
    beforeMount(){
        console.log("before mount!");
    },
    mounted(){
        console.log("mounted!");
    },
    beforeUpdate(){
        console.log("before update!");
    },
    updated(){
        console.log("updated!");
    },
    beforeDestroy(){
        console.log("before destroy!");
    },
    destroyed(){
        console.log("destroyed!");
    }
};
</script>

<style>
</style>
