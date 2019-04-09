<template>
<div>
    <headcom></headcom>
    <div class="proDetail">
        <swiper
            :indicator-dots="true"
            :autoplay="true"
            :interval="5000"
            :duration="1000">
            <div v-for="(item, index) in images" :key="index">
                <swiper-item>
                    <image :src="item" class="slide-image"/>
                </swiper-item>
            </div>
        </swiper>

        <div class="content">
            <div class="text">
                <h3>小米9 尊享版</h3>
                <p>全球首款压感屏幕指纹，快速解锁 / 骁龙845处理器，全面提升游戏性能表现 / 四曲面渐变镜面机身，轻薄圆润 / 960帧超慢动作 / 手持超级夜景</p>
                <p class="price">&yen;2799起 <span>&yen;2999</span></p>
            </div>
            <div class="detail">
                <ul>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                    <li>
                        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                        <p>超大屏</p>
                        <p>6.21英寸</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="addCart">
            <div class="wrap">
                <router-link to="/" class="to-link">
                    <i class="icon iconfont icon-weibiao45100847"></i>
                    <span>首页</span>
                </router-link>
                <router-link to="/cart" class="to-link">
                <div class="cartIcon">
                    <span>{{number}}</span>
                    <i class="icon iconfont icon-gouwuche"></i>
                </div>
                    <span>购物车</span>
                </router-link>
            </div>
            <span class="btn-add" @click="onCartPop">加入购物车</span>    
        </div>

        <CartPop :pop="pop"></CartPop> 
    </div>
</div>
</template>

<script>
import headcom from '@/components/common/head';
import CartPop from '@/components/details/cartPop';
export default {
  data () {
    return {
        images: [
            'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
            'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ],
        showPop:false,
        pop:false
    }
  },
  components:{
      headcom,
      CartPop
  },
  methods:{
    onCartPop(){
        //传ture让底部弹框显示，400ms后传入false（用于watch监听）
        this.pop = true;
        setTimeout(()=>{
            this.pop = false;
        },400)
    }
  },
  created(){
    
  },
}
</script>

<style scoped lang="scss" type="text/css">
.proDetail{
    width: 100%;
    height: 1000px;
    position: absolute;
    top:.8rem;
    left:0;
}
.content{
    padding:.2rem;
}
.swiper{
    height: 8.24rem;
}
 .text{
     h3{
         font-size:.4rem;
         font-weight: normal;
     }
     p{
         font-size:.26rem;
         color:rgb(117, 116, 116);
     }
     .price{
        margin:.2rem 0;
        font-size:.38rem;
        color:#ea625b;
        span{
          color:#666;
          font-size:.26rem;
          text-decoration:line-through
        }
      }
 }
 .detail{
     overflow: hidden;
    ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        font-size:.28rem;
        text-align: center;
        overflow-x: auto;
        padding:0 0 .2rem;
        li{
            padding:0 .08rem;
            min-width: 1.6rem;
            position: relative;
            &:before{
                content:"";
                position:absolute;
                top:0;
                right:0;
                width:1px;
                display: block;
                height:1.1rem;
                transform: scaleX(0.5);
                background: #ccc;
            }
            &:last-child::before{
                display: none;
            }
        }
        img{
            width:.4rem;
            height:.4rem;
            display: block;
            margin:0 auto;
        }
        p:last-child{
            font-size:.24rem;
        }
    }
 }

.fade{
    transition: all 3s;
    animation: fadeIn 3s;
    animation-fill-mode: forwards;
}
@keyframes fadeIn {
    0%{transform: translateY(100%)}
    100%{transform: translateY(0)}
}

.addCart{
    padding:0 .2rem;
    width:98%;
    position: fixed;
    bottom:.09rem;
    left:50%;
    transform: translate3d(-50%,0,0);
    height: 1rem;
    background: #fff;
    border-radius: .1rem;
    box-shadow: 0 0 .1rem #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: fadeIn 1s;
    animation-fill-mode: forwards;
    .wrap{
      font-size:.24rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .to-link{
          display: flex;
          color:#777;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-left:.4rem;
          .cartIcon{
              position: relative;
              span{
                  position: absolute;
                  top:0px;
                  right:0px;
                  display: inline-block;
                  background: #ff6700;
                  color:#fff;
                  border-radius: 50%;
                  transform: translate3d(50%,-50%,0);
                  padding:0 .04rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-style: normal;
              }
          }
      }
    }
    .btn-add{
      display: inline-block;
      height: .6rem;
      width:130px;
      border-radius: 20px;
      background: #ff6700;
      color:#fff;
      font-size:.32rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @keyframes fadeIn {
      0%{transform: translate3d(-50%,100%,0); }
      100%{transform: translate3d(-50%,0,0); }
    }
  }


</style>

