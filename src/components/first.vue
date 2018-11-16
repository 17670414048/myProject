<template>
    <div>
	<div class="swiper-content">
		<div class="tap">
			<ul class="swiper-slider">
	            <li class="slider on"><span class="f">视频</span></li>
	            <li class="slider"><span class="f">讨论</span><span class="number">5.9万</span></li>
	        </ul>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
            	<b-scroll></b-scroll>
            </div>
            <div class="swiper-slide">slider2<p>falfa</p></div>
          </div>
        </div>
	</div>
</div>
</template>
<script>

	import $ from 'jquery'
	import Swiper from 'swiper'
	import scroll from './bscroll.vue'
    import 'swiper/dist/css/swiper.min.css'
     export default {
        name:'sp-swiper',
        components:{
         'b-scroll':scroll
        },
        props: [],
        data(){
        	return{
        		
        		}
        },
        methods:{
        },
        mounted() {
          
            var mySwiper = new Swiper('.swiper-container', {
				 on: {
				    transitionStart: function(){
				       $('li.slider').eq(this.activeIndex).addClass('on').siblings().removeClass('on');
				    },
				  },
                loop: false,
                speed: 600,
                autoplay: false,
                // longSwipesRatio: 0.1,
                // touchRatio:1,
                 observer:true,
                observeParents:true
            });
          
            $('li.slider').click(function(){
            	  $(this).addClass('on').siblings().removeClass('on');
                mySwiper.slideTo($(this).index(), 1000)
            })
          
        }

        }
</script>
<style scoped>
        .swiper-container{
            width: 100%;
            height:100%;
            margin-top: 0.3rem;
        }
        .swiper-wrapper{
            height: 100%;
        }
        .swiper-slide{
            height: 100%;
        }
        .swiper-content{
        	background-color:#fff;
	    }
		.tap{
		    width: 100%;
		    overflow:hidden;
            position: relative;
		}
		.tap ul{

		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-box-align: middle;
		    -ms-flex-align: middle;
		    align-items: middle;
		    justify-content: space-around;
		    overflow: auto;
		}
		ul::-webkit-scrollbar { display: none; }
		.tap li{
		    text-align: center;
		    font-size: 0.38rem;
		    -ms-flex-negative: 0;
		    flex-shrink: 0;
		    padding: 0.24rem 0.2rem;
		    color: #DDD;
		    position: relative;

		}
		.tap li.on .f{
		    color: #2B0B00;
	        position: relative;
	        padding:0.3rem 0;
		}
		.tap li.on .f:after{
			content: '';
			position: absolute;
			width: 0.4rem;
			height: 0.1rem;
			left: 50%;
			bottom: 0;
			background:#EF5126;
			background-size: cover;
		}
		.router-link-active{
		    color: #fff;
		}
		.number{
			background-color: #EF5126;
			color: #fff;
			padding: 0.1rem 0.4rem;
			border-radius: 1rem;
			font-size: 0.24rem;
			margin-left: 0.3rem;
		}
</style>