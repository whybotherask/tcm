
<template>
	<div>
		<profile-header :patient="patient"/>
		<div class="ui container margin-before-lg">

			<loader v-if="patientLoadStatus==0"/>

			<div v-if="patientLoadStatus==2">
				<!-- Name & Followup Button-->
				<div class="ui container borderless menu align-center">
					<h1>{{ patient.personal_info.first_name }}&nbsp;{{ patient.personal_info.last_name }}</h1>
					<button class="ui primary padded button right menu" @click="showForm">+ FOLLOWUP</button>
				</div >
				<!-- Personal Info -->
				<div class="ui stackable grid margin-before-sm">
	        <div class="five wide column">
	          <div class="ui container grid">
	          	<span class="six wide column no-padding"><h4> Date of Birth </h4></span> 
	          	<span class="ten wide column no-padding">{{ patient.personal_info.dob | formatBirthdate }}</span>
	          </div>
	          <div class="ui container grid">
	          	<span class="six wide column no-padding"><h4> Sex </h4></span> 
	          	<span class="ten wide column no-padding">{{ patient.personal_info.sex }}</span>
	          </div>
	        </div>
	        <div class="four wide column">
	        	<div class="ui container grid">
	          	<span class="six wide column no-padding"><h4> Phone </h4></span> 
	          	<span class="ten wide column no-padding">{{ patient.personal_info.phone | formatPhone }}</span>
	          </div>
	        </div>
	      </div>
	      <!-- Visits -->
				<h3 class="margin-before-md">VISITS</h3>
				<next-appointment 
						v-show="patient.next_appointment && patient.next_appointment !='' "  />
				<visit-list/>
				<followup-form 
						v-if="formVisible" 
						:patientInfo="patientInfo"
						@submit="hideForm" 
						@hide="hideForm" 	/>
			</div>
		</div>
		<my-footer/>
	</div>
</template>

<script> 

import Header 			from './PatientProfileHeader'
import VisitList 		from './PatientProfileVisitList'
import FollowupForm from './PatientProfileFollowupForm'
import Appointment 	from './PatientProfileNextAppointment'
import Loader 			from './BaseLoading'
import Footer 			from './Footer'
import Moment 			from 'moment'

export default {
	data(){
		return {
			formVisible: false
		}
	},
	created() {
		var id = this.$route.params.id
		this.$store.dispatch( 'loadPatient', { id: id } )
		window.scrollTo( 0 , 0 )
	},
	components: {
		"followup-form"		: FollowupForm,
		"visit-list"			: VisitList,
		"profile-header"	: Header,
		"loader" 					: Loader,
		"next-appointment": Appointment,
		"my-footer" 			: Footer,
	},
	computed: {
		patientLoadStatus() {
			return this.$store.getters.getPatientLoadStatus
		}, 
		patient() {
			var patient = this.$store.getters.getPatient
			if ( patient ) return patient
			else return {
				personal_info: {
					first_name: "",
					last_name: ""
				},
				next_appointment: ""
			}
		},
		patientInfo() {
			return {
				name: `${this.patient.personal_info.first_name} ${this.patient.personal_info.last_name}`,
				id: this.patient.id
			}
		}
	},
	filters: {
		formatBirthdate( value ){
			if (!value) return ''
			return Moment(value).format("MMM DD, YYYY")
		},
		formatPhone ( value ){
			if (!value) return ''
			const nonNumberRegex = /[^0-9]+/g
			return value.toString()
									.replace(nonNumberRegex, '')
									.insert(6, '-').insert(3, ') ').insert(0, '(')
		},
		formatAppointmentDateTime( value ){
			if (!value) return ''
			return `${Moment(value).format('MMM DD, YYYY')} at ${Moment(value).format('hh:mm A')}`
		}
	},
	methods: {
		showForm() {
			this.formVisible = true
		},
		hideForm() {
			this.formVisible = false
		}
	}
}
</script>

<style scoped>
.margin-before-lg {
	margin-top: 8rem;
}
.margin-before-md {
	margin-top: 4rem;
}
.margin-before-sm {
	margin-top: 2rem;
}
.borderless {
	border: 0px !important;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
}
.padded {
	padding: 1.2rem 2.5rem;
}
.no-padding {
	padding-left: 0px !important;
	padding-top: .6rem !important;
	padding-bottom: .6rem !important;
}
.align-center {
	align-items: center;
}
.align-center h1 {
	font-size: 3rem;
	font-weight: normal;
	margin: 0;
}
</style>


