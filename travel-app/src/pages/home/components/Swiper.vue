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
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/82/c94c9a77de17f902.jpg_750x200_a8419488.jpg'
      }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg'
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
    padding-bottom: 26.13%
    background: #eee
    .swiper-img
        width: 100%
</style>

