<template>
  <div class="wrap">
    <div class="head">
        <img src="../../../static/images/logo.png" alt="logo">
        <div class="search">
          <navigator
            url="/pages/search/main"
            open-type="navigate">
            <i class="icon iconfont icon-sousuo"></i>
            <span>搜索关键字</span>   
          </navigator>
        </div>
        <i class="icon iconfont icon-wode"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'top-com',
  data () {
    return {
      
    }
  },
  created(){
    
  }
}
</script>

<style scoped lang="scss" type="text/css">
  .wrap{
      height: 1rem;
      position: fixed;
      top:0;
      left:0;
      right:0;
      z-index: 999;
      background: #f2f2f2;
      .head{
          height: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding:5px;
          img{
              width: .68rem;
              height: .5rem;
              margin:0 .2rem;
          }
          .search{
            padding:0 .1rem;
            height: .6rem;
            line-height: .6rem;
            border: 1px solid #e5e5e5;
            text-align: left;
            width: 100%;
            color: rgba(0,0,0,.3);
            background-color: #fff;
            border-radius: .04rem;
            font-size:.31rem;
            a{
              display: block;
              width:100%;
              color:#666;
            }
            .icon{
              display: inline-block;
              font-size:.4rem;
              margin:0 .2rem;
              color:#cccc;
            }
          }
          i{
            font-size:.5rem;
            margin:0 .2rem;
            color:#666;
          }
      }
  }
</style>

