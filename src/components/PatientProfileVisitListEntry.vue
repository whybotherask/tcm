
<template>
	<div class="item">
		<div class="ui section divider"></div>
		<div class="ui content grid">
			<div class="two wide column">
				<h4 class="margin-sm">{{ visit.date_time | formatDate }}</h4>
				<p class="margin-sm">{{ visit.date_time | formatDuration }}</p>
				<p class="margin-sm">Visit #{{ visit.visit_number }}</p>
			</div>
			<div class="eight wide column">
				<span class="label uppercase">Chief Complaint</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.chief_complaint"/>

				<span class="label uppercase">Symptoms and Signs</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.symptoms_and_signs"/>

				<span class="label uppercase">Pulse and Tongue</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.pulse_and_tongue"/>

				<span class="label uppercase">Diagnosis</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.diagnosis"/>

				<span class="label uppercase">Symptom Differentiation</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.symptom_differentiation"/>

				<span class="label uppercase">Treatment</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.treatment"/>

				<span class="label uppercase">Patient Feedback</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.patient_feedback"/>
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

<style>
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
	/*-webkit-padding-start: 18px;*/
}
.font-lg {
	font-size: 1.2rem;
	line-height: 1.4;
}
.margin-bottom-sm {
	margin-bottom: 2rem;
	margin-block-start: 0 !important;
}
.margin-sm {
	-webkit-margin-before: 0;
	-webkit-margin-after:0;
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
}
ul{
	margin-block-start: 0 !important;
}

</style>


