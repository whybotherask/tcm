
<template>
	<div>
		<default-header/>

		<div class="ui centered container margin-before-lg narrow">
			<h1 class="ui header"> {{ fullName }} - First Visit </h1>
			<form ref="firstVisitForm" class="firstVisit">

				<div class="ui divider margin-before-md"></div>
	      <formatted-input labelCopy="Chief Complaint" height="med" focused="true"/>
	      <formatted-input labelCopy="History of Present Illness" height="med"/>

				<div class="ui divider"></div>
	      <formatted-input labelCopy="General Information" height="med"/>
	      <formatted-input labelCopy="Lifestyle" height="med"/>
	      <formatted-input labelCopy="Past History and Family History" height="med"/>
	      <formatted-input labelCopy="Inspection of General Appearance" class="high"/>

				<div class="ui divider"></div>
	      <formatted-input labelCopy="Tongue" height="med"/>
	      <formatted-input labelCopy="Listening & Smelling" height="med"/>
	      <formatted-input labelCopy="Pulse" height="med"/>

				<div class="ui divider"></div>
	      <formatted-input labelCopy="Summary of Signs and Symptoms" height="med"/>
	      <formatted-input labelCopy="Diagnosis" height="med"/>
	      <formatted-input labelCopy="Syndrome Differentiation" height="med"/>
	      <formatted-input labelCopy="Treatment Principles" height="med"/>
	      <formatted-input labelCopy="Treatment" height="med"/>
	    </form>

	    <div class="ui divider margin-before-lg"></div>
	    <div class="content margin-after-xl">
	      <div class="ui active large primary button right floated" @click="saveForm">Save Entry</div>
	      <div class="ui basic link large basic button right floated" @click="$router.back()">Go Back</div>
	    </div>

		</div>

		<my-footer/>
	</div>
</template>

<script> 

import Header 				from './PatientProfileHeader'
import Footer 				from './Footer'
import FormattedInput from './BaseFormattedInput'
import Moment 				from 'moment'

export default {
	components: {
		"default-header"		: Header,
		"my-footer" 				: Footer,
		"formatted-input" 	: FormattedInput, 
	},
	data() {
		return {

		}
	},
	created() {
		setTimeout( ()=>window.scrollTo(0,0), 10 )
	},
	computed: {
		patient() {
			return this.$store.getters.getNewPatient( this.$route.params.id )
		},
		fullName() {
			return this.patient.personal_info.first_name + ' ' + this.patient.personal_info.last_name
		}
	},
	methods: {
		saveForm(){

		},
		goBack(){
			this.$router.back()
		}
	}
}
</script>

<style scoped>

.margin-before-lg {		margin-top: 8rem !important; 	}
.margin-before-md {		margin-top: 4rem;			}
.margin-before-sm {		margin-top: 2rem;			}
.margin-after-xl {		margin-bottom: 16rem;	}
.margin-after-sm {		margin-bottom: 2rem;	}

.narrow {
	max-width: 800px !important;
}
.high .textarea {
	height: 500px;
}
</style>


