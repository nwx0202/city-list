<template>
  <div class="container">
    <Search @handleInput="handleSearch">
    </Search>
    <List
      :cities="cities">
    </List>
    <Alphabet :alphabets="alphabets"></Alphabet>
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    Search,
    List,
    Alphabet
  },
  data() {
    return {
      cities: {},
      alphabets: []
    }
  },
  mounted() {
    // 获取城市数据
    this.getCities();
  },
  methods: {
    // 查询方法
    handleSearch(val) {
      console.log(val);
    },

    // 获取城市数据
    getCities() {
      this.$axios.get('./mock/cities.json').then(res => {
        if (res.status && res.status === 200) {
          this.cities = res.data;
          this.alphabets = Object.keys(this.cities);
        }
      });
    },
  }
}
</script>

<style>

</style>