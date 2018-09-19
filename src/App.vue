<template>
  <div id="app">
 <mz-header></mz-header>
 <mz-nav></mz-nav>
 <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Nav from './components/nav.vue';
export default {
  name: 'App',
  components:{
    'mz-header':Header,
    'mz-nav':Nav
  },
  data(){
    return{

    }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{margin: 0;padding:0;}
html,body{
  height: 100%;font-size: 14px;background:#ebebeb;
}
li{list-style-type: none;}
img{display: block;}
</style>
