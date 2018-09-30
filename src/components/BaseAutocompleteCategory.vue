
<template>
	<div class="content">
		<div class="header" v-html="highlightTitle"/>
	</div>
</template>

<script> 
export default {
	props: ['search', 'type'],
	computed:{
		highlightTitle () {
			return `${this.type} is <strong class="bold">${this.search}</strong>`
		},
	},
}
</script>

<style scoped>
.bold {
	font-weight: 900;
}
</style>


