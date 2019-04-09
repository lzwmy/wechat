<template>
  <div>
    <top></top>

    <swiper :images="images"></swiper>
    
    <ul class="product">
      <li>
        <div class="item">
          <navigator
            url="/pages/details/main"
            open-type="navigate">
            <div class="img">
              <img src="../../../static/images/p1.jpg" alt="">
            </div>
            <div class="text">
              <h4>小米9尊享版</h4>
              <p>2400万旗舰自拍</p>
              <p class="price">&yen;2799起 <span>&yen;2999</span></p>
            </div>
          </navigator>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
      <li>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p1.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
      <li>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p1.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import top from '@/components/home/top';
import swiper from '@/components/home/swiper';
export default {
  data () {
    return {
      images: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
    }
  },

  components: {
    top,
    swiper
  },
  onLoad(){
    console.log("onLoad")
  },
  onShow(){
    console.log("onShow")
  },
  onReady(){
    console.log("onReady")
  },
  onHide(){
    console.log("onHide")
  },
  onShow(){
    console.log("onShow")
  },
  onUnload(){
    console.log("onUnload")
  },

  methods: {
    
  },

  created () {
    
    // let app = getApp()
    
    
}
}
</script>


<style scoped lang="scss" type="text/css">
  .product{
    height: 1000px;
    li{
      display: flex;
      justify-content:space-around;
      .item{
        flex:1;
      }
    }
    li .item:first-child{
      margin-right:.04rem;
    }
    .img{
      height: 3.7rem;
      img{
        width:100%;
        height: 100%;
      }
    }
    .text{
      padding:.2rem .27rem;
      line-height: .36rem;
      h4{
        font-size:.28rem;
        font-weight: normal;
      }
      p{
        font-size:.24rem;
        color:#ccc;
      }
      .price{
        font-size:.26rem;
        color:#ea625b;
        span{
          color:#666;
          font-size:.24rem;
          text-decoration:line-through
        }
      }
    }
  }
</style>