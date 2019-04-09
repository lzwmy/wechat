<template>
  <div class="main">
    <headcom></headcom>
    
  <div class="menuWrapper">
    <div class="menu">
      <ul>
        <li v-for="(item,index) in 16" :key="index" @click="onSelectMenu(index,'a'+index)" :class="{'active':currentIndex === index}">新品{{item}}</li>
      </ul>
    </div>
  </div>

    <scroll-view :scroll-y="true" :scroll-with-animation="true" :scroll-into-view="currentId" @scroll="onScroll">
      <ul>
        <li v-for="(item,index) in 16" :key="index" class="contItem" :id="'a'+index">内容{{index}}内容内容{{index}} {{listHeight}}</li>
      </ul>
    </scroll-view>
  </div>
</template>

<script>
import headcom from '@/components/common/head';
export default {
  data () {
    return {
      listHeight:[], //存放右边每一个li的高度
      scrollTop:null, //实时滚动Y轴的值
      currentId:"a0",  //当前活动id
      topComHeight:null  //动态获取顶部的高度
    }
  },
  components:{
    headcom
  },
  computed:{
    //对listHeight遍历，返回当前左边li
    currentIndex(){
      for(let i = 0; i < this.listHeight.length; i++){
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i+1];
        //当遍历到i+1时，height2为undefind,返回对应的index，让其高亮显示
        if( !height2 || (this.scrollTop >= height1 && this.scrollTop < height2) ){
          return i;
        }
      }
      return 0;
    }
  },
  onLoad(){
    this.$store.commit("changeTitle","分类");
  },
  onReady(){
    this.calculateHeight();
  },
  methods:{
    //点击左边menu,跳到右边相应的li
    onSelectMenu(index,id){
      this.currentIndex = index;
      this.currentId = id;
    },
    //计算右边每一个li的距离顶部高度，并存放在listHeight中
    calculateHeight(){
      let query = wx.createSelectorQuery();
      let _this = this;
      let listHeight = [];
      //获取内容区每一个li元素距顶部距离
      query.selectAll('.contItem').boundingClientRect(rects=>{
        rects.forEach(function (rect) {
         listHeight.push(rect.top);
        })
      }).exec();
      this.listHeight = listHeight;
      //动态获取top高度
      query.select('.head').boundingClientRect(rect=>{
         this.topComHeight = rect.height;
         this.scrollTop = rect.height;
      }).exec();
    },
    //实时获取scroll-view滚动距离
    onScroll(ev){
      this.scrollTop = ev.mp.detail.scrollTop + this.topComHeight;
    }
  }
}
</script>

<style scoped lang="scss" type="text/css">
  ._scroll-view{
    width:100%;
    position: absolute;
    top:.8rem;
    left:1.7rem;
    bottom:0;
    overflow: hidden;
    z-index: 2;
    &::after{
      content:"";
      display: block;
      width:1px;
      background: #ccc;
      position: absolute;
      left:0;
      top:0;
      height: 100%;
      transform: scaleX(0.5);
    }
    .content{
      padding-bottom:100px;
    }
    li{
      padding:2rem .4rem;
      font-size: 14px;
      border-bottom:1px solid #ccc;
    }
  }
  .menuWrapper{
    width: 1.6rem;
    overflow: hidden;
    position: absolute;
    top:.8rem;
    left:0;
    bottom:0;
    .menu{
      width:1.7rem;
      height: 100%;
      padding:.3rem .2rem 0 0;
      overflow-x: hidden;
      overflow-y: auto;
      li{
        font-size:.28rem;
        text-align: center;
        height: .9rem;
        line-height: .9rem;
        transition: all .1s;
      }
      li.active{
        color:red;
        font-size:.32rem;
      }
    }
  }
</style>

