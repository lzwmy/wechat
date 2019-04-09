<template>
  <div class="head flex-between">
    <i slot="right" class="icon iconfont icon-zuojiantou" @click="onBack"></i>
    <span>{{title}}</span>
    <navigator
      url="/pages/search/main"
      open-type="navigate">
      <i slot="right" class="icon iconfont icon-sousuo"></i>
    </navigator>
  </div>
</template>

<script>
// import store from '../../store/index';
export default {
    name:"head-com",
    data () {
        return{
          title:"null"
        }
    },
    watch:{
      $route(){
        this.title = this.$route.meta.title;
      }
    },
    methods:{
        onBack(event){
          wx.navigateBack({delta: 1})
        }
    },
    beforeMount(){
        this.title = this.$store.state.title;
        
    }
}
</script>

<style scoped lang="scss" type="text/css">
  .head{
    background: #f2f2f2;
    color:#333;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: .8rem;
    z-index: 999;
    i{
      font-size:.4rem;
      margin:0 10px;
    }
  }
</style>

