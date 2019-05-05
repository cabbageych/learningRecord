<template>
    <cA></cA>
</template>
<script>
var cA ={
    template:'<h1>{{temp}}</h1>'
}
export default {
    data(){
        return{
            temp:"test"
        }
    },
    components:{
        cA
    }
}
</script>

