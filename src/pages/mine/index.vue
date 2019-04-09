<template>
  <div class="mine">
    <div class="top">
      <img src="http://temp.im/50x50/ff5a5f/fff" alt="">
      <p><button open-data="getUserInfo"  @getuserinfo="getUserInfo">登录</button> / 注册</p>
    </div>
    <div class="navli">
      <p>我的订单</p>
      <navigator
        url="/pages/index/main"
        open-type="switchTab">
        <i class="icon iconfont icon-zuojiantou"></i>
      </navigator>
    </div>
    <ul class="wrap">
      <li>
        <i class="icon iconfont icon-daifukuan"></i>
        <p>待付款</p>
      </li>
      <li>
        <i class="icon iconfont icon-daishouhuo"></i>
        <p>待收货</p>
      </li>
      <li>
        <i class="icon iconfont icon-weixiu"></i>
        <p>退换修</p>
      </li>
    </ul>
    <div class="navli">
      <p>会员中心</p>
      <navigator
        url="/pages/index/main"
        open-type="switchTab">
        <i class="icon iconfont icon-zuojiantou"></i>
      </navigator>
    </div>
    <div class="navli">
      <p>我的优惠</p>
      <navigator
        url="/pages/index/main"
        open-type="switchTab">
        <i class="icon iconfont icon-zuojiantou"></i>
      </navigator>
    </div>
    <div class="navli">
      <p>服务中心</p>
      <navigator
        url="/pages/index/main"
        open-type="switchTab">
        <i class="icon iconfont icon-zuojiantou"></i>
      </navigator>
    </div>
    <div class="navli">
      <p>设置</p>
      <navigator
        url="/pages/index/main"
        open-type="switchTab">
        <i class="icon iconfont icon-zuojiantou"></i>
      </navigator>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted(){
    //是否授权
    this.getSetting();
  },
  onLaunch(){
    wx.getUserInfo({
      success(res){
        console.log("getuserinfo")
        console.log(res)
      }
    })   
  },
  methods:{
    getUserInfo(e) {
      console.log("e.detail.userInfo")
       // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData){
        //用户按了允许授权按钮
        console.log('用户按了允许授权按钮')
      } else {
        //用户按了拒绝按钮
        console.log('用户按了拒绝按钮')
      }
      console.log(e.detail.userInfo)
    },
    //是否授权
    getSetting(){
      wx.getSetting({
        success(res){
          console.log(res)
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success(res) {
                console.log(res.userInfo)
                //用户已经授权过
                console.log('用户已经授权过')
              }
            })
          }else{
            console.log('用户还未授权过')
            wx.authorize({
              scope: 'scope.userInfo',
              success() {
                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                wx.startRecord()
              }
            })
          }
        }
      })
    },
    getInfo(){
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      if(wx.canIUse('button.open-type.getUserInfo')){
        // 用户版本可用
      }else{
        console.log('请升级微信版本')
      }
    }

   
    // login(){
    //   wx.login({
    //     success(res){
    //       console.log("login")
    //       console.log(res)
    //     }
    //   })
    // }
  }
}
</script>

<style scoped lang="scss" type="text/css">
  .top{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #f07c10;
    padding:.3rem .4rem;
    img{
      border-radius: 50%;
      width:1rem;
      height:1rem;
    }
    p{
      font-size:.26rem;
      color:#fff;
      margin-left:.2rem;
    }
  }
  .navli{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .4rem 0;
    padding:0 .2rem;
    color:#999;
    .icon{
      transform: rotate(180deg);
    }
  }
  .wrap{
    padding:.3rem 0;
    display:flex;
    justify-content:space-around;
    align-items: center;
    .icon{
      color:#888;
      font-size:.4rem;
    }
    p{
      text-align: center;
      font-size:.28rem;
      margin:.08rem 0;
    }
  }
</style>

