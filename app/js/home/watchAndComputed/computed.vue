<template>
    <div>
        <h2>computed名称和data名称一致浏览器报错</h2>
        <p>{{dataC}}</p>
        <button @click="data='computed!'">click to change data</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:'hello cabbage!'
        }
    },
    computed:{
        dataC:function(){
            alert('computed!');
            return this.data;
        }
    }
}
</script>

<style>

</style>
