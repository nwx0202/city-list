<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      placeholder="请输入城市或拼音"
      v-model="searchVal"
      @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchVal: ''
    }
  },
  methods: {
    handleInput() {
      this.$emit('handleInput', this.searchVal);
    }
  }
}
</script>

<style>
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
</style>