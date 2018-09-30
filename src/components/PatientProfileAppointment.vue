
<template>
	<div class="ui pad-top-sm pad-bottom-sm font-size-120 message"
			 @mouseenter="handleMouseEnter"
			 @mouseleave="handleMouseLeave">
	  <form class="ui form flex"> 
	  	Next Apppointment: 
	  	<div class="field borderless width-md" id="dateField">
	  		<flat-pickr 
	      	vv-model="date" 
	      	:config="dateConfig" 
	      	placeholder="Select date"
	      	name="date"/> 
	    </div>  
	    at
	    <div class="field borderless width-sm" id="timeField">
	  		<flat-pickr 
	      	vv-model="time" 
	      	:config="timeConfig" 
	      	placeholder="Select date" 
	      	name="date"/> 
	    </div> 
	    <a id="cancelButton" class="pad-left-md" @click="showConfirmation">Cancel Appointment</a>
		</form>

		<div class="ui mini modal" id="editTimeModal">
		  <div class="header">Cancel Appointment</div>
		  <div class="content">
		  	<p>Are you sure you want to cancel the appointment?</p>	
	  	</div>
	  	<div class="actions">
		    <div class="ui primary button" @click="cancelAppointment">Confirm</div>
		    <div class="ui basic button" @click="closeModal">Don't Cancel</div>
		  </div>
		</div>

	</div>
</template>

<script> 
import Moment 		from 'moment'
import flatPickr 	from 'vue-flatpickr-component'

export default {
	components: {
		'flat-pickr': flatPickr
	},
	data() {
		return {
			dateConfig: {
    		dateFormat	: "M j, Y",
    		minDate 		: "today",
			},
			timeConfig: {
   			dateFormat 	: "h:i K",
				enableTime 	: true,
   			noCalendar 	: true,
			}
		}
	},
	filters: {
		formatAppointmentTime( value ){
			if (!value) return ''
			return `${Moment(value).format('MMM DD, YYYY')} at ${Moment(value).format('hh:mm A')}`
		}
	},
	computed: {
		next() {
			return Moment(this.$store.getters.getNextAppointment)
		},
		date: {
			get() {
				if (this.next == "" ) return Moment().format('MMM DD, YYYY')
				return this.next.format('MMM DD, YYYY')
			},
			set( val ){
				this.updateAppointment( val + ' ' + this.time )
			}
		},
		time: {
			get() {
				if (this.next =="" ) return '09:00 AM'
				return this.next.format('hh:mm A')
			},
			set( val ){
				this.updateAppointment( this.date + ' ' + val  )
			}
		}
	},
	methods: {
		updateAppointment( val ){
			// id = this.patient.id
			this.$store.dispatch( 'setAppointment', { next_appointment: val })
		},
		cancelAppointment( evt ) {
			// var id = this.patient.id
			this.closeModal()
			this.$emit('cancel', this);
			this.$store.dispatch( 'cancelAppointment', {} )
		},
		showConfirmation( evt ){
			$('.ui.modal').modal('show');
		},
		handleMouseEnter( evt ){
			$('.borderless > input').css('background', '#ddd')
			$('#cancelButton').show()
		},
		handleMouseLeave( evt ){
			$('.borderless > input').css('background', 'transparent')
			$('#cancelButton').hide()
		},
		closeModal( evt ){
			$('.ui.modal').modal('hide')
		},
		onChange( evt ){
			window.alert('onchange')
		}
	},
	mounted() {
		$('.borderless > input').css({
			"border": "none",
			"background-color": "transparent",
			"font-weight": "bold",
			"text-align": "center",
			"padding-left": "0",
			"padding-right": "0",
			"font-size": "1.1rem",
		})
		$('#cancelButton').hide()
	}
}
</script>

<style scoped>
a {
	cursor: pointer;
}
.pad-top-sm { 		padding-top: 1.5rem !important;			}
.pad-left-sm { 		padding-left: 2rem !important; 			}
.pad-bottom-sm { 	padding-bottom: 1.5rem !important; 	}
.pad-left-md { 		padding-left: 4rem !important; 			}
.width-sm { 		width: 84px !important; }
.width-md {			width: 106px !important; }

.font-size-120 {
	font-size: 1rem;
}
.flex {
	display: flex !important;
	align-items: center;
}
.push-right {
	margin-left: auto !important;
}
.field {
	display: inline-block;
	margin-left: .25rem !important;
	margin-right: .25rem !important;
	font-size: 1rem !important;
	margin-bottom: 0 !important;
}
.grey-background {
	background-color: black;
}
.transparentInput {
	border: none;
	background-color: transparent;
	text-align: center;
	padding-left: 0;
	padding-right: 0
}
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="date"]::-webkit-inner-spin-button {
  display: none;
}

</style>


