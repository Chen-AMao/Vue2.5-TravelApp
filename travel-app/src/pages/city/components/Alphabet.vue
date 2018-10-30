<template>
    <ul class="list">
        <li class="item" v-for="(item, key) of cities"
        :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    }
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
        width: 1.1rem
        font-size: .8rem
        .item
            line-height: .98rem
            text-align: center
            color: $bgColor
</style>


