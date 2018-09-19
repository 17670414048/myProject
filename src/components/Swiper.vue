<template>
    <div>
        <div>
            <ul>
                <router-link to="/first" tag="li">first</router-link>
                <router-link to="/second" tag="li">second</router-link>
            </ul>
        </div>
	<div class="swiper-content">
		<div class="tap">
			<ul class="swiper-slider">
	            <li class="slider on">一年级</li>
	            <li class="slider">二年级</li>
	            <li class="slider">三年级</li>
	            <li class="slider">四年级</li>
	            <li class="slider">五年级</li>
	            <li class="slider">六年级</li>
	        </ul>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
 <!--            <div class="swiper-slide" v-for="(item,index) in group"><grad-lists :list="item.list" @go_book="go_book"></grad-lists></div> -->
            <div class="swiper-slide">slider1</div>
            <div class="swiper-slide">slider2</div>
            <div class="swiper-slide">slider3</div>
            <div class="swiper-slide">slider4</div>
            <div class="swiper-slide">slider5</div>
            <div class="swiper-slide">slider6</div>
          </div>
        </div>
	</div>
</div>
</template>
<script>
	import $ from 'jquery';
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css'
     export default {
        name:'sp-swiper',
        components:{
  
        },
        props: [],
        data(){
        	return{
        		group:[{
        		 list:[{bookName:'猜猜我多爱你',istrue:1},
        		       {bookName:'100层房子',istrue:0},
        		       {bookName:'大卫上学去',istrue:1}]
        		},{
        		 list:[{bookName:'猜猜我多爱你',istrue:1}]
        		},{
        		 list:[{bookName:'猜猜我多爱你',istrue:1},
        		       {bookName:'大卫上学去',istrue:1}]
        		},{
        		 list:[{bookName:'猜猜我多爱你',istrue:1},
        		       {bookName:'100层房子',istrue:0}]
        		},{
        		 list:[{bookName:'100层房子',istrue:0},
        		       {bookName:'大卫上学去',istrue:1}]
        		},{
        		 list:[{bookName:'大卫上学去',istrue:1}]
        		}]
        		}
        },
        methods:{
        	go_book:function(e){
                   if(e==1){
                   	confirm("正在完善中");
                   	window.location.href="";
                   }else{
                   	alert("暂无");
                   }
        	}
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
           
         /*   ul{
            	width: 100%;
            	display: inline;overflow: hidden;
            }*/
           /* li{
                background-color: greenyellow;
                float: left;
                width: 20%;
                text-align: center;
            }
            li.on{
                background-color: green;
            }*/
.tap{
    width: 100%;
    overflow:hidden;

}
.tap ul{
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
    border-bottom: 0.02rem solid #DDD;
}
ul::-webkit-scrollbar { display: none; }
.tap li{
    text-align: center;
    font-size: 0.34rem;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 0.24rem 0.2rem;
    color: #DDD;
    position: relative;

}
.tap li.on{
    color: #2B0B00;
        position: relative;
}
.tap li.on:after{
	content: '';
	position: absolute;
	width: 0.16rem;
	height: 0.08rem;
	left: 50%;
	bottom: 0;
	background:url(../assets/slider.png) top center no-repeat;
	background-size: cover;
}
.router-link-active{
    color: #fff;
}
</style>