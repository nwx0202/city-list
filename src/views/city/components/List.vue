<template>
  <div class="list">
    <div class="current-city">
      <h5 class="title">当前城市</h5>
      <div class="current-wrap">
        <button>{{currentCity}}</button>
      </div>
    </div>

    <div class="city-list" ref="wrapper">
      <div>
        <div class="city-wrap"
          v-for="(item, key) of cities"
          :key="key"
          :ref="key">
          <h5 class="title">{{key}}</h5>
          <div class="item-list"
            v-for="city in item"
            :key="city.id"
            @click="handleCityClick(city.name)">
            <div class="item">{{city.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'List',
  props: {
    cities: {
      type: Object,
      default: () => {}
    },
    letter: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter] && this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    } else {
      this.scroll.refresh();
    }
  },
  methods: {
    handleCityClick(cityName) {
      this.changeCity(cityName);
      // this.scroll.scrollToElement(this.$refs.wrapper);
    },
    ...mapActions(['changeCity'])
  },
}
</script>

<style lang="scss" scope>
.city-list {
  position: absolute;
  top: 2.3rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.current-wrap {
  padding: .16rem .2rem;

  button {
    padding: .05rem .6rem;
    border: .01rem solid #eee;
    border-radius: .08rem;
    background-color: #fff;
    color: #00bcd4;
  }
}
h5.title {
  padding-left: .2rem;
  line-height: .5rem;
  background-color: #eee;
}

.item-list {
  padding: 0 .2rem;

  .item {
    padding-left: .1rem;
    line-height: .7rem;
    border-bottom: .01rem solid #eee;
  }
}
</style>
