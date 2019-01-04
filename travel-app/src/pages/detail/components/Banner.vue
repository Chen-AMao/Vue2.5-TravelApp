<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_600x330_5597540f.jpg">
            <div class="banner-info">
                <div class="banner-title">银杏湖乐园</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe604;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallery
            :imgs="imgs"
            v-show="showGallery"
            @close="handleGalleryClose">
        </common-gallery>
    </div>
</template>

<script>
import CommonGallery from '../../../common/gallery/Gallery.vue'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallery: false,
            imgs:  ['http://img1.qunarzz.com/sight/p0/1604/4a/4a8ac5bde1092d9190.water.jpg_r_800x800_2ef76fed.jpg',
                'http://img1.qunarzz.com/sight/p0/1604/4a/4a8ac5bde1092d9190.water.jpg_r_800x800_2ef76fed.jpg']
        }
    },
    components: {
        CommonGallery
    },
    methods: {
        handleBannerClick: function () {
            this.showGallery = true;
        },
        handleGalleryClose: function () {
            this.showGallery = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        color: #fff
        line-height: 1.6rem
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title
            flex: 1
            font-size: .92rem
            padding: 0 .5rem
        .banner-number
            margin-top: .1rem
            padding: 0 .8rem
            height: 1.4rem
            line-height: 1.4rem
            border-radius: .8rem
            background: rgba(0, 0, 0, 0.8)
            font-size: .82rem
            .banner-icon
                font-size: .82rem
</style>


