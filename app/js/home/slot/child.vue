<template>
  <div> 
      <slot>{{data}}</slot>
      <slot name="s01">s01</slot>
      <slot name="s02">s02</slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:'data from child!'
    }
  }
};
</script>

<style>
</style>
