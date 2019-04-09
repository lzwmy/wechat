<template>
    <div class="wrap">
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
    </div>
</template>

<script>
export default {
  name:'swiper-com',
  props: {
    images: {
      type: Array
    }
  },
  created(){
    
  }
}
</script>

<style scoped lang="scss" type="text/css">
    .wrap{
        position: relative;
        margin-top:1rem;
        height: 4.2rem;
    }
    .swiper {
        height:100%;
    }
    .slide-image{
        width:100%;
        height: 100%;
    }
</style>



