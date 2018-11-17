
<template>
	<div class="items">
		<div v-for="visit in visitList">
			<entry v-if="!visit.is_first_visit" :visit="visit"/>				
			<firstEntry v-if="visit.is_first_visit" :visit="visit"/>	
		</div>
	</div>
</template>

<script> 

import entry from './PatientProfileVisitListEntry.vue'
import firstEntry from './PatientProfileVisitListFirstVisit.vue'

export default {
	components: {
		entry,
		firstEntry,
	},
	computed: {
		visitList() {
			var patient = this.$store.getters.getPatient
			return patient.visits
		}
	}
}
</script>

<style scoped>
</style>


