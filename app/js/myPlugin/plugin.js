import myButton from '../home/plugin.vue'

let $vm;

export default {
    install(Vue, options) {
        Vue.component(myButton.name, myButton);
        Vue.prototype.$attr = 'hello cabbage';
        let temp = Vue.prototype;
        Vue.prototype.$showAttr = function () {
            console.log(temp, Vue.prototype.$attr);
            alert('my plugin content:'+Vue.prototype.$attr);
        }




        //添加全局方法
        /*在install方法中，我们直接在Vue实例上声明了$name属性并进行了赋值，
        当该插件注册后只要存在Vue实例的地方你都可以获取到Vue.$myName的值，因为其直接绑定在了Vue实例上*/
        //Vue.$name = 'cabbage';




        //添加全局资源
        /*添加全局资源包含了添加全局的指令／过滤器／过渡等，上方代码我们通过Vue.directive()添加了一个全局指令v-focus，
        其主要包含了5种方法，其中inserted代表当绑定元素插入到 DOM 中执行，
        而el.focus()代表聚焦绑定的元素，这样如果我们在一个input输入框上绑定该指令就会自动进行focus聚焦。*/
        /*Vue.directive('focus', {
            bind: function () { },

            // 当绑定元素插入到 DOM 中。
            inserted: function (el, binding, vnode, oldVnode) {

                // 聚焦元素
                el.focus();
            },

            update: function () { },
            componentUpdated: function () { },
            unbind: function () { }
        });*/



        //添加全局mixin方法
        /*mixin代表混合的意思，我们可以全局注册一个混合，其会影响注册之后创建的每个 Vue 实例，
        上方代码注册后会在每个组件实例中添加greetingFn方法，在单文件组件中可以直接通过this.greetingFn()调用。
        当然如果实例中存在同名方法，则mixin方法中创建的会被覆盖，同时mixin对象中的钩子将在组件自身钩子之前调用。*/
        /*Vue.mixin({
            methods: {
                greetingFn() {
                    console.log('greeting');
                }
            }
        });*/





        /* Vue.myGlobalMethod = function () {  // 1. 添加全局方法或属性，如:  vue-custom-element
             // 逻辑...
         }
 
         Vue.directive('my-directive', {  // 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
             bind(el, binding, vnode, oldVnode) {
                 // 逻辑...
             }
             //...
         })
 
         Vue.mixin({
             created: function () {  // 3. 通过全局 mixin方法添加一些组件选项，如: vuex
                 // 逻辑...
             }
             //...
         })
 
         Vue.prototype.$myMethod = function (options) {  // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
             // 逻辑...
         }
         */
    }
}
