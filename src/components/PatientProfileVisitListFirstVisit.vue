
<template>
	<div class="item">
		<div class="ui section divider"></div>
		<div class="ui content grid">
			<div class="two wide column">
				<h4 class="margin-sm">{{ visit.datetime | formatDate }}</h4>
				<p class="margin-sm">{{ visit.datetime | formatDuration }}</p>
				<p class="margin-sm">1st Visit</p>
			</div>
			<div class="eight wide column">
				
				<span class="label uppercase"> Chief Complaint </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.chief_complaint"/>

				<span class="label uppercase"> History of Present Illness </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.history_of_present_illness"/>

				<span class="label uppercase"> General Information </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.general_information"/>

				<span class="label uppercase"> Lifestyle </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.lifestyle"/>

				<span class="label uppercase"> Past History </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.past_history"/>

				<span class="label uppercase"> General Appearance </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.general_appearance"/>

				<span class="label uppercase"> Tongue </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.tongue"/>

				<span class="label uppercase"> Listening and Smell </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.listening_and_smell"/>

				<span class="label uppercase"> Pulse Left </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.pulse_left"/>

				<span class="label uppercase"> Pulse Right </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.pulse_right"/>

				<span class="label uppercase"> Summary of Signs and Symptoms</span>
				<div class="font-lg margin-bottom-sm" v-html="visit.summary_of_signs_and_symptoms"/>

				<span class="label uppercase"> Diagnosis </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.diagnosis"/>

				<span class="label uppercase"> Syndrome Differentiation </span>
				<div class="font-lg margin-bottom-sm" v-html="visit.syndrome_differentiation"/>

				<span class="label uppercase"> Treatment </span>
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
ul {
	margin-block-start: 0 !important;
}
</style>


