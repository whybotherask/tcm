
<template>
	<div class="item">
		<div class="ui section divider"></div>
		<div class="ui content grid">
			<div class="two wide column">
				<h4 class="margin-sm">{{ visit.datetime | formatDate }}</h4>
				<p class="margin-sm">{{ visit.datetime | formatDuration }}</p>
				<p class="margin-sm">Visit #{{ visit.visit_number }}</p>
			</div>
			<div class="eight wide column">
				<span class="label uppercase">Results From Last treatment</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.results_from_last_treatment"/>
 
				<span class="label uppercase">Changes In Symptom</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.changes_in_symptom"/>

				<span class="label uppercase">Syndrome Differentiation</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.symptom_differentiation"/>

				<span class="label uppercase">Treatment Principle</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.treatment_principle"/>

				<span class="label uppercase">Treatment</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.treatment"/>
			</div>
		</div>
	</div>
</template>

<script> 

import moment from 'moment'

export default {
	props: ['visit'],
	filters: {
		formatDate( value ){
			if ( moment.isMoment(value) || moment.isDate(value) || moment(value).isValid() ) {
				return moment(value).format("MMM DD, YYYY")
			} 
			else return ''
		},
		formatTreatment( value ) {
			if (!value) return ''
		},
		formatDuration( date ) {
			if ( moment.isMoment(date) || moment.isDate(date) || moment(date).isValid() ) {
				return moment(date).fromNow()
			}
			else return ''
		}
	},
}
</script>

<style scoped>
.label {
	font-size: .8rem;
	font-weight: bold;
	color: grey;
}
.uppercase {
	text-transform: uppercase
}
.indent-list {
	list-style-position: outside;
/*	-webkit-padding-start: 18px;
	-webkit-margin-before: .2rem !important;
*/}
.font-lg {
	font-size: 1.2rem;
	line-height: 1.4;
}
ul{
	-webkit-margin-before: .2rem !important;
}
.margin-bottom-sm {
	margin-bottom: 2rem;
}
.margin-sm {
	-webkit-margin-before: 0;
	-webkit-margin-after:0;
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
}
</style>


