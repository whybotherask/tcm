
<template>
	<div class="items">
		<div v-for="visit in visitList">
			<entry :visit="visit"/>	
		</div>
	</div>
</template>

<script> 

import entry from './PatientProfileVisitListEntry.vue';

export default {
	components: {
		entry
	},
	computed: {
		visitList() {
			var patient = this.$store.getters.getPatient
			return patient.visits
		}
	}
}
</script>

<style>
</style>


