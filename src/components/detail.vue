<template>
  <div id="mz_detail">
    <div class="banner"><img :src="detailData.cover"></div>
    <div class="info">
      <h2>影片简介</h2>
      <dl>
        <dt>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
        <dd>{{detailData.director}}</dd>
      </dl>
      <dl>
        <dt>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
        <dd>{{formatActors}}</dd>
      </dl>
      <dl>
        <dt>地区语言：</dt>
        <dd>{{detailData.nation}}</dd>
      </dl>
      <dl>
        <dt>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</dt>
        <dd>{{detailData.category}}</dd>
      </dl>
      <dl>
        <dt>上映日期：</dt>
        <dd>{{formatPremiereAt}}</dd>
      </dl>
      <p>{{detailData.synopsis}}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'mz-detail',
  data(){
    return {
      list:[{id:'0',cover:require('../../static/image/4.jpg'),director:'lalllallallallallal',actors:'ndajsfhajsf;asfja',nation:'english,chiness',category:'dongzuo',premiereAt:'20181010 09:09:09',synopsis:'pppppp'},{id:'1',cover:require('../../static/image/5.jpg'),director:'lalllallallallallal',actors:'ndajsfhajsf;asfja',nation:'english,chiness',category:'dongzuo',premiereAt:'20181010 09:09:09',synopsis:'pppppp'}],
      detailData : {}
    };
  },
  created:function(){
    var id = this.$route.params.id;
    for(var i=0;i<this.list.length;i++){
        if(id==this.list[i].id){
        this.detailData = this.list[i];
      }
    }
    
  },
  // mounted(){
  //   axios.get('/v4/api/film/' + this.$route.params.id).then((res)=>{
  //       var msg = res.data.msg;
  //       if(msg === 'ok'){
  //           this.detailData = res.data.data.film;
  //       }
  //   });
  // },
  computed : {
    formatPremiereAt(){
      var date = new Date();
      if(this.detailData.premiereAt){
           date.setTime(this.detailData.premiereAt);
          return (date.getMonth() + 1) + '月' + date.getDate() + '日上映';
      }
      else{
          return '';
      }
    },
    formatActors(){
      // var result = '';
      var result = this.detailData.actors;
      // if(this.detailData.actors){
      //   this.detailData.actors.forEach((item,i)=>{
      //       if(i===0){
      //           result += item.name;
      //       }
      //       else{
      //         result += ' | ' + item.name;
      //       }
      //   });
      // }
      return result;
    }
  }
}
</script>

<style>
#mz_detail{ margin-top:50px; }
#mz_detail .banner{ width: 100%; }
#mz_detail .banner img{ width: 100%; }
#mz_detail .info{ margin-top: 16px; font-size: 12px; }
#mz_detail .info h2{ height: 24px; line-height: 24px; border-left:16px #e4c89c solid; font-size: 16px; padding-left: 4px; font-weight: 100; }
#mz_detail .info dl{ overflow: hidden; line-height: 27px; margin-top: 10px; padding:0 10px; box-sizing:border-box; display: flex; }
#mz_detail .info dt{ width:80px; }
#mz_detail .info dd{ flex:1; overflow:hidden; white-space: nowrap; text-overflow:ellipsis;}
#mz_detail .info p{ padding:0 10px; box-sizing:border-box; line-height: 20px; margin-top: 10px; }
</style>