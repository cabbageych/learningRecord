<template>
    <div>
        <h1>双向数据绑定实现</h1>
        <input type="text" id="a">
        <span id="b"></span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:{}
        }
    },
    methods:{
        simpleTest: function(){
            Object.defineProperty(this.obj,'hello',{
                set:function(newVal){
                    document.getElementById('a').value = newVal;
                    document.getElementById('b').innerHTML = newVal;
                }
            });
            document.addEventListener('keyup',function(e){
                this.obj.hello = e.target.value;
            })
        }
    }
}
</script>

