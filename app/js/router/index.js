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
import formInputBinding from '../home/formInputBinding.vue'*/
import component from '../home/component.vue'/*
import props from '../home/props.vue'
import animaiton01 from '../home/animation01.vue'
import animaiton02 from '../home/animation02.vue'
import parent from '../home/propsAndEmit/parent.vue'*/
import brother01 from '../home/propsAndEmit/brother01.vue'
import brother02 from '../home/propsAndEmit/brother02.vue'/*
import reverseList from '../home/cases/reverseList.vue'*/
import lifecycle from '../home/lifecycle.vue'
//使用路由
Vue.use(Router)
//新建路由




export default new Router({
    routes: [
        {
            path: "/",
            name: "lifecycle",
            component: lifecycle
        },
        {
            path: "/brother01",
            name: "brother01",
            component: brother01
        },
        {
            path: "/brother02",
            name: "brother02",
            component: brother02
        },
        /*{
            path: "/",
            name: "component",
            component: component
        },
        {
            path: "/",
            name: "brother01",
            component: brother01
        },
        {
            path: "/brother01",
            name: "brother01",
            component: brother01
        },
        {
            path: "/brother02",
            name: "brother02",
            component: brother02
        },
        {
            path: "/",
            name: "parent",
            component: parent
        },
        {
            path: "/",
            name: "animation01",
            component: animaiton01
        },
        {
            path: "/",
            name: "props",
            component: props
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