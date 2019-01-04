<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>          
            <router-link 
            tag="li"
            :to="'/detail/' + item.id"
            class="item border-bottom" v-for="item of list"
            :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'
    .recommend-title
        margin-top: .4rem
        line-height: 2.0rem
        background: #eee
        text-indent: .6rem
        font-size: .78rem
    .item
        overflow: hidden
        display: flex
        height: 5.2rem
        font-size: .77rem
        .item-img
            width: 4.6rem
            height: 4.6rem
            padding: .3rem
        .item-info
            flex: 1
            padding: .3rem
            min-width: 0
            .item-title
                line-height: 1.08rem
                font-size: .82rem
                ellipsis()
            .item-desc
                margin-top: .32rem
                line-height: .8rem
                color: #ccc
                ellipsis()
            .item-button
                line-height: .98rem
                margin-top: .68rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #fff
</style>

