<template>
  <div>
      <p>p:parent,c:child</p>
      <p>pbeforeCreate->pcreated->pbeforeMount->cbeforeCreate->cCreated->cbeforeMount->cMounted->pmounted->pbeforeDestroy->cbeforeDestroy->cdestroyed->pdestroyed</p>
      <p>?????????????????updated?beforeUpdate</p>
      <h2 v-if="show">lifeCycle</h2>
      <button @click="show = !show">showTitle?</button>
      <child></child>
  </div>
</template>

<script>
import child from './lifecycleChild.vue'
export default {
    components:{
        child
    },
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
