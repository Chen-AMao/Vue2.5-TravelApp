<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header
        position: relative
        overflow: hidden
        height: 2.06rem
        line-height: 2.06rem
        text-align: center
        color: #fff
        background: $bgColor
        font-size: 0.92rem
        .header-back
            position: absolute
            top: 0
            left: 0
            width: 1.44rem
            text-align: center
            font-size: 1rem
            color: #fff
</style>


