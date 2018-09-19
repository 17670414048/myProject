<template>
  <div id="mz_banner" class="swiper-container">
		<ul class="swiper-wrapper">
			<li class="swiper-slide" v-for="item in bannerData"><img :src="item.imageUrl"></li>

		</ul>
	 <div class="swiper-pagination" slot="pagination"></div>   
	</div>
</template>

<script>
import axios from 'axios';
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'mz-banner',
  data(){
    return {
    	bannerData : [{imageUrl:require('../../static/image/1.jpg')},{imageUrl:require('../../static/image/2.jpg')},{imageUrl:require('../../static/image/3.jpg')},{imageUrl:require('../../static/image/4.jpg')},{imageUrl:require('../../static/image/5.jpg')}]
    };
  },
  mounted(){
	 // axios.get('/v4/api/billboard/home').then((res)=>{
		
		// //console.log(res);
		// var msg = res.data.msg;
		// if(msg === 'ok'){
		// 	this.bannerData = res.data.data.billboards;
		// 	this.$nextTick()
		// 	  .then(()=>{
		// 	    // DOM 更新了
				
		// 		var $mz_banner = $('#mz_banner');
		// 		new Swiper($mz_banner,{
		// 			loop : true
		// 		});
		// 	  })
			
		// }
	 // });
	 var swiper = new Swiper('.swiper-container', {
                pagination:'.swiper-pagination',
                paginationType:'bullets',
                paginationElement:'span',
                paginationClickable: true,
                loop: true,
                speed: 800,
                autoplay: true,
                longSwipesRatio: 0.1,
                touchRatio:1,
                // preventClicks: false,
                // preventLinksPropagation:true,
                autoplayDisableOnInteraction : false,
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
                onTouchEnd: function() {
                     swiper.startAutoplay();
                },

        })
  }
}
</script>

<style>
#mz_banner{ margin-top: 50px; width: 100%; overflow:hidden; }
#mz_banner img{ width: 100%; }
</style>