<template>
    <div>
        <div>
            <h1>基础用法</h1>
            <input v-model="message" placeholder="edit me">
            <textarea v-model="message" placeholder="edit me"></textarea>
            {{message}}
            <h1>复选框</h1>
            <input type="checkbox" v-model="checked">
            <label>{{checked}}</label>
        </div>
        <div>
            <h1>复选框数组</h1>
            <input type="checkbox" value="01" v-model="checkedArr">
            <label>01</label>
            <input type="checkbox" value="02" v-model="checkedArr">
            <label>02</label>
            <input type="checkbox" value="03" v-model="checkedArr">
            <label>03</label>
            <p>checkedArr:{{checkedArr}}</p>
        </div>
        <div>
            <h1>单选</h1>
            <input type="radio" value="01" v-model="picked">
            <label>one</label>
            <input type="radio" value="02" v-model="picked">
            <label>two</label>
            <p>picked:{{picked}}</p>
            <h1>选择框</h1>
            <select v-model="selected">
                <option disabled value="">choose</option>
                <option>a</option>
                <option>b</option>
                <option>c</option>
            </select>
            <p>selected:{{selected}}</p>
            <h3>使用v-for渲染选择框</h3>
            <select v-model="selected02">
                <option v-for="option in options" :value="option.value">{{option.text}}</option>
            </select>
            <span>selected02:{{selected02}}</span>
        </div>
        <div>
            <h1>值绑定</h1>
            <input type="checkbox" v-model="toggle" true-value="hello cabbage" false-value="hello vue">
            <p>toggle:{{toggle}}</p>
            <h1>选择框绑定对象</h1>
            <select v-model="object">
                <option :value="{name:'cabbage'}">cabbage</option>
            </select>
            <p>object.name:{{object.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:"null",
            checked:false,
            checkedArr:[],
            picked:'',
            selected:'',
            options:[
                {text:'one',value:'01'},
                {text:'two',value:'02'},
                {text:'three',value:'03'}
            ],
            selected02:'',
            toggle:'',
            object:{}
        }
    }
}
</script>

