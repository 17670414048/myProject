<template>
	<div class="list">
	<div class="comment-list">
		<img :src="comment.img_url" class="tx">
		<div class="pinglun">
		<div class="comment-btns">
		<div class="com-content">
			<h5>{{comment.name}}</h5>
			<P><span>2018年7月11日</span></P>
		</div>
		<div class="comment-btn" @click="clickZan()"><span>112</span><img :src="zan?require('./../assets/zan1.png'):require('./../assets/zan.png')"></div>
		</div>
		<p class="content ellip-3">{{comment.content}}</p>
		<div class="other">
			<p class="com ellipsis"><span class="teacher-name">李老师</span>:是的，非常不错</p>
			<p class="com ellipsis"><span class="teacher-name">李老师</span>:是的，非常不错,是的，非常不错,是的，非常不错,是的，非常不错</p>
			<p class="all-btn">查看全部12条回复></p>
		</div>
	</div>

</div>
	<!-- <div class="comment-btns">
		<div class="comment-btn"><img src="./../assets/newImg/ping.png">评论</div>
		<div class="comment-btn" @click="clickZan()"><img :src="zan?require('./../assets/newImg/zan1.png'):require('./../assets/newImg/zan.png')">点赞</div>
	</div> -->
	<!-- <div class="line"></div> -->
</div>
</template>
<script>
	export default{
		name:'comment',
		props:['comment'],
		created:function(){
			this.zan=this.comment.zan;
		},
		data(){
            return{
            	zan:false
            }
		},
		methods:{
			clickZan:function(){
				this.zan = !this.zan;
			}
		},
	}
</script>
<style scoped>

.time{font-size: 0.24rem;}
.all-btn{
	line-height: 0.45rem;
	font-size: 0.28rem;
	color:#847A77;
}
.all-btn img{
	width: 0.14rem; 
	height: 0.24rem;
	margin-top: 0.1rem;
	 margin-left:0.15rem;
}
.com,#show-comment .com{
	color: #2B0B00;
	width: 5.04rem;
	line-height: 0.4rem;
	font-size: 0.28rem;
	    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.teacher-name,#show-comment .teacher-name{
	color: #000;
	font-weight: bold;
}
.other{
	background-color: #F0EFF4;
	padding:0.16rem 0.24rem;
	border-radius: 0.1rem;
	margin: 0.2rem auto 0.1rem;
}

.other .hide{
	display: none;
}

.other .show{
	display: block;
}

.pinglun{
	margin-bottom: 0.2rem;
}
.comment-btn{
	color: #847A77;
	font-size: 0.24rem;
	line-height: 0.38rem;
	height: 0.4rem;
	padding-top: 0.2rem;
	padding-right: 0.1rem;
}
.comment-btn img{
	width: 0.4rem;height: 0.35rem;
	margin-left: 0.15rem;
}
.contents{
	width: 5.5rem;
	line-height: 0.4rem;
	font-size: 0.28rem;
	    -webkit-line-clamp: 3;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
.comment-list{
	display: flex;
	justify-content: flex-start;
	margin: 0.2rem auto;
}	
.comment-btns{
	display: flex;
	justify-content: space-between;
	margin: 0rem auto;
}
.comment-list .tx{
	width: 0.8rem;
	height: 0.8rem;
	margin: 0 0.2rem 0 0;
}
.com-content{margin: 0 0 0.1rem;text-align: left;}
.com-content h5{font-size: 0.28rem;color: #2B0B00;line-height: 0.4rem;}
.com-content p{line-height: 0.5rem;color: #847A77;font-size: 0.24rem;}
.ellip-3{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
	.line {width: 6.54rem; height:1px;background-color: #D8D8D8;margin:0.2rem auto 0;}
</style>