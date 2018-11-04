<template>
    <ul class="list">
        <li class="item" v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                // console.log("i: "+i)
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus: false,
            startY: 0
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                const touchY = e.touches[0].clientY - 209
                const index = Math.floor((touchY - this.startY) / 48.67)
                if(index >= 0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index])
                }
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
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


