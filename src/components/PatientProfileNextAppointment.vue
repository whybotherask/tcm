
<template>
	<div class="ui pad-top-sm pad-bottom-sm font-size-120 borderless message">
	  <span> 
	  	Next Apppointment: <strong class="bolded"> {{ appointment | formatAppointmentTime }} </strong>   
	  	<a class="pad-left-sm" @click="editAppointmentTime">
	  		Edit or Cancel
	  	</a> 
		</span>

		<div class="ui small modal" id="editTimeModal">
		  <div class="header">Edit or Cancel Appointment</div>
		  <div class="content">
		  	
		  	<form class="ui form">
	      	<div class="field">
		      	<div class="two fields">
		      		<div class="field">
		      			<label>Date</label>
					      <flat-pickr 
					      	v-model="form.date" 
					      	:config="dateConfig" 
					      	placeholder="Select date" 
					      	name="date"/> 
				      </div>
			      	<div class="field">
			      		<label>Time</label>
				        <flat-pickr 
					        v-model="form.time" 
					        :config="timeConfig" 
					        placeholder="Select time" 
					        name="time"/>
				      </div>
		        </div>
		      </div>
		    </form>
		  </div>

		  <div class="actions flex">
		  	<button 
		  		class="ui negative basic button" 
		  		@click="cancelAppointment"> 
		  				Cancel Appointment </button>
		    <button 
		    	class="ui primary button push-right" 
		    	@click="updateAppointment">
		    			Save Changes </button>
		    <button 
		    	class="ui basic button"
		    	@click="closeModal">
		    			Don't Save</button>
		  </div>

		</div>

	</div>
</template>

<script> 
import Moment from 'moment'
import flatPickr from 'vue-flatpickr-component'

export default {
	components: {
		'flat-pickr': flatPickr
	},
	data() {
		return {
			form: {
				date: Moment().format('YYYY-MM-DD'),	// random defaults
				time: Moment().format('HH:mm'),		// random defaults
			},
			dateConfig: {
				altInput: true,
    		altFormat: "M j, Y",
    		dateFormat: "Y-m-d",
    		// inline: true,
    		minDate: "today",
			},
			timeConfig: {
  			altInput: true,
  			altFormat: "h:i K",
    		dateFormat: "H:i",
				enableTime: true,
   			noCalendar: true,
			}
		}
	},
	computed: {
		appointment() {
			return Moment(this.$store.getters.getNextAppointment)	
		}
	},
	filters: {
		formatAppointmentTime( value ){
			if (!value) return ''
			if ( Moment(value).isSame( Moment(), 'day') ) 
				return `Today at ${Moment(value).format('hh:mm A')}`
			else
				return `${Moment(value).format('MMM DD, YYYY')} at ${Moment(value).format('hh:mm A')}`
		}
	},
	methods: {
		editAppointmentTime( evt ){
			var next = this.appointment
			if ( !next.isValid() ) next = Moment().hour(9).minutes(0)
			this.form.date = next.format('YYYY-MM-DD')
			this.form.time = next.format('HH:mm')
			$('#editTimeModal').modal('show')
		},
		updateAppointment( evt ){
			var newDate = Moment( this.form.date + ' ' + this.form.time ).toString()
			this.closeModal()
			this.$emit('update', this)
			this.$store.dispatch( 'setAppointment', { next_appointment: newDate })
		},
		cancelAppointment( evt ) {
			this.closeModal()
			this.$emit('cancel', this);
			this.$store.dispatch( 'cancelAppointment', {} )
		},
		closeModal( evt ) {
			$('#editTimeModal').modal('hide')
		}
	}
}
</script>

<style scoped>
a {
	cursor: pointer;
}
form {
	min-height: 350px;
}
.pad-left-sm { padding-left: 2rem !important; }
.pad-top-sm { padding-top: 2.5rem !important; }
.pad-bottom-sm { padding-bottom: 2.5rem !important; }
.pad-left-sm { padding-left: 2rem !important; }

.font-size-120 { 
	font-size: 1rem; 
}
.flex {
	display: flex !important;
}
.push-right {
	margin-left: auto !important;
}
.link {
	border: 0px solid black;
	background-color: transparent;
	color: #2185d0;
}
.borderless {
	border: 0px solid black;
}
</style>


