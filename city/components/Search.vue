<template>
<div>
  <div class="search">
    <input
      type="text"
      class="search-input"
      placeholder="请输入城市或拼音"
      v-model.trim="searchVal"
      @input="handleInput" />
  </div>

  <!-- 搜索结果 -->
  <div class="result" v-show="searchVal" ref="result">
    <ul>
      <li
        v-for="result in results"
        :key="result.id"
        @click="handleCityClick(result.name)">{{result.name}}</li>

      <li v-show="!results.length">您输入的内容没有匹配项</li>
    </ul>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  props: {
    results: Array,
    default: () => []
  },
  data() {
    return {
      searchVal: '',
      timer: null
    }
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.result, {
        click: true
      });
    } else {
      this.scroll.refresh();
    }
  },
  methods: {
    // 将搜索结果传递给父组件
    handleInput() {
      // 节流
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.$emit('handleInput', this.searchVal);
      }, 200);
    },

    // 选中搜索后的城市
    handleCityClick(cityName) {
      this.changeCity(cityName);
      this.searchVal = '';
    },
    ...mapActions(['changeCity'])
  }
}
</script>

<style lang="scss">
.search {
  background-color: #00bcd4;
  padding: .16rem .2rem;
}
.search-input {
  width: 100%;
  height: .62rem;
  border-radius: .1rem;
  text-align: center;
}
.result {
  position: absolute;
  top: .94rem;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #efefef;
  overflow: hidden;
  z-index: 1;

  ul {
    background-color: #fff;
  }
  
  li {
    padding: 0 .2rem 0 .3rem;
    border-bottom: .01rem solid #eee;
    line-height: .7rem;
  }
}
</style>