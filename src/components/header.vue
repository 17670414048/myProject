<template>
   <div id="mz_head">
        <div class="menu" @tap="handleNavShow"><i class="iconfont icon-category"></i></div>
        <div class="title">卖座电影</div>
        <div class="city">哈尔滨 <i class="iconfont icon-pc-xia"></i></div>
        <div class="user"><i class="iconfont icon-mine"></i></div>
    </div>
</template>

<script>
export default {
  name: 'mz-header',
  data(){
    return {};
  },
  methods : {
    handleNavShow(){
        this.$store.commit({ type : 'CHANGE_NAV_SHOW' , payload : !this.$store.state.isNavShow });
    }
  }
}
</script>

<style>
#mz_head{ width:100%; height:50px; background:#282828; position: fixed; left: 0; top: 0; display: flex; line-height: 50px; color:#999999; text-align: center; z-index:10;}
#mz_head .menu{ width: 50px; height: 50px; border-right: #333333 solid 1px; }
#mz_head .menu i{ font-size:26px; }
#mz_head .title{ flex:1; color:white; padding-left: 15px; text-align: left;}
#mz_head .city{ width:80px; }
#mz_head .user{ width:50px; }
</style>