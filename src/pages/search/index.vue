<template>
  <div class="search">
        <div class="top flex-between">
            <i slot="right" class="icon iconfont icon-zuojiantou" @click="onBack"></i>
            <view class="section">
                <input type="text" placeholder="请输入关键字" auto-focus />
            </view>
            <button type="default" size="mini" plain="true" @click="onSearch">搜 索</button>
        </div>

        <p v-show="isNull">搜索结果为空</p>
        <div class="classify" v-show="isShow">
            <h3>常用分类</h3>
            <div class="wrap">
                <span>手机</span>
                <span>电视</span>
                <span>笔记本</span>
                <span>盒子</span>
                <span>路由器</span>
                <span>手机</span>
                <span>手机</span>
                <span>手机</span>
                <span>手机</span>
            </div>
        </div>     
  </div>
</template>

<script>
export default {
    name:"search-com",
    data () {
        return {
            isShow:true,
            isNull:false,
            searchVal:"",
            result:['1','2']
        }
    },
    watch:{
        searchVal(newVal,old){
            //不为空时内空隐藏
            if(newVal){
                this.isShow = false;
            }else{
                this.isShow = true;
            }
        }
    },
    onShow(){
        
    },
    methods:{
        onBack(){
            wx.navigateBack({ delta: 1})
        },
        onSearch(){
           
        },
    },
    created(){
        
    },
}
</script>

<style scoped lang="scss" type="text/css">
    .search{
        .top{
            position: relative;
            padding:0 .2rem;
        }
        .classify{
            position: absolute;
            top:1.2rem;
            left:.2rem;
            h3{
                font-size:.28rem;
            }
            .wrap{
                padding:.1rem;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                span{
                    font-size:.24rem;
                    display: inline-block;
                    min-width:.8rem;
                    height: .5rem;
                    line-height: .5rem;
                    text-align: center;
                    padding:.04rem .08rem;
                    background: #ccc;
                    margin:0 .1rem .1rem 0;
                }
            }
        }
    }
</style>

