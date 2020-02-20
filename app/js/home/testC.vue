<template>
    <cA :temp=temp></cA>
</template>
<script>
var cA ={
    props:['temp'],
    template:'<h1>{{temp}}</h1>'
}
export default {
    data(){
        return{
            temp:"testC"
        }
    },
    components:{
        cA
    }
}
</script>

