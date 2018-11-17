
<template>
	<div>
		<default-header/>

		<div class="ui centered container margin-before-lg narrow">
			<h1 class="ui header"> {{ fullName }} - First Visit </h1>
			<form ref="firstVisitForm" class="ui firstVisit form">

				<div class="ui divider margin-before-md"></div>
	      <formatted-input labelCopy="Chief Complaint" height="med" focused="true" v-model="form.chief_complaint"/>
	      <formatted-input labelCopy="History of Present Illness" height="med" v-model="form.history_of_present_illness"/>

				<div class="ui divider"></div>
	      <formatted-input labelCopy="General Information" height="med" v-model="form.general_information"/>
	      <formatted-input labelCopy="Lifestyle" height="med" v-model="form.lifestyle"/>
	      <formatted-input labelCopy="Past History and Family History" height="med" v-model="form.past_history"/>
	      <formatted-input labelCopy="General Appearance" class="high" v-model="form.general_appearance"/>

				<div class="ui divider"></div>
	      <formatted-input labelCopy="Tongue" height="med" v-model="form.tongue"/>
	      <formatted-input labelCopy="Listening & Smelling" height="med" v-model="form.listening_and_smell"/>
	      <formatted-input labelCopy="Pulse Left" height="med" v-model="form.pulse_left"/>
	      <formatted-input labelCopy="Pulse Right" height="med" v-model="form.pulse_right"/>

				<div class="ui divider"></div>
	      <formatted-input labelCopy="Summary of Signs and Symptoms" height="med" v-model="form.summary_of_signs_and_symptoms"/>
	      <formatted-input labelCopy="Diagnosis" height="med" v-model="form.diagnosis"/>
	      <formatted-input labelCopy="Syndrome Differentiation" height="med" v-model="form.syndrome_differentiation"/>
	      <formatted-input labelCopy="Treatment" height="med" v-model="form.treatment"/>

	      <!-- Next Visit Section -->
				<div class="ui divider"></div>	      
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

				chief_complaint: "",
				history_of_present_illness: "",

				general_information: "",
				lifestyle: "",
				past_history: "",
				general_appearance: "",
				
				tongue: "",
				listening_and_smell: "",
				pulse_left: "",
				pulse_right: "",
				
				summary_of_signs_and_symptoms: "",
				diagnosis: "",
				syndrome_differentiation: "",
				treatment: ""
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
			this.form.saveTime = Moment.now().toString()
			this.$store.dispatch('saveNewPatient', this.getParsedForm() )
			// delay to guarantee profile
			var self = this
			setTimeout( ()=>{
				self.$router.push({
					name: 'Patient Profile',
					params: {	id: self.$route.params.id }
				})
			}, 600)
		},
		getParsedForm() {
			return {
				id: this.$route.params.id,
				visit: JSON.parse( JSON.stringify(this.form) ),
				next_appointment: Moment( this.nextvisit.date + ' ' + this.nextvisit.time ).toString()
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


