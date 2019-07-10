import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
    //1.state
    state: {
        city: 'cityName',
        count: 0
    },
    //2.getters
    getters: {
        getCityFn(state) {
            return state.city;
        },
        getCount(state) {
            return state.count;
        }
    },
    //3.actions
    //通常跟api接口打交道
    //提供跟后台接口打交道的方法，并调用mutations提供的方法
    actions: {
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // name就是调用此方法时要传的参数
        setCityName({ commit, state }, name) {
            //跟后台打交道
            //调用mutations中的方法
            commit("setCity", name);
        },
        addCount({ commit, state }) {
            commit('addCount');
        },
        minCount({ commit, state }) {
            commit('minCount');
        }
    },
    //4.mutations
    //提供存储设置state数据的方法
    mutations: {
        //state指的是state的数据
        //name传递过来的数据
        setCity(state, name) {
            state.city = name; //将传参设置给state的city
        },
        addCount(state) {
            ++state.count;
        },
        minCount(state) {
            --state.count;
        },
    }
});

export default store;