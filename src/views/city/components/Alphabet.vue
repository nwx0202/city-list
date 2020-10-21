<template>
  <ul class="alphabet">
    <li
      v-for="alphabet of alphabets"
      :key="alphabet"
      @click="handleLetterClick">
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
  },
  methods: {
    handleLetterClick(event) {
      const val = event.target.innerText;
      this.$emit('letterChange', val);
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