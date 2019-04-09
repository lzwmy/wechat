<template>
    <div>
        <div class="cartPop" :animation="animationData">
            <div class="wrap">
                <span class="cloes icon iconfont icon-shanchuguanbiquxiaowubiankuang" @click="hideModel"></span>
                <div class="top">
                    <div class="box flex-center">
                        <img src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" alt="">
                    </div>
                    <div class="content">
                        {{pop}}
                        <p>&yen;2899</p>
                        <p class="text">小米8 8GB+128GB 蓝色</p>
                    </div>
                </div>
                <div class="spec">
                    <div class="specs">
                        <h4>型号</h4>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                    </div>
                    <div class="specs">
                        <h4>型号</h4>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                    </div>
                    <div class="specs">
                        <h4>型号</h4>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                    </div>
                    <div class="specs">
                        <h4>型号</h4>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                        <button type="default" size="mini" plain="true"> 6GB+128GB </button>
                    </div>
                    <div class="specs num">
                        <h4>购买数量</h4>
                        <div class="wrap">
                            <button type="default" size="mini" plain="true"> - </button>
                            <span>1</span>
                            <button type="default" size="mini" plain="true"> + </button>
                        </div>
                    </div>
                </div>
                <div class="foot flex-center"><h3>加入购物车</h3></div>
            </div>   
        </div>
        <div class="mask" @click="hideModel" v-show="maskStatus"></div>
    </div>
</template>

<script>
export default {
    name:"cartpop-com",
    props:{
        //监听父组件传值
        pop:{
            type:Boolean
        }
    },
    data () {
        return{
            animationData : null,
            maskStatus : true
        }
    },
    methods:{
        //隐藏弹出框
        hideModel(){
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction:"linear",
                delay:0
            })
            animation.translateY(2000).step()
            this.maskStatus = false;
            this.animationData = animation;
        },
        //显示弹出框
        showModel(){
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction:"linear",
                delay:0
            })
            animation.translateY(0).step()
            this.maskStatus = true;
            this.animationData = animation;
        }
    },
    watch:{
        pop(val){
            if(val){
                this.showModel();
            }
        }
    },
    created(){
        this.hideModel();
    } 
}
</script>

<style scoped lang="scss" type="text/css">
.mask{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 1000;
    background: rgba($color: #000000, $alpha: .5)
}
.cartPop{
    background:#fff;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding:25px 15px 5px;
    position: fixed;
    top:100px;
    left:0;
    right:0;
    bottom:0;
    z-index: 2000;
    .wrap{
        position: relative;
        width:100%;
        height:100%;
        .cloes{
            position: absolute;
            right:15px;
            top:15px;
        }
        .top{
            height: 2rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: .4rem;
            .box{
                width:2rem;
                height:2rem;
                margin-right: .3rem;
                border:1px solid #e5e5e5;
                img{
                    width:auto;
                    max-height: 100%;
                }
            }
            .content{
                p{
                    color:#ff6700;
                    font-size:.5rem;
                }
                .text{
                    color:#666;
                    font-size:.30rem;
                }
            }
        }
        .spec{
            position: absolute;
            top:2.2rem;
            left:0;
            right:0;
            bottom:.8rem;
            overflow: auto;
            .specs{
                margin-bottom: .4rem;
                padding-bottom:.2rem;
                position: relative;
                &:after{
                    content:"";
                    display: block;
                    width:100%;
                    height: 1px;
                    background: #ddd;
                    transform:scaleY(.5);
                    position: absolute;
                    bottom:0;
                    left:0;
                }
                ._button{
                    font-size: 12px;
                }
            }
            .num{
                display: flex;
                justify-content:space-between;
                align-items: center;
            }
        }
        .foot{
            height: .8rem;
            background: #ff6f0d;
            border-radius: .5rem;
            color:#fff;
            position: absolute;
            left:0;
            right:0;
            bottom:0;
        }
    }
    }
    ._bottom{
        width:100%;
        border-radius: 10px;
    }
</style>

