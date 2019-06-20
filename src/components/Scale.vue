<template>
  <div class="scale">
    <div class="xt-scale" :style="{ left: scaleleft + 'px', top: scaletop + 'px', scale: scaleNum}">
      <div class="left">
        <img :src="img" alt="">
      </div>
      <div class="right">
        <img src="./../../static/images/周康生.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  props: {
    scaleleft: {
      type: Number,
      default: 0,
    },
    scaletop: {
      type: Number,
      default: 0,
    },
    scaleNum: {
      type: Number,
      default: 1,
    },
    isGo: {
      type: Boolean,
      default: true,
    },
    img: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isOn : true
    }
  },
  mounted () {
    localStorage.setItem('img', this.img)
    let w = $(window).width() / 2 - $('.scale .xt-scale').width() / 2
    let h = $(window).height() / 2 - $('.scale .xt-scale').height() / 2
    if (this.isGo) {
      let el = document.querySelector(".xt-scale")
      $('.xt-scale').css({
        "left": w + 'px',
        "top": h + 'px',
        "transform": "scale(4)"
      })
    }
  },
  watch: {
    isGo (val) {
      $('.xt-scale').css({
        "left": this.scaleleft + 'px',
        "top": this.scaletop + 'px',
        "transform": "scale(1)"
      })
      setTimeout(() => {
        this.$emit('ishide')
      },1000)
    }
  }
}
</script>
<style lang="less" scoped>
.scale {
  width: 19.2rem;
  height: 10.8rem;
  position: absolute;
  top: 0;
  left: 0;
  .xt-scale {
    width: 2.2rem;
    height: 2.52rem;
    position: absolute;
    padding: .23rem .2rem 0;
    background-size: 2.2rem 2.52rem;
    box-sizing: border-box;
    transform-style: preserve-3d;
    // position: relative;
    transition: 1s;
    img {
      width: 1.8rem;
      height: 2.06rem;
    }
    .right {
      position: absolute;
      top: .23rem;
      left: .2rem;
      transform: rotateY(180deg);
    }
  }
}
</style>
