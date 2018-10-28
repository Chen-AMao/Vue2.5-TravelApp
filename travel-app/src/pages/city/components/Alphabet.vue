<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute 
        top: 4.06rem
        right: 0
        bottom: 0
        width: .8rem
        font-size: .8rem
        .item
            line-height: .98rem
            text-align: center
            color: $bgColor
</style>


