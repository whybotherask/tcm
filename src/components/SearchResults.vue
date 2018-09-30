
<template>
	<div>
		<default-header :prefill="querySearch"/>

		<loader v-if="searchResultsLoadStatus==0"/>		

		<div class="ui container margin-before-lg fullpage" v-if="searchResultsLoadStatus==2" >
			
			<blank-state :search="querySearch" v-if="searchResults.length==0"/>

			<table class="ui very basic selectable table" v-if="searchResults.length > 0">
			  <thead>
			    <tr>
			    	<th class="four wide">Name</th>
			    	<th class="three wide">Phone</th>
			    	<th class="three wide">Date of Birth</th>
			    	<th class="three wide">Last Visit</th>
			  	</tr>
				</thead>
			  <tbody>
			    <tr v-for="patient in searchResults" 
			    		@click="displayPatientDetail(patient.id)"
			    		class="pointer tall-row">
			      <td><h4>{{ patient.first_name }} {{ patient.last_name }}</h4></td>
			      <td>{{ patient.phone | formatPhone }}</td>
			      <td>{{ patient.dob | formatBirthdate }}</td>
			      <td>Last: {{ patient.last_visit | formatBirthdate }}</td>
			    </tr>
			  </tbody>
			</table>
		</div>
		<my-footer/>
	</div>
</template>

<script> 

import Header 		from './Header'
import BlankState from './SearchResultsBlankState'
import Loader 		from './BaseLoading'
import Footer 		from './Footer'


export default {
	created() {
		var query = {
			type: this.$route.params.type,
			data: this.$route.params.data
		}
		this.$store.dispatch( 'loadSearchResults', query )
	},
	components: {
		"default-header": Header,
		"blank-state"		: BlankState,
		"loader"				: Loader,
		"my-footer"			: Footer
	},
	computed: {
		searchResultsLoadStatus() {
			return this.$store.getters.getSearchResultsLoadStatus
		},
		searchResults() {
			return this.$store.getters.getSearchResults
		},
		querySearch() {
			return this.$route.params.data
		}
	},
	methods: {
		displayPatientDetail(id) {
			this.$router.push({ 
				name: 'patient', 
				param: {
					id: `/patient/${id}` 
				} 
			})
		}
	},
	filters: {
		formatBirthdate( value ){
			if (!value) return ''
			return value.format("MMM DD, YYYY")
		},
		formatPhone( value ){
			value = value.trim().toLowerCase()
			if (!value) return ''
			return `${value.slice(0,3)}.${value.slice(3,6)}.${value.slice(6,10)}`
		}
	}
}
</script>

<style scoped>

.font-size-lg {
	font-size: 2rem;
}
.margin-before-lg {
	margin-top: 8rem;
}
.margin-before-sm {
	margin-top: 2rem;
}
.margin-before-md {
	margin-top: 4rem;
}
.pointer {
	cursor: pointer
}
.tall-row {}
.tall-row > td {
	padding-top: 1.4rem !important;
	padding-bottom: 1.4rem !important;
}
.padding-left {
  padding-left: 130px !important;
}
.fullpage {
	min-height: 60vh;
}

</style>


