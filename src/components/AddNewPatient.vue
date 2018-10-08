
<template>
	<div>
		<default-header :patient="patient"/>

		<div class="ui centered container margin-before-lg narrow">
			<h1 class="ui header"> Andy Lin - First Visit </h1>
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
	computed: {
		patient() {
			return {
				id: "p1123221",
				personal_info: {
					first_name: "Andy",
					last_name: "Lin"
				}
			}
		}
	}
}
</script>

<style scoped>

.margin-before-lg {		margin-top: 8rem !important; 	}
.margin-before-md {		margin-top: 4rem;			}
.margin-before-sm {		margin-top: 2rem;			}
.margin-after-sm {		margin-bottom: 2rem;	}

.narrow {
	max-width: 800px !important;
}
.high .textarea {
	height: 500px;
}
</style>


