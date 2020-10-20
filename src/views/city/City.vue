<template>
  <div class="container">
    <Search @handleInput="handleSearch"></Search>
    <List />
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'

export default {
  name: 'City',
  components: {
    Search,
    List
  },
  methods: {
    handleSearch(val) {
      console.log(val);
    }
  }
}
</script>

<style>

</style>