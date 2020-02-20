<template>
    <div>
        <btn v-bind:height="30" v-bind:width="100" background='red' text='test'></btn>
    </div>
</template>

<script>
import btn from './button.vue'
export default {
    components:{
        btn:btn
    }
}
</script>

<style>

</style>
