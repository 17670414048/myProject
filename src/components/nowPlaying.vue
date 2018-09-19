<template>
  <div class="list">
      <ul>
        <li v-for="item in nowPlayingData">
          <div class="img">
            <img :src="item.poster.thumbnail"></div>
          <div class="info">
            <p>
              <span>{{item.name}}</span>
              <span>{{item.grade}}
                <i class="iconfont icon-zan"></i>
              </span>
            </p>
            <p>{{item.intro}}</p>
            <p>
              <span>{{item.cinemaCount}}家影院上映</span>
              <span>{{item.watchCount}}人购票</span>
            </p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'now-playing',
  data(){
    return {
      nowPlayingData : [{poster:{thumbnail:require('../../static/image/6.jpg')},name:'神秘巨星',grade:'5.6',intro:'djawdhqwqwk',cinemaCount:'10',watchCount:'120'},{poster:{thumbnail:require('../../static/image/7.jpg')},name:'无问',grade:'5.6',intro:'djawdhqwqwk',cinemaCount:'10',watchCount:'120'}]
    };
  },
  created(){

  },
  // mounted(){
  //   axios.get('/v4/api/film/now-playing',{
  //     params : {
  //       page : 1,
  //       count : 7 
  //     }
  //   }).then((res)=>{
  //       //console.log(res);
  //       var msg = res.data.msg;
  //       if(msg === 'ok'){
  //           this.nowPlayingData = res.data.data.films;
  //       }
  //   });
  // }
}
</script>

<style>
</style>