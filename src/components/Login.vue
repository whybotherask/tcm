
<template>
	<div class="ui middle aligned center aligned grid">
	  <div class="column">
	    <form class="ui large form">
	      <div class="ui segment tall">
	      	<h2 class="ui teal image header">
			      <img src="../assets/logo2.png" class="image">
			    </h2>
	        <div class="field">
	          <div class="ui left icon input">
	            <i class="user icon"></i>
	            <input type="text" name="email" placeholder="E-mail address">
	          </div>
	        </div>
	        <div class="field">
	          <div class="ui left icon input">
	            <i class="lock icon"></i>
	            <input type="password" name="password" placeholder="Password">
	          </div>
	        </div>
	        <div class="ui fluid large primary submit button" @click="handleSignIn">Log In</div>
    	    <div class="ui message transparent">
					  <p> Don't have an account? <a href="#">Sign Up</a> </p>
					</div>
	      </div>

	      <div class="ui error message"></div>

	    </form>
	  </div>
	</div>
</template>

<script> 
export default {
	data() {
		return {

		}
	},
	methods: {
		handleSignIn(){
			this.$router.push({ name: 'Patient List' })
		}
	}
}
</script>

<style scoped>
.tall {
	padding-top: 2rem !important;
	padding-bottom: 2rem !important;
}
.grid {
	height: 100vh;
	background: #FAFAFA;
}
.column {
	max-width: 400px;
}
.transparent {
	background-color: transparent !important;
	border: 0px solid black !important;
	box-shadow: 0 0 0 0;
}
</style>


