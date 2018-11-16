<template>
	<div>
	<!-- header -->
  <div class="header">
    <span class="iconfont icon-shouyeshouye"></span>
    <h2 class="title">演出列表</h2>
  </div>

  <!-- content -->
  <div class="list-wrapper list-wrapper-hook">
    <div>
      <!-- 顶部提示信息 -->
      <div class="top-tip">
        <span class="refresh-hook">下拉刷新</span>
      </div>
      <!-- 列表 -->
      <ul class="list-content list-content-hook">
        <li class="list-item">
          <div class="avatar">
            <img src="img/1.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
        <li class="list-item">
          <div class="avatar">
            <img src="img/2.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
        <li class="list-item">
          <div class="avatar">
            <img src="img/3.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
        <li class="list-item">
          <div class="avatar">
            <img src="img/1.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
        <li class="list-item">
          <div class="avatar">
            <img src="img/2.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
        <li class="list-item">
          <div class="avatar">
            <img src="img/3.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
        <li class="list-item">
          <div class="avatar">
            <img src="img/1.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
        <li class="list-item">
          <div class="avatar">
            <img src="img/2.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
        <li class="list-item">
          <div class="avatar">
            <img src="img/3.png" width="100" height="100" />
          </div>
          <div class="text">
            <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
            <span>2016-11-23</span>
          </div>
        </li>
      </ul>
      <!-- 
        1、底部提示信息 
        2、这里有一种情况,就是没有更多数据时,这里的文本应该显示"暂无更多数据"
      -->
      <div class="bottom-tip">
        <span class="loading-hook">查看更多</span>
      </div>
    </div>
  </div>
  <!-- content end  -->

  <!-- footer -->
  <div class="footer">
    <span class="iconfont icon-tuijian"></span>
    <span class="iconfont icon-shezhi"></span>
    <span class="iconfont icon-shoucangshixin"></span>
  </div> 

  <!-- alert -->
  <div class="alert alert-hook">刷新成功</div>
</div>
</template>
<script>
	import BScroll from "better-scroll"
	export default{
		name:'BsScroll',
		created:function(){
			this.initScroll();
		},
		data(){
			return{
				listWrapper: document.querySelector('.list-wrapper-hook'),
				listContent: document.querySelector('.list-content-hook'),
			    alert: document.querySelector('.alert-hook'),
			    topTip: document.querySelector('.refresh-hook'),
			    bottomTip: document.querySelector('.loading-hook')
			}
		},
		methods:{
            initScroll:function() {
				 this.scroll = new BScroll(this.listWrapper, {
				    probeType: 1
				  });
				  // 滑动中
				  this.scroll.on('scroll', function (position) {
				    if(position.y > 30) {
				      this.topTip.innerText = '释放立即刷新';
				    }
				  });

				 /*
				   * @ touchend:滑动结束的状态
				   * @ maxScrollY:屏幕最大滚动高度
				  */ 
				  // 滑动结束
				  this.scroll.on('touchend', function (position) {
				    if (position.y > 30) {
				      
				      setTimeout(function () {
				        /*
				         * 这里发送ajax刷新数据
				         * 刷新后,后台只返回第1页的数据,无论用户是否已经上拉加载了更多
				        */
				        // 恢复文本值
				        this.topTip.innerText = '下拉刷新';
				        // 刷新成功后的提示
				        this.refreshAlert('刷新成功');
				        // 刷新列表后,重新计算滚动区域高度
				        this.scroll.refresh();
				      }, 1000);
				    }else if(position.y < (this.maxScrollY - 30)) {
				      this.bottomTip.innerText = '加载中...';
				      setTimeout(function () {
				        // 恢复文本值 
				        this.bottomTip.innerText = '查看更多';
				        // 向列表添加数据
				        this.reloadData();
				        // 加载更多后,重新计算滚动区域高度
				        this.scroll.refresh();
				      }, 1000);
				    }
				  });

		    },

			// 加载更多方法
			reloadData:function() {
				  var template = '<li class="list-item"><div class="avatar"><img src="img/1.png" width="100" height="100" /></div>'+
				          '<div class="text"><h2>不会说谎,好青春也是谁不想要一个深情却刺激</h2><span>2016-11-23</span></div></li>'
				  // 向ul容器中添加内容
				  this.listContent.innerHTML = this.listContent.innerHTML + template;
			},

			// 刷新成功提示方法
			 refreshAlert:function(text) {
				  text = text || '操作成功';
				  this.alert.innerHtml = text;
				  this.alert.style.display = 'block';
				  setTimeout(function(){
				    rhis.alert.style.display = 'none';
				  },1000);
			},

	}

}	
</script>
<style scoped>
	*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

