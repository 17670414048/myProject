<template>
	<transition name="slide">
	  	<div id="mz_menu" v-if="isNavShow" @tap="handleNavHide">
			<ul>
				<router-link to="/home" tag="li">首页<i class="iconfont icon-xiaojiantou"></i></router-link>
				<router-link to="/film" tag="li">影片<i class="iconfont icon-xiaojiantou"></i></router-link>
				<router-link to="/home" tag="li">影院<i class="iconfont icon-xiaojiantou"></i></router-link>
				<router-link to="/home" tag="li">商城<i class="iconfont icon-xiaojiantou"></i></router-link>
				<router-link to="/home" tag="li">我的<i class="iconfont icon-xiaojiantou"></i></router-link>
				<router-link to="/home" tag="li">卖座卡<i class="iconfont icon-xiaojiantou"></i></router-link>
			</ul>
		</div>
	</transition>
</template>

<script>
export default {
  name: 'mz-nav',
  data(){
    return {};
  },
  computed : {
  	isNavShow(){
		return this.$store.state.isNavShow;
  	}
  },
  methods : {
  	handleNavHide(){
  		this.$store.commit({ type : 'CHANGE_NAV_SHOW' , payload : false });
  	}
  }
}
</script>

<style>
#mz_menu{ width: 265px; height: 100%; background: #282828; color:#999999; position: fixed; left: 0; top:50px; z-index:10;}
#mz_menu ul{}
#mz_menu li{ line-height: 50px; height: 50px; border-bottom: 1px dashed #333333; padding-left: 10px;text-align: left;}
#mz_menu li i{ float:right; padding-right: 10px; }
#mz_banner{ margin-top: 50px; width: 100%; overflow:hidden; }
#mz_banner img{ width: 100%; }
.slide-enter-active{
	animation : .5s linear movenav;
}
.slide-leave-active{
	animation : .5s linear movenav reverse;
}	
@keyframes movenav{
	0%{
		opacity : 0;
		transform : translateX(-100%);
	}
	100%{
		opacity : 1;
		transform : translateX(0);
	}
}
</style>