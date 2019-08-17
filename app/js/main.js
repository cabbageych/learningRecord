import Vue from "vue" //vue模块
import App from "./App.vue" //vue的入口文件
import router from "./router" //路由文件，用于页面管理
import '../css/style.css' //样式文件
import '../css/sprites-generated.css'
import store from './store/store.js'
import myPlugin from './myPlugin/plugin.js'

Vue.use(myPlugin);
//通过全局方法 Vue.use() 即可使用该插件，其自动会调用install方法。Vue.use会自动阻止注册相同插件多次，届时只会注册一次该插件
Vue.config.productionTip = false





//创建组件
Vue.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me{{count}} times.</button>'
});

Vue.component('blog-post', {
    props: ['post'],
    template: '<div class="blog-post"><label>{{post.id}}</label><span v-html="post.content"></span></div>'
})

//通过prop向子组件传递数据
Vue.component('my-title', {
    props: ['title'],
    template: '<h3>{{title}}</h3>'
});

//props类型
Vue.component('type-test', {
    props: {
        title: String,
        count: Number,
        tORf: Boolean,
        arr: Array,
        author: Object
    },
    template: '<p>title:{{title}}-count:{{count}}-arr:{{arr[0]}}-author:{{author.name}}-tORf:{{tORf}}</p>'
})

//prop验证
Vue.component('my-validation', {
    props: {
        propA: Number,
        propB: [String, Number],   //多个可能的类型
        propC: {
            type: String,
            require: true       //必填字符串
        },
        propD: {
            type: Number,
            default: 666660000
        },
        propE: {
            type: Object,
            //对象或是默认值必须从一个工厂函数获得
            default: function () {
                return { message: 'hello' }
            }
        },
        propF: {
            validator: function (value) {
                //console.log(value);
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    },
    template: '<h3>propC:{{propC}} propB:{{propB}} propF:{{propF}}</h3>'
})




//新建一个vue对象
var vm = new Vue({
    el: "#app",
    router,
    store,
    myPlugin,
    components: {
        App
    },
    template: "<app/>",
});
