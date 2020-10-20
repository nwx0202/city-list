<template>
  <ul class="alphabet">
    <li
      v-for="alphabet of alphabets"
      :key="alphabet">
      {{alphabet}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    alphabets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.alphabet {
  position: fixed;
  top: 3.3rem;
  right: .1rem;

  li {
    color: #00bcd4;
    line-height: .41rem;
  }
}
</style>