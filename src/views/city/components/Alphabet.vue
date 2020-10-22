<template>
  <ul class="alphabet" ref="alphabet">
    <li
      v-for="alphabet of alphabets"
      :key="alphabet"
      :ref="alphabet"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">
      {{alphabet}}
    </li>
    <div class="active-letter"
      :style="{top: activeLetterY + 'px'}"
      v-show="activeLetter">
      {{activeLetter}}
    </div>
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
  data() {
    return {
      activeLetter: '',
      // 字母A距离页面顶部的距离
      starY: 0,
      activeLetterY: 0,
      timer: null
    }
  },
  mounted() {
    this.starY = this.$refs.alphabet.offsetTop;
  },
  methods: {
    handleLetterClick(event) {
      const val = event.target.innerText;
      this.$emit('letterChange', val);
    },
    handleTouchStart() {},

    handleTouchMove(event) {
      // 节流，减少频繁触发带来的资源消耗
      if (this.timer) return;
      this.timer = setTimeout(() => {
        // 获取移动时的位置
        const moveY = event.touches[0].clientY || event.touches[0].pageY;
        // 移动的高度 - 字母A到顶部的距离 = 当前字母的高度 20是每个字母的高度
        const index = Math.floor((moveY - this.starY) / 18);
        if (index >= 0 && index <= this.alphabets.length) {
          this.activeLetter = this.alphabets[index];
          this.activeLetterY = this.$refs.A[0].offsetTop + index * 18;

          // 通知父组件字母改变
          this.$emit('letterChange', this.activeLetter);
        }
        this.timer = null;
      }, 30);
    },
    handleTouchEnd() {
      this.activeLetter = '';
    }
  }
}
</script>

<style lang="scss">
.alphabet {
  position: fixed;
  top: 3rem;
  right: .2rem;

  li {
    color: #00bcd4;
    line-height: .37rem;
  }
}
.active-letter {
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  left: -2rem;
  border-radius: 50%;
  background-color: rgba(153, 153, 153, .6);
  font-size: .6rem;
  color: #fff;
  text-align: center;
  line-height: 1.3rem;
}
</style>