<template>
  <div>
  	<mz-banner></mz-banner>
  	<mz-movie></mz-movie>
  </div>
</template>

<script>
import Banner from './banner.vue';
import Movie from './movie.vue';
export default {
  name: 'mz-home',
  data(){
    return {};
  },
  components : {
  	[Banner.name] : Banner,
  	[Movie.name] : Movie
  }
}
</script>

<style>
</style>