<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音" >
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .search
        height: 1.72rem
        padding: .2rem .5rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: 1.62rem
            padding: 0 .5rem
            line-height: 1.62rem
            text-align: center
            border-radius: .06rem
            color: #666
            font-size: .72rem
</style>


