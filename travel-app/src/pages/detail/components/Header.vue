<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed"
            v-show="!showAbs"
            :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
           showAbs: true,
           opacityStyle: {
               opacity: 0
           }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll: function () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
   .header-abs
        position: absolute
        left: .4rem
        top: .4rem
        width: 1.4rem
        height: 1.4rem
        border-radius: .7rem
        height: 1.6rem
        line-height: 1.6rem
        background: rgba(0, 0, 0, .8)
        .header-abs-back
            color: #fff
            font-size: .8rem
            padding-left: .25rem
    .header-fixed
        position: fixed
        top: 0
        left: 0
        right: 0
        height: 2.06rem
        line-height: 2.06rem
        text-align: center
        color: #fff
        background: $bgColor
        font-size: 0.92rem
        .header-fixed-back
            position: absolute
            top: 0
            left: 0
            width: 1.44rem
            text-align: center
            font-size: 1rem
            color: #fff
</style>


