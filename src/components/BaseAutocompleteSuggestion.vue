
<template>
	<div class="content">
		<div class="header" v-html="highlightTitle"/>
		<div v-if="data.description" class="description" v-html="highlightDescription"/>
	</div>
</template>

<script> 
export default {
	props: ['search', 'data'],
	computed:{
		highlightTitle () {
			if (! this.data.title ) return ""
			return this.bold( this.data.title, this.search )
		},
		highlightDescription () {
			if (! this.data.description ) return ""
			return this.bold( this.data.description, this.search )
		}
	},
	methods: {
		bold( value, search ) {
			return value.replace(new RegExp(search, 'ig'), '<strong class="bold">$&</strong>')
		},
	}
}
</script>

<style scoped>
.bold {
	font-weight: 900;
}
</style>


