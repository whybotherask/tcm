
<template>
	<div>
		<default-header/>

		<div class="ui centered container margin-before-lg narrow">
			<h1 class="ui header"> {{ fullName }} - First Visit </h1>
			<form ref="firstVisitForm" class="ui firstVisit form">

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

	      <!-- Next Visit Section -->
      	<div class="field margin-before-sm">
	      	<label class="labelstyle"> Next Visit </label>
	      	<div class="two fields">
	      		<div class="field">
				      <flat-pickr 
				      	v-model="nextvisit.date" 
				      	:config="dateConfig" 
				      	placeholder="Select date" 
				      	name="date"/> 
			      </div>
		      	<div class="field">
			        <flat-pickr 
				        v-model="nextvisit.time" 
				        :config="timeConfig" 
				        placeholder="Select time" 
				        name="time"/>
			      </div>
	        </div>
	      </div>
	    </form>

	    <!-- Submit buttons -->
	    <div class="ui divider margin-before-md"></div>
	    <div class="content margin-after-xl">
	      <div class="ui active large primary button right floated" @click="saveForm">Save Entry</div>
	      <div class="ui basic link large basic button right floated" @click="goBack">Go Back</div>
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
import flatPickr 			from 'vue-flatpickr-component'

export default {
	components: {
		"default-header"		: Header,
		"my-footer" 				: Footer,
		"formatted-input" 	: FormattedInput, 
		"flat-pickr"				: flatPickr,
	},
	data() {
		return {
			form: {
				saveTime: "",
				results_from_last_treatment: "",
				changes_in_symptom: "",
				symptom_differentiation: "",
				treatment_principle: "",
				treatment: "",
			},
			nextvisit: {
				date: Moment().format('YYYY-MM-DD'),
				time: "09:00 AM"
			},
			dateConfig: {
				altInput: true,
    		altFormat: "M j, Y",
    		dateFormat: "Y-m-d",
    		minDate: "today",
    		defaultDate: Moment().format('YYYY-MM-DD')
			},
			timeConfig: {
				enableTime: true,
   			noCalendar: true,
  			altInput: true,
  			altFormat: "h:i K",
    		dateFormat: "H:i",
    		defaultHour: 9,
    		defaultMinute: 0
			}
		}
	},
	computed: {
		patient() {
			return this.$store.getters.getNewPatient( this.$route.params.id )
		},
		fullName() {
			return this.patient.personal_info.first_name + ' ' + this.patient.personal_info.last_name
		}
	},
	created() {
		setTimeout( ()=>window.scrollTo(0,0), 10 )
	},
	methods: {
		saveForm(){
			// add the information the user's first visit
			// remove the user from the new list
			this.form.saveTime = Moment.now().toString()
			this.$store.dispatch('saveNewPatient', this.getParsedForm() )
			// delay to guarantee profile
			setTimeout( function() {
				this.$route.push({
					name: 'Patient Profile',
					params: {	id: this.$route.params.id }
				})
			}, 600)
		},
		getParsedForm() {
			return {
				id: this.$route.params.id
				visit: JSON.parse( JSON.stringify(this.form) ),
				next_appointment: moment( this.nextvisit.date + ' ' + this.nextvisit.time ).toString()
			}
		},
		discardForm(){
			for (var key in this.form) {
				this.form[key] = ''
			}
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
.labelstyle {
	font-size: 80% !important;
	text-transform: uppercase !important;
	color: grey !important;
	font-weight: bold !important;
}
</style>


