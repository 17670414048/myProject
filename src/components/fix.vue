<template>
	<div>
		<p>mz-fix</p>
		<ul>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
		<input type="text" name="comment" class="comment" id="input">
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'mz-fix',
		data(){
			return{}
		}
	}
</script>
<style scoped>
#input{
	position: fixed;
	bottom:30px;
	left: 10%;
}	
</style>