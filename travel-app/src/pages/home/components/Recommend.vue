<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList"
            :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
                title: '银杏湖乐园',
                desc: '银杏湖，即银杏湖生态旅游度假休闲观光区，位于南京市江宁区'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/ab/ab7da052c5c20fe3a3.water.jpg_200x200_54c0744f.jpg',
                title: '达摩古洞',
                desc: '达摩古洞位于江苏省南京幕燕滨江风貌区五马渡广场以东，是一个天然石洞，位于山腰之间的陡崖之上，岩洞深邃，曲径通幽，洞口朝着江面，可俯览长江美景'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/f4/f455d92ba582f608.water.jpg_200x200_375e5775.jpg',
                title: '南京汤山温泉',
                desc: '汤山温泉位于南京市江宁区汤山街道，是世界著名温泉疗养区，居中国四大温泉疗养区之首，是中国唯一获得欧洲、日本温泉水质国际双认证的温泉，有“千年圣汤，养生天堂”之美誉'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_200x200_9b808f51.jpg',
                title: '南京海底世界',
                desc: '南京海底世界位于南京市玄武区中山陵梅花山旁，是融科普教育、观赏娱乐为一体的大型海洋生物展示工程，由中国与新加坡合作建设，引进澳大利亚先进技术'
            }]
        }
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

