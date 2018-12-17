<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont search-icon">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to='/city'>
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'HomeHeader',
    props: {
        // city: String
    },
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    // 1rem = html font-size = 50px
    .header 
        display: flex
        line-height: 2.06rem
        background: $bgColor
        color: #fff
        .header-left
            width: 1.44rem
            float: left
            .back-icon
                text-align: center
                font-size: 1rem
        .header-input
            flex: 1
            height: 1.52rem
            line-height: 1.52rem
            margin-top: .27rem
            margin-left: .4rem
            padding-left: .4rem
            background: #fff
            border-radius: .1rem
            color: #ccc
            font-size: .55rem
            .search-icon
                font-size: .55rem
        .header-right
            min-width: 2.88rem
            padding: 0 .3rem
            float: right
            text-align: center
            font-size: .7rem
            color: #fff
            .arrow-icon
                margin-left: -.04rem
                font-size: .62rem
</style>


