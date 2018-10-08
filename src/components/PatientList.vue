
<template>
	<div>
		<default-header/>
		<div v-if="patientListLoadStatus==0">
				Loading...
		</div>

		<div v-if="patientListLoadStatus > 0">	
			
			<div class="ui container margin-before-lg">
				<!-- Today's List -->
				<p class="ui header margin-after-sm">Today's Appointments</p>
				<table class="ui very basic selectable table">
				  <thead>
				    <tr>
				    	<th class="two wide">Date</th>
				    	<th class="four wide">Patient</th>
				    	<th class="three wide">Date of Birth</th>
				    	<th class="two wide">Last Visit</th>
				  	</tr>
					</thead>
				  <tbody v-if="patientListLoadStatus==2">
				    <tr v-for="patient in patientsToday" 
				    		@click="displayPatientDetail(patient.id)"
				    		class="pointer tall-row">
				      <td>{{ patient.next_appointment | formatAppointmentToday }}</td>
				      <td><h4>{{ patient.first_name }} {{ patient.last_name }}</h4></td>
				      <td>{{ patient.dob | formatBirthdate }}</td>
				      <td>{{ patient.last_visit | formatLastVisit }}</td>
				    </tr>
				  </tbody>
				</table>

				<!-- Recents List -->
				<p class="ui header margin-before-md margin-after-sm">Upcoming Appointments</p>
				<table class="ui very basic selectable table">
				  <thead>
				    <tr>
				    	<th class="two wide">Date</th>
				    	<th class="four wide">Patient</th>
				    	<th class="three wide">Date of Birth</th>
				    	<th class="two wide">Last Visit</th>
				  	</tr>
					</thead>
				  <tbody v-if="patientListLoadStatus==2">
				    <tr v-for="patient in recentPatients" 
				    		@click="displayPatientDetail(patient.id)"
				    		class="pointer tall-row">
				      <td>{{ patient.next_appointment | formatNextVisit }}</td>
				      <td><h4>{{ patient.first_name }} {{ patient.last_name }}</h4></td>
				      <td>{{ patient.dob | formatBirthdate }}</td>
				      <td>{{ patient.last_visit | formatLastVisit }}</td>
				    </tr>
				  </tbody>
				</table>
			</div>

		</div>

		<my-footer/>
	
	</div>
</template>

<script> 

import Header from './Header'
import Footer from './Footer'
import Moment from 'moment'


export default {
	created() {
		this.$store.dispatch('loadPatientList');
	},
	beforeMount() {
		Moment.locale('en', {
			calendar : {
				lastDay 	: '[Yesterday] LT',
				sameDay 	: '[Today] LT',
				nextDay 	: '[Tomorrow] LT',
				lastWeek 	: '[Last] ddd',
				nextWeek 	: 'ddd [at] LT',
				sameElse 	: 'MMM DD, YYYY'
			}
		})
	},
	components: {
		"default-header": Header,
		"my-footer" 		: Footer
	},
	computed: {
		patientListLoadStatus() {
			return this.$store.getters.getPatientListLoadStatus
		},
		patientList() {
			return this.$store.getters.getPatientList
		},
		patientsToday() {
			var list = this.patientList
			return list
							.filter( (patient)=> Moment(patient.next_appointment).isSame( Moment(), 'day') )
							.sort((a,b)=> Moment(a.next_appointment).isAfter( Moment(b.next_appointment) ))
		},
		recentPatients() {
			var list = this.patientList
			return list
							.filter( (patient)=>!Moment(patient.next_appointment).isSame( Moment(), 'day') )
							.sort( (a,b)=> Moment(a.next_appointment).isAfter( Moment(b.next_appointment) ) ) 
		}
	},
	methods: {
		displayPatientDetail(id) {
			this.$router.push({ 
        name: 'Patient Profile', 
        params: {
          id: `${id}` 
        } 
      })
		}
	},
	filters: {
		formatBirthdate( value ){
			if (!value) return ''
			return value.format("MMM DD, YYYY")
		},
		formatAppointmentToday( value ){
			if (!value) return
			return Moment(value).format('hh:mm A')
		},
		formatLastVisit( value ) {
			if (!value) return
			return Moment(value).fromNow()
		},
		formatNextVisit( value ) {
			if (!value) return
			var m = Moment(value)
			m.locale('en')
			return m.calendar()
		}
	},
}
</script>

<style scoped>

.margin-before-lg {		margin-top: 8rem;			}
.margin-before-sm {		margin-top: 2rem;			}
.margin-before-md {		margin-top: 4rem;			}
.margin-after-sm {		margin-bottom: 2rem;	}

.font-size-lg {
	font-size: 2rem;
}
.pointer {
	cursor: pointer
}
.tall-row > td {
	padding-top: 1.4rem !important;
	padding-bottom: 1.4rem !important;
}

</style>


