<template>
  <div class="city">
    <ul>
      <li v-for="(item,index) in cityArr" @click="backFn(index)">
        <h2>{{item}}</h2>
      </li>
    </ul>
    <input type="text" v-model="tempCity" />
    <button @click="addCity">addCity</button>
    <hr />
    <span>length of cityList:{{cityList}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tempCity: "",
      cityArr: []
    };
  },
  mounted() {
    this.cityArr = this.$store.getters.getList;
  },
  methods: {
    backFn: function(index) {
      this.$store.dispatch("setCurCount", index);
      let city = this.$store.getters.getCurCityFromList;
      //console.log(index,city);
      //console.log(this.$store.getters.getCount);
      this.$store.dispatch("setCity", city);
      //返回首页
      this.$router.push("/store01");
    },
    addCity: function() {
      this.$store.dispatch("addCity", this.tempCity);
    }
  },
  computed: {
    cityList: function() {
      return this.$store.getters.getListNum;
    }
  }
};
</script>

<style>
</style>
