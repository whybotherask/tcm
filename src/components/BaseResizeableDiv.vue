
<template>
	<div id="resize" ref="el" class="box">
		<slot></slot>
	</div>
</template>

<script> 

export default {
	// data() {
	// 	return {}
	// },

	mounted() {
		var box = this.$refs['el']
		box.addEventListener( 'mousedown', (e)=>this.initializeResize(e) )
	},

	methods: {
		initializeResize( e ){
			console.log('mousedown')
			window.addEventListener( 'mousemove', (e)=>this.startResizing(e), false )
			window.addEventListener( 'mouseup', (e)=>this.stopResizing(e), false )
		},

		startResizing( e ){
			var box = this.$refs['el']
			box.style.width = ( e.clientX - box.offsetLeft ) + 'px'
			box.style.height = ( e.clientY - box.offsetTop ) + 'px'
		},

		stopResizing( e ){
			window.removeEventListener( 'mousemove', this.startResizing, false )
			window.removeEventListener( 'mouseup', this.stopReszing, false )
		}
	}
}
</script>

<style scoped>
/*.box {
	width: 40vw;
	height: 80vh;
	max-height: 80vh;
	padding: 1rem 0.5rem 0rem 0.5rem;
	box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
	border: 1px solid #fff !important;
}*/
</style>


