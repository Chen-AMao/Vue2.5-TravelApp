<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont search-icon">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
        city: String
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    // 1rem = html font-size = 50px
    .header 
        display: flex
        line-height: 1.72rem
        background: $bgColor
        color: #fff
        .header-left
            width: 1.28rem
            float: left
            .back-icon
                text-align: center
                font-size: .8rem
        .header-input
            flex: 1
            height: 1.24rem
            line-height: 1.24rem
            margin-top: .24rem
            margin-left: .4rem
            padding-left: .4rem
            background: #fff
            border-radius: .1rem
            color: #ccc
            font-size: .55rem
            .search-icon
                font-size: .55rem
        .header-right
            width: 2.48rem
            float: right
            text-align: center
            font-size: .55rem
            .arrow-icon
                margin-left: -.04rem
                font-size: .48rem
</style>


