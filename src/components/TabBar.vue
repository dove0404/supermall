<template>
  <div id="s-mall-tabbar">
    <div class="s-mall-item" @click="shouyeClick"><i class="iconfont icon-shouye"></i><span>首页</span></div>
    <div class="s-mall-item" @click="gengduoClick"><i class="iconfont icon-gengduo"></i><span>分类</span></div>
    <div class="s-mall-item" @click="gouwuche1Click"><i class="iconfont icon-gouwuche1"></i><span>购物车</span></div>
    <div class="s-mall-item" @click="wode1Click"><i class="iconfont icon-wode1"></i><span>我的</span></div>
  </div>
</template>

<script>
export default {
  methods: {
    shouyeClick () {
      this.$router.push('/home')
    },
    gengduoClick () {
      this.$router.push('/category')
    },
    gouwuche1Click () {
      this.$router.push('/cart')
    },
    wode1Click () {
      this.$router.push('/wode')
    }
  }
}
</script>

<style scoped>
#s-mall-tabbar{
  display: flex;
  background-color: aquamarine;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.s-mall-item{
  flex: 1;
  text-align: center;
  /* border: 1px solid #666; */
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.s-mall-item i{
  display: block;
  font-size: 22px;
  /* background-color: blueviolet; */
}
</style>
