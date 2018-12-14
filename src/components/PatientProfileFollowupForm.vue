
<template>	
<!-- 	<vue-drag-resize class="ui wide bottom card" :class="{'slideDown': (collapsed != 'expanded')}" 	
		:parentLimitation="false"
		:x="800" :y="80"
		:w="600" :h="600"  
		:minw="400" :minh="400" 
		:sticks="['tl','tm','ml']" 
		:isDraggable="false" 
		> -->
	<div id="formContainer" class="ui wide bottom card resize-x" :class="{'slideDown': (collapsed != 'expanded')}">
		<div class="content" @click="expandForm">
	    <button v-show="collapsed==='expanded'"
	    				class="ui compact icon button right floated"
	    				@click="minimizeForm">
      	<i class="minus icon"></i>
      </button>
      <button v-show="collapsed!=='expanded'"
      				class="ui compact icon button right floated">
      	<i class="plus icon"></i>
      </button>
      <div class="header">{{ patientInfo.name }}</div>
      <div class="meta"> Today {{ form.saveTime | formatTime }}</div>
			<div v-show="collapsed==='expanded'" class="ui divider long"></div>
	  
	    <form ref="followupForm" 
	    		 v-show="collapsed==='expanded'"
	    		 class="ui description scrollable form">
	      <formatted-input labelCopy="Chief Complaint" v-model="form.chief_complaint"/>
				<!-- <div class="ui divider"></div> -->
	      <formatted-input labelCopy="Symptom and Signs" v-model="form.symptom_and_signs"/>
				<!-- <div class="ui divider"></div> -->
	      <formatted-input labelCopy="Pulse and Tongue" v-model="form.pulse_and_tongue"/>
				<!-- <div class="ui divider"></div> -->
	      <formatted-input labelCopy="Diagnosis" v-model="form.diagnosis"/>
				<!-- <div class="ui divider"></div> -->
	      <formatted-input labelCopy="Symptom Differentiation" v-model="form.symptom_differentiation"/>
				<!-- <div class="ui divider"></div> -->
	      <formatted-input labelCopy="Treatment" v-model="form.treatment"/>
	      <!-- <div class="ui divider"></div> -->
	      <formatted-input labelCopy="Patient Feedback" v-model="form.patient_feedback"/>


	      <div class="ui dividing header"></div>
      	<div class="field">
	      	<label class="uppercase"> Next Visit </label>
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
    </div>
    
    <div v-show=" collapsed==='expanded' " class="extra content">
      <div class="ui primary large button right floated" @click="saveForm">Save Entry</div>
      <div class="ui basic link large button right floated" @click="discardForm">Discard</div>
    </div>
	</div>
	<!-- </vue-drag-resize> -->
</template>

<script> 
import FormattedInput from './BaseFormattedInput'
import moment 				from 'moment'
import FlatPickr 			from 'vue-flatpickr-component'
import VueDragResize 	from 'vue-drag-resize'

export default {
	props: ['patientInfo'],
	components: {
		'formatted-input'	: FormattedInput,
		'flat-pickr'			: FlatPickr,
		'vue-drag-resize'	: VueDragResize,
	},
	filters:{
		formatTime( value ) {
			if (!value) return ""
			return ` • Last saved ${moment(value).format("hh:MM A")}`
		}
	},

	mounted() {
		$('#formContainer').resizable({
			handles: "w",
			minWidth: 400,
			maxWidth: $(window).width() - 100,
		})
	},

	data() {
		return {
			collapsed: "expanded",
			form: {
				date_time: "",
				chief_complaint: "",
				symptom_and_signs: "",
				pulse_and_tongue: "",
				diagnosis: "",
				symptom_differentiation: "",
				treatment: "",
				patient_feedback: "",
			},
			nextvisit: {
				date: moment().format('YYYY-MM-DD'),
				time: "09:00 AM"
			},
			dateConfig: {
				altInput: true,
    		altFormat: "M j, Y",
    		dateFormat: "Y-m-d",
    		minDate: "today",
    		defaultDate: moment().format('YYYY-MM-DD')
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

	methods: {
		saveForm() {
			this.form.date_time = moment.now()
			this.$store.dispatch('createFollowup', this.getParsedForm() )
			// also creates an appointment
			this.$emit('submit')
		},
		getParsedForm() {
			return {
				patient_id: this.patientInfo.id,
				visit: _.cloneDeep(this.form),
				next_appointment: moment( this.nextvisit.date + ' ' + this.nextvisit.time ).toString()
			}
		},
		discardForm(){
			for (var key in this.form) {
				this.form[key] = ''
			}
			this.$emit('hide')
		},
		minimizeForm(){
			this.collapsed = "transitioning"
			setTimeout( ()=>{
				this.collapsed = "collapsed"
			}, 300)
			
		},
		expandForm(){
			if (this.collapsed === "collapsed")
				this.collapsed = "expanded"
		}
	}
}
</script>

<style scoped>
.long {
	margin-top: 12px;
	margin-right: -1em;
	margin-left: -1em;
	margin-bottom: 0;
	border-bottom-color: transparent !important;
}
.bottom {
	position: fixed !important;
	overflow: hidden;
	z-index: 10;
	bottom: 15px;
	right: 15px;
}
.wide {
	width: 40vw;
	height: 80vh;
	max-height: 80vh;
	min-width: 400px;
	padding: 1rem 0.5rem 0rem 0.5rem;
	box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
	border: 1px solid #fff !important;
}
.scrollable {
	margin-left: 0;
	margin-right: 0;
	padding-top: 2rem;
	padding-bottom: 2rem;
	max-height: 400px;
	overflow-y: scroll;
	overflow-x: hidden;
}
.scrollable::-webkit-scrollbar-track {
	background-color: transparent;
}
.link {
	background-color: transparent !important;
	box-shadow: none !important;
}
.slideDown {
	height: 90px;
	cursor: pointer;
	-webkit-transition: height .3s ease 0s;
  transition: height .3s ease 0s;
}
.uppercase {
	text-transform: uppercase !important;
}
</style>


