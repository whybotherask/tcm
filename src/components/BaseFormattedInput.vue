
<template>
	<div>
	  <span class="label uppercase" 
	  		@click="labelOnClick">
	  	{{ labelCopy }}
	  </span>
		<div ref="myTextArea" 
				class="textarea" 
				contenteditable="true"
				@input="handleInputEvent"
				:value="inputCopy">
		</div>
	</div>
</template>

<script> 
export default {
	props: ['labelCopy', 'inputCopy'],
	methods: {
		labelOnClick( evt ){
			this.$refs.myTextArea.focus()
		},
		handleInputEvent( evt ){
			this.$emit('input', evt.target.innerHTML )
		}
	}
}
</script>

<style>
.uppercase {
	font-size: 80%;
	text-transform: uppercase;
	color: grey;
	font-weight: bold;
}
.textarea {
	font-size: 1.2rem;
	line-height: 1.4;
	min-height: 0px;
	padding: 0 0 0rem 0rem;	
	padding-bottom: 3rem;
	color: black;
}
.textarea:focus {
	outline: none;
}
.indent-list {
	font-size: 120%;
	line-height: 1.3;
	list-style-position: outside;
	-webkit-padding-start: 18px;
	-webkit-margin-before: .2rem !important;
}
</style>


