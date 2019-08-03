<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'
import Tab from 'cpnts/tab/tab'
import Player from 'cpnts/player/player'
export default {
  // 解决移动端不能自动播放
  data () {
    return {
      stop: false
    }
  },
  mounted () {
    let m = document.querySelector('#app')
    m.addEventListener('touchend', this.firstPlay)
  },
  methods: {
    firstPlay () {
      let music = document.querySelector('#music-audio')
      music.play()
      if (music.src !== '') {
        this.stop = true
      }
    }
  },
  watch: {
    stop () {
      let m = document.querySelector('#app')
      m.removeEventListener('touchend', this.firstPlay)
    }
  },
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style lang="scss">
@import 'common/scss/index.scss';
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>