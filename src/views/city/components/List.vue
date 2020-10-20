<template>
  <div class="list">
    <div class="current-city">
      <h5 class="title">当前城市</h5>
      <div class="current-wrap">
        <button>南京</button>
      </div>
    </div>

    <div class="city-list">
      <h5 class="title">A</h5>
      <div class="item-list">
        <div class="item">安庆</div>
        <div class="item">安徽</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="scss" scope>
.current-wrap {
  padding: .16rem .2rem;

  button {
    padding: .05rem .6rem;
    border: .01rem solid #eee;
    border-radius: .08rem;
    background-color: #fff;
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