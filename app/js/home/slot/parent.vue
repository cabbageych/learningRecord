<template>
    <div>
        <h1>Vue插槽</h1>
        <child>
            emmmm
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
    }
}
</script>

<style>

</style>
