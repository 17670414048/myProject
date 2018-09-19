<template>
  <div id="mz_movie">
		<ul>
			<li v-for="item in movieList" @tap="handleChange(item.id)">
				<img :src="item.cover">
				<div class="info">
					<div class="title">
						<p>{{item.name}}</p>
						<p>{{item.cinemaCount}}家影院上映{{item.watchCount}}人购票</p>
					</div>
					<div class="score">{{item.grade}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'mz-movie',
  data(){
    return {
    	movieList : [{id:'0',cover:require('../../static/image/4.jpg'),name:'神秘巨星',cinemaCount:'10',watchCount:'120',grade:'6.8'},{id:'1',cover:require('../../static/image/5.jpg'),name:'无问',cinemaCount:'10',watchCount:'120',grade:'7.8'}]
    };
  },
  // mounted(){
  // 	axios.get('/v4/api/film/now-playing',{
  // 		params : {
  // 			page : 1,
  // 			count : 5
  // 		}
  // 	}).then((res)=>{
		// //console.log(res);
		// var msg = res.data.msg;
		// if(msg === 'ok'){
		// 	this.movieList = res.data.data.films;
		// }
  // 	});
  // },
  methods : {
  	handleChange(id){
		//编程式路由的操作
		this.$router.push('/detail/' + id);
  	}
  }
}
</script>

<style>
#mz_movie{ margin-top: 18px; }
#mz_movie ul{ width: 100%; padding:0 10px; box-sizing:border-box;}
#mz_movie li{ margin-bottom: 10px; }
#mz_movie img{ width: 100%; }
#mz_movie .info{ height: 50px; background:white; display: flex; }
#mz_movie .title{ flex : 1; padding-left: 10px; padding-top: 5px; }
#mz_movie .title p{ line-height: 20px; text-align: left;}
#mz_movie .score{ width: 50px; line-height: 50px; text-align: center; color:#f79177; font-size: 20px; }
</style>