<template>
  <div id="app" ref="app" class="swiper-container">
    <div class="ys-container">
      <div class="video">
       <video id="videoSource" controls="controls" ref="video" autoplay="autoplay" preload="auto">
        <!-- <source :src="url" type="video/mp4"> -->
      </video>
      </div>
      <div class="right-container">
         <div class="tree xt_m1">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m2">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m3">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/百年康润.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/王英杰.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m4">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/健一生.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/高振海.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/正和祥.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/袁文忠.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m5">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/华辰.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/李娟娟.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m6">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m7">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m8">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m9">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m10">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
        <div class="tree xt_m11">
          <div class="xt">
            <div class="left">
              <img src="./../static/images/五洲大药房.png" alt="">
            </div>
            <div class="right">
              <img src="./../static/images/周康生.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <scale v-if="isShow" :scaleleft="left" :scaletop="top" :isGo="isGo" :scaleNum="scaleNum" :img="img" @ishide="_isShow "></scale>
  </div>
</template>

<script>
import $ from 'jquery'
import Scale from './components/Scale'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
// import MTween from './../static/js/mTween'
export default {
  name: 'App',
  data () {
    return {
      isShow: false,
      img: '',
      left: 0,
      top: 0,
      scaleNum: 1,
      isGo: true,
      isspeak: [],
      swiper: null,
      isTab: false,
      isDown: true,
      url: 'https://vd1.bdstatic.com/mda-hegzw868ep72e2x5/sc/mda-hegzw868ep72e2x5.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D&auth_key=1559619053-0-0-62624d23bdfc4779d4a215a35b8b3c7c&bcevod_channel=searchbox_feed&pd=bjh&abtest=all'
    }
  },
  mounted() {
    let _this = this
    
    document.onkeydown=function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
      if(e && e.keyCode==9){ // 按 tab
        _this.fullScreen()
      }
      switch (e.keyCode) {
        case 32: 
          _this.goOut()
          break;
        case 81: // Q
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m10", 0)
          break;
        case 87: // K
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m6", 0)
          break;
        case 69: // E
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m4", 0)
          break;
        case 82: // R
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m2", 0)
          break;   
        case 84: // T
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m1", 0)
          break;   
        case 89: // Y
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m1", 1)
          break;   
        case 85: // U
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m2", 1)
          break; 
        case 73: // I
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m4", 1)
          break;  
        case 79: // O
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m6", 1)
          break; 
        case 80: // P
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m10", 1)
          break;
        case 65: // A
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m9", 0)
          break;
        case 83: // S
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m5", 0)
          break;
        case 68: // D
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m3", 0)
          break;
        case 70: // F
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m3", 1)
          break;
        case 71: // G
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m5", 1)
          break;
        case 72: // H
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m9", 1)
          break;
        case 74: // J
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m8", 0)
          break;
        case 75: // K
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m7", 0)
          break;
        case 76: // L
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m8", 1)
          break;
        case 90: // L
          // getStr(".xt_m7", _click, 0)
          _this.getStr (".xt_m11", 0)
          break;
        case 39: // you
          // getStr(".xt_m7", _click, 0)
          _this.goRight()
          break;
        case 37: // zuo
          // getStr(".xt_m7", _click, 0)
          _this.goLeft()
          break;
      }
    }
    this.$refs.video.src = this.url
    let myvideo = document.querySelector('.video video')
    setTimeout(() => {
      myvideo.play()
    }, 100)
    
  },
  methods: {
    fullScreen(){
      var el = document.documentElement;
      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
      if(typeof rfs != "undefined" && rfs) {
          rfs.call(el);
      };
      return;
    },
    exitScreen(){
      if (document.exitFullscreen) {  
          document.exitFullscreen();  
      }  
      else if (document.mozCancelFullScreen) {  
          document.mozCancelFullScreen();  
      }  
      else if (document.webkitCancelFullScreen) {  
          document.webkitCancelFullScreen();  
      }  
      else if (document.msExitFullscreen) {  
          document.msExitFullscreen();  
      } 
      if(typeof cfs != "undefined" && cfs) {
          cfs.call(el);
      }
    },
    getStr (el, num) {
      let _this = this
      
      if (this.isGo && !this.isShow) {
        if (this.isDown) {
          this.isDown =false
          let ele = $(el).children()[num]
          this.left = $(ele).offset().left
          this.top = $(ele).offset().top
          this.img = ele.querySelector('.right img').src
          let speak = this.isspeak.indexOf(el + num)
          if (speak === -1) {
            this.scaleNum = 4
            css(ele, "rotateY", 0)
            // _this.isShow = true
            mTween({
              el: ele,
              attr: {
                  rotateY: 180
              },
              time: 1000,
              cb: () => {
                this._isShow()
                this.isDown = true
                this.isspeak.push(el + num)
              }
            })
          } else {
            this._isShow()
          }
        }
        
        
      } 
    },
    _isShow () {
      this.isShow = !this.isShow
      if (!this.isShow) {
        this.isGo = true
      }
    },
    goOut() {
      if (this.isShow) {
        this.isGo = false
      }
    },
    goRight () {
      if (!this.isTab) {
        this.isTab = true
        $('.ys-container').animate({
          "left": '-19.2rem'
        })
        // let video = $('.video video')[0]
       let myvideo = document.querySelector('.video video')
        myvideo.pause()
        myvideo.currentTime = 0
        }
    },
    goLeft () {
      if (this.isTab) {
        this.isTab = false
        // let video = $('.video video')[0]
         let myvideo = document.querySelector('.video video')
        myvideo.play()
        
        $('.ys-container').animate({
          "left": '0'
        })
      }
    }
  },
  components: {
    Scale
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 19.2rem;
  height: 10.8rem;
  position: relative;
  overflow: hidden;
  .ys-container {
    width: 38.4rem;
    display: flex;
    position: absolute;
    // transition: 1s;
  }
  .video {
    width: 19.2rem;
    height: 10.8rem;
    background-color: red;
    video {
      width: 100vw;
      height: 100vh;
      object-fit:fill;
    }
  }
  .right-container {
    width: 19.2rem;
    height: 10.8rem;
    display: flex;
    justify-content: center;
    position: relative;
    background: url('./../static/images/bg.png') no-repeat;
    background-size: 19.2rem 10.8rem;
    // position: absolute;
    .tree {
      display: flex;
      justify-content: space-between;
      position: absolute;
      .xt {
        width: 2.2rem;
        height: 2.52rem;
        position: relative;
        padding: .23rem .2rem 0;
        background: url('./../static/images/bg11.png') no-repeat;
        background-size: 2.2rem 2.52rem;
        box-sizing: border-box;
        transform-style: preserve-3d;
        position: relative;
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
    .xt_m1 {
      width: 4.78rem;
      margin-top: .36rem;
    }
    .xt_m2 {
      width: 9.8rem;
      margin-top: .89rem;
    }
    .xt_m3 {
      width: 4.78rem;
      margin-top: 2.95rem;
    }
    .xt_m4 {
      width: 13.82rem;
      margin-top: 2.43rem;
    }
    .xt_m5 {
      width: 9.8rem;
      margin-top: 4.18rem;
    }
    .xt_m6 {
      width: 16.12rem;
      margin-top: 4.53rem;
    }
    .xt_m7 {
      width: 2.2rem;
      margin-top: 5.02rem;
    }
    .xt_m8 {
      width: 6.62rem;
      margin-top: 6.4rem;
    }
    .xt_m9 {
      width: 12.4rem;
      margin-top: 6.4rem;
    }
    .xt_m10 {
      width: 17.1rem;
      margin-top: 6.92rem;
    }
    .xt_m11 {
      width: 2.2rem;
      margin-top: 7.92rem;
    }
  } 
}
</style>
