<template>
    <div>
        <keep-alive>
            <cA v-if="showChange"></cA>
            <cB v-else></cB>
        </keep-alive>
        <button style="position:relative;width:200px;" @click="showChange=!showChange">componentChange</button>
    </div>
</template>

<script>
import cA from './componentA.vue';
import cB from './componentB.vue';
export default {
    data(){
        return{
            showChange:true
        }
    },
    components:{
        cA:cA,
        cB:cB
    }
}
</script>

<style>

</style>
