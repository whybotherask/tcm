
<template>
	<div class="ui segment borderless long">
	  <div class="ui active inverted dimmer">
	    <div class="ui medium text loader">Loading</div>
	  </div>
	  <p></p>
	</div>	
</template>

<script> 
	export default {}
</script>

<style scoped>
.borderless {
	border: 0px !important;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
}
.long {
	min-height: 800px;
}
</style>


