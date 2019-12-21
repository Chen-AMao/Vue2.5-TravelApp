<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe604;</span>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallery
                :imgs="bannerImgs"
                v-show="showGallery"
                @close="handleGalleryClose">
            </common-gallery>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallery from '../../../common/gallery/Gallery.vue'
import FadeAnimation from '../../../common/fade/FadeAnimation'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data () {
        return {
            showGallery: false
        }
    },
    components: {
        CommonGallery,
        FadeAnimation
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


