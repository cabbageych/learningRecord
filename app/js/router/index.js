import Vue from 'vue'
import Router from 'vue-router' //导入路由模块
import VueRouter from 'vue-router'
import Index from '../home/index.vue'
import TemplateSyntax from '../home/templateSyntax.vue'
import ClassAndStyle from '../home/classAndStyle.vue'
import TwoWayDataBinding from '../home/two-wayDataBinding.vue'
import ConditionRendering from '../home/conditionRendering.vue'
import listRendering from '../home/listRendering.vue'
import Event from '../home/event.vue'
import formInputBinding from '../home/formInputBinding.vue'
import component from '../home/component.vue'/*
import props from '../home/props.vue'
import animaiton01 from '../home/animation01.vue'
import animaiton02 from '../home/animation02.vue'*/
import parent from '../home/propsAndEmit/parent.vue'
import brother01 from '../home/propsAndEmit/brother01.vue'
import brother02 from '../home/propsAndEmit/brother02.vue'
import reverseList from '../home/cases/reverseList.vue'
import lifecycle from '../home/lifecycle.vue'
import updateWithIndex from '../home/updateWithIndex.vue'
import watchAndComputed from '../home/watchAndComputed.vue'
import citylist from '../home/store/citylist.vue'
import store01 from '../home/store/store01.vue'
import store02 from '../home/store/store02.vue'
import store02Child from '../home/store/store02Child.vue'
import keepAlive from '../home/keep-alive/components.vue'
import componentsCall from '../home/components/componentsCall.vue'

//使用路由
Vue.use(Router)
//新建路由




export default new Router({
    routes: [
        {
            path: "/",
            name: store02,
            component: store02
        },
        {
            path: '/citylist',
            name: citylist,
            component: citylist
        },
        {
            path: '/store01',
            name: store01,
            component: store01
        },
        {
            path: '/store02',
            name: store02,
            component: store02
        },
        {
            path: '/store02Child',
            name: store02Child,
            component: store02Child
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
            path: "/parent",
            name: "parent",
            component: parent
        },
        {
            path: "/keepAlive",
            name: "keepAlive",
            component: keepAlive
        },
        {
            path: "/listRendering",
            name: listRendering,
            component: listRendering
        },
        {
            path: '/componentsCall',
            name: componentsCall,
            component: componentsCall
        }
    ]
})