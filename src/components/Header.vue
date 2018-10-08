
<template>
	<nav class="ui fixed inverted borderless square menu">
    <div class="ui container">
	    <a class="header item" href="/home">
	    	<img class="logo margin-right-sm" src="../assets/logo2.png"/>TCM
	    </a>
	    <a class="item">
	      <form class="ui form">
					<search-autocomplete :prefill="prefill" :items="nameList" :isAsync="false"/>
	      </form>
	    </a>
	    <a class="ui item">
				<button class="ui primary button" @click="addPatient">+ New Patient</button>
	    </a>
	    <div class="right menu">
	      <a class="item">
	      	<i class="user circle icon"></i>
					Hi, Andy
				</a>
	    </div>  	
	  </div>
  </nav>
</template>

<script> 
import Search from './BaseAutocomplete.vue'
export default {
	props: ['prefill'],
	components: {
		'search-autocomplete': Search
	},
	computed: {
		nameList(){
			return this.$store.getters.getAutocompleteList
		}
	},
	methods: {
		addPatient(){
			this.$router.push({ 
        name: 'Add New Patient', 
        params: {} 
      })
		}
	},
	create() {},
}
</script>

<style scoped>
.ui.menu .item img.logo {
	margin-right: 1rem;
	padding-left: 0;
}
.square {
	border-radius: 0px !important
}
.wide {
	width: 40vw !important;
}
.ui.search > .autosuggestions {
	/*display: none;*/
  position: absolute;
  top: 100%;
  left: 0;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  white-space: normal;
  background: #fff;
  margin-top: .5em;
  width: 100%;
  border-radius: .28571429rem;
  box-shadow: 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15);
  border: 1px solid #d4d4d5;
  z-index: 998;
}
.visible {
	display: block;
}
.autosuggest {
	cursor: pointer;
  display: block;
  overflow: hidden;
  font-size: 1em;
  padding: .85714286em 1.14285714em;
  color: rgba(0,0,0,.87) !important;
  line-height: 1.33;
  border-bottom: 1px solid rgba(34,36,38,.1);
}
.autosuggest:hover {
	background-color: rgba(0,0,0,.1) !important;
}
.ui.inverted.menu a.item:hover, 
.ui.inverted.menu .item:hover {
  background-color: transparent !important;
}
</style>


