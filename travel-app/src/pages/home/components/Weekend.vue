<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list"
            :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'
    .recommend-title
        line-height: 2.0rem
        background: #eee
        text-indent: .6rem
        font-size: .78rem
    .item
        font-size: .66rem
        .item-img-wrapper
            overflow: hidden
            height: 0
            padding-bottom: 37.09%
        .item-img
            width: 100%
        .item-info
            padding: .5rem
            .item-title
                line-height: 1.08rem
                font-size: .76rem
                ellipsis()
            .item-desc
                margin-top: .16rem
                line-height: .8rem
                color: #ccc
                ellipsis()
</style>

