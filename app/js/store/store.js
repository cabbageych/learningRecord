import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        curCity: 'init',
        cityList: ['东莞', '深圳', '福州', '杭州', '北京', '上海', '广州'],
        curCount: 0
    },
    getters: {
        getCurCity: function (state) {
            return state.curCity;
        },
        getCurCityFromList: function (state) {
            return state.cityList[state.curCount];
        },
        getListNum: function (state) {
            return state.cityList.length;
        },
        getList: function (state) {
            return state.cityList;
        },
        getCount:function(state){
            return state.curCount;
        }
    },
    mutations: {
        addCity: function (state, city) {
            state.cityList.push(city);
        },
        setCity: function (state, city) {
            state.curCity = city;
        },
        setCurCount: function (state, num) {
            //console.log(num);
            state.curCount = num;
        }
    },
    actions: {
        setCity: function ({ commit }, city) {
            commit('setCity', city);
        },
        addCity: function ({ commit }, city) {
            commit('addCity', city);
        },
        setCurCount:function({commit},num){
            commit('setCurCount',num);
        }

    }
});

export default store;