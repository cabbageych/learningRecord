<template>
    <div>
        <h1>Vue slot</h1>
        <child>
            {{show}}
            <p slot="s01">content s01</p>
            <div slot="s02">content s02</div>
        </child>
    </div>
</template>

<script>
import child from './child.vue'
export default {
    components:{
        child:child
    },
    data(){
        return{
            show:'data from parent!'
        }
    }
}
</script>

<style>

</style>
