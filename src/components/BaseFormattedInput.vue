
<template>
	<div>
	  <span class="label labelstyle" 
	  		@click="labelOnClick">
	  	{{ labelCopy }}
	  </span>
		<div ref="myTextArea" 
				class="textarea" 
	  		:class="height"
				contenteditable="true"
				@input="handleInputEvent"
				:value="inputCopy">
		</div>
	</div>
</template>

<script> 
export default {
	props: [
		'labelCopy', 
		'inputCopy', 
		'height', 
		'focused'
	],
	mounted() {
		this.addPasteListener( this.$refs.myTextArea );

		if (this.focused==='true' || this.focused == true) {
			this.$refs.myTextArea.focus()
		}
	},
	methods: {
		labelOnClick( evt ){
			this.$refs.myTextArea.focus()
		},
		handleInputEvent( evt ){
			this.$emit('input', evt.target.innerHTML )
		},
		addPasteListener( elem ){
			elem.addEventListener("paste", function( evt ){
				// remove default paste behaviours
		    evt.preventDefault();
		    // get text from clipboard; apparently breaks undo behaviour
		    var text = (event.originalEvent || event).clipboardData.getData("text/plain");
		    // insert text manually 
		    document.execCommand("insertHTML", false, text);  
			});
		}
	}
}
</script>

<style>
.labelstyle {
	font-size: 80%;
	text-transform: uppercase;
	color: grey;
	font-weight: bold;
}
.textarea {
	font-size: 1.4rem;
	line-height: 1.4;
	min-height: 0px;
	padding: 0 0 0rem 0rem;	
	padding-bottom: 3rem;
	color: black;
	/*opacity: .8;*/
}
.high {
	min-height: 100px;
}
.med {
	min-height: 80px;
}
.short {
	min-height: 40px;
}
.textarea:focus {
	outline: none;
	opacity: 1;
}
.textarea:hover {
	opacity: 1;
}
.indent-list {
	font-size: 1.4rem;
	line-height: 1.3;
	list-style-position: outside;
	-webkit-padding-start: 18px;
	-webkit-margin-before: .2rem !important;
}
</style>


