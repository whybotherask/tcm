

<template>
	<div>
		<default-header/>
		<div class="ui centered container margin-before-lg narrow">
			<h1 class="ui header"> Available New Patients </h1>

			<div class="ui container margin-before-md">
				<!-- loading state -->
				<div v-if="newPatientListLoadStatus==0">
						Loading...
				</div>
				<!-- table of profiles -->
				<table class="ui very basic selectable table" v-if="newPatientListLoadStatus==2">
				  <thead>
				    <tr>
				    	<th class="four wide">Name</th>
				    	<th class="two wide">Sex</th>
				    	<th class="three wide">Phone</th>
				    	<th class="three wide">Email</th>
				  	</tr>
					</thead>
				  <tbody>
				    <tr v-for="patient in newPatientsList" 
				    		@click="displayNewPatient(patient.id)"
				    		class="pointer tall-row">
				      <td><h4>{{ patient.first_name }} {{ patient.last_name }}</h4></td>
				      <td>{{ patient.sex | capitalize }}</td>
				      <td>{{ patient.phone | formatPhone }}</td>
				      <td>{{ patient.email }}</td>
				    </tr>
				  </tbody>
				</table>

				<button class="ui secondary button margin-before-sm"
								v-if="newPatientListLoadStatus==2"
								@click="createNewPatient"> 
					Manually Add New Patient </button>

			</div> <!-- end div.ui.container for list of patients -->
		</div> <!-- end div.ui.centered.container -->
	</div>
</template>

<script> 
import Header 				from './PatientProfileHeader'
import Moment 				from 'moment'

export default {
	components: {
		'default-header' : Header,
	},
	created() {
		this.$store.dispatch('loadNewPatientList');
	},
	data() {
		return {

		}
	},
	computed: {
		newPatientListLoadStatus() {
			return this.$store.getters.getNewPatientListLoadStatus
		},
		newPatientsList() {
			return this.$store.getters.getNewPatientList
		},
	}, 
	filters: {
		formatBirthdate( value ){
			if (!value) return ''
			value = moment(value)
			return value.format("MMM DD, YYYY")
		},
		formatPhone( value ){
			if (!value) return ''
			value = value.toString();
			return `${value.slice(0,3)}.${value.slice(3,6)}.${value.slice(6,10)}`
		},
		capitalize: function (value) {
	    if (!value) return ''
	    value = value.toString()
	    return value.charAt(0).toUpperCase() + value.slice(1)
	  }
	},
	methods: {
		displayNewPatient( id ){
			this.$router.push({
				name: 'New Patient Profile',
				params: {
					id: id
				}
			})
		},
		createNewPatient(){
			this.$router.push({
				name: 'New Patient Profile',
				params: {
					id: 'new'
				}
			})
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

.padding-sm {	padding: 2rem !important; }

.narrow {
	max-width: 800px !important;
}
.tall-row > td {
	padding-top: 1.4rem !important;
	padding-bottom: 1.4rem !important;
}
.tall-row > td:hover {
	cursor: pointer;
}



</style>


