<template>
    <div>
        <p>{{data}}</p>
        <button @click="data='watch test'">click to change data</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:'hello cabbage!'
        }
    },
    watch:{
        data:function(){
            alert('watch!!!');
        }
    }
}
</script>

<style>

</style>
