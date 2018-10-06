<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data () {
    return {
      swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
      },
      swiperList: [{
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/p/tts1/1809/10/fc831ea148d89202.jpg_r_390x260x90_113f44f9.jpg'
      }, {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/p/tts0/1605/49/67bceddcc978f4f7.jpg_r_390x260x90_d9bb7047.jpg'
      }]
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
        width: 100%
</style>