body{
    font-family: 'SimHei';
}

/* 字体文件 */

/*@font-face {font-family: "iconfont";
  src: url('../fonts/iconfont.eot?t=1493438234518'); /* IE9*/
 /* src: url('../fonts/iconfont.eot?t=1493438234518#iefix') format('embedded-opentype'), /* IE6-IE8 */
  /*url('../fonts/iconfont.woff?t=1493438234518') format('woff'), /* chrome, firefox */
  /*url('../fonts/iconfont.ttf?t=1493438234518') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  /*url('../fonts/iconfont.svg?t=1493438234518#iconfont') format('svg'); /* iOS 4.1- */
/*}*/
/*
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/

/*.icon-shezhi:before { content: "\3434"; }

.icon-shoucangshixin:before { content: "\e605"; }

.icon-tuijian:before { content: "\e61f"; }

.icon-shouyeshouye:before { content: "\e504"; }
*/
/* header、footer */
.header, .footer{  
    position: fixed;  
    z-index: 2;  
    left: 0; 
    display: flex; 
    width: 100%;  
}  
  
.header{
    top: 0;
    height: 55px;  
    background: #35a251;
}

.header .icon-shouyeshouye{
    position: absolute;
    left: 10px;
    flex: 0 0 40px;
    width: 40px;
    height: 55px;
    line-height: 55px;
    font-size: 33px;
    color: #fff;
} 

.header .title{
    flex: 1;
    line-height: 55px;
    color: #fff;
    text-align: center;
}   

.footer{  
    bottom: 0;
    height: 50px;  
    line-height: 50px; 
    background: #1a1a1a; 
}

.footer span{  
   flex: 1;
   font-size: 20px;
   color: #fff;
   text-align: center;
}  

/* 列表容器 */ 
.list-wrapper {
    position: relative;  
    z-index: 1;  
    top: 55px;  
    bottom: 50px;  
    left: 0;  
    width: 100%;  
    background: #ccc;  
    overflow: hidden;  
}

.list-wrapper .list-content {
    background: #fff;
}

.list-wrapper .list-item {
    display: flex;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #ddd;
}

.list-wrapper .list-item .avatar{
    flex: 0 0 100px;
    border: 1px solid #ddd;
}

.list-wrapper .list-item .text{
    position: relative;
    flex: 1;
    padding-left: 10px;
}

.list-wrapper .list-item .text h2{
    font-size: 16px;
    font-weight: normal;
    color: rgb(7, 17, 27);
}

.list-wrapper .list-item .text span{
    position: absolute;
    bottom: 20px;
    color: rgba(7, 17, 27, 0.7);
}

/* 下拉、上拉提示信息 */
.top-tip{
    position: absolute;  
    top: -40px;  
    left: 0;
    z-index: 1;  
    width: 100%;  
    height:40px;  
    line-height:40px;  
    text-align:center;
    color: #555;
} 
  
.bottom-tip{
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #777;
    background: #f2f2f2;
}

/* 全局提示信息 */
.alert{
    display: none;
    position: fixed;
    top: 55px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    background: rgba(7, 17, 27, 0.7);
}
</style>