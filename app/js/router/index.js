import Vue from 'vue'
import Router from 'vue-router' //导入路由模块
import VueRouter from 'vue-router'
/*import Index from '../home/index.vue'
import TemplateSyntax from '../home/templateSyntax.vue'
import ClassAndStyle from '../home/classAndStyle.vue'
import TwoWayDataBinding from '../home/two-wayDataBinding.vue'
import ConditionRendering from '../home/conditionRendering.vue'
import ListRendering from '../home/listRendering.vue'
import Event from '../home/event.vue'
import FormInputBinding from '../home/formInputBinding.vue'
import Component from '../home/component.vue'
import props from '../home/props.vue'
import animaiton01 from '../home/animation01.vue'*/
import animaiton02 from '../home/animation02.vue'

//使用路由
Vue.use(Router)
//新建路由




export default new Router({
    routes: [
        {
            path: "/",
            name: "animation02",
            component: animaiton02
        },
        /*{
            path: "/",
            name: "animation01",
            component: animaiton01
        },
        {
            path: "/",
            name: "props",
            component: props
        },
        /*{
            path: "/",
            name: "Component",
            component: Component
        },
        {
            path: "/",
            name: "FormInputBinding",
            component: FormInputBinding
        },
        {
            path: "/",
            name: "Event",
            component: Event
        },
        {
            path: "/",
            name: "ListRendering",
            component: ListRendering
        },
        {
            path: "/",
            name: "ConditionRendering",
            component: ConditionRendering
        },
        {
            path: "/",
            name: "TwoWayDataBinding",
            component: TwoWayDataBinding
        },
        {
            path: "/",
            name: "ClassAndStyle",
            component: ClassAndStyle
        },
        {
            path: "/",
            name: "TemplateSyntax",
            component: TemplateSyntax
        },
        {
            path: "/",
            name: "Index",
            component: Index
        }*/
    ]
})