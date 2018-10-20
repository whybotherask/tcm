
<template>
	<div>
		<default-header :patient="patient"/>

		<div class="ui centered container margin-before-lg narrow">
			<h1 class="ui header"> Andy Lin </h1>
			<form ref="firstVisitForm" class="ui form" autocomplete="off">

	      <!-- Personal Info -->
	      <div class="segment margin-before-md"> 
		      <div class="ui header"> Personal Info </div>
					<div class="ui divider"></div>
		      
		      <div class="field">
				    <label>Name</label>
				    <div class="two fields">
				      <div class="eight wide field">
				        <input type="search" 
				        				ref="firstName" 
				        				placeholder="First Name" 
				        				autocomplete="off"
				        				v-model="first_name" />
				      </div>
				      <div class="eight wide field">
				        <input type="search" 
				        				ref="lastName" 
				        				placeholder="Last Name" 
				        				autocomplete="off"
				        				v-model="last_name" />
				      </div>
				    </div>
				  </div>

		      <div class="ten wide field">
				    <label>Address</label>
				    <input type="search" 
				    				ref="address" 
				    				placeholder="Address" 
				    				autocomplete="off"
				    				v-model="address" />
				  </div>

				  <div class="four wide field">
				    <label>Birthdate</label>
				    <input type="search" 
				    				ref="dob" 
				    				placeholder="MMM/DD/YYYY" 
				    				autocomplete="off"
				    				v-model="dob" />
				  </div>

				  <div class="four wide field">
				    <label>Sex</label> 
				    <div class="ui left attached split button" 
			    				:class="{ 'primary': sex==='male', 'basic': sex!=='male' }"
			    				tabindex="0"  
			    				@click="splitButtonOnClick( $event, 'male' )"
			    				@keypress.space="splitButtonOnKeyUp( $event, 'male' )"
			    				@keypress.enter="splitButtonOnKeyUp( $event, 'male' )">Male</div>

						<div class="right attached ui split button" 
								:class="{ 'primary': sex==='female', 'basic': sex!=='female' }"
								tabindex="0" 
								@click="splitButtonOnClick( $event, 'female' )"
								@keypress.space="splitButtonOnKeyUp( $event, 'female' )"
								@keypress.enter="splitButtonOnKeyUp( $event, 'female' )">Female</div>
				  </div>

				  <div class="six wide field">
				    <label>Phone Number</label>
				    <input type="search" 
				    				ref="phone" 
				    				autocomplete="off" 
				    				v-model="phone" 
				    				@keypress="formatPhone" />
				  </div>

				  <div class="six wide field">
				    <label>Email</label>
				    <input type="search" 
				    				ref="email" 
				    				placeholder=""
				    				autocomplete="off"
				    				v-model="email" />
				  </div>

			  </div>

			  <div class="segment margin-before-md"> 
		      <div class="ui header"> Family Physician </div>
					<div class="ui divider"></div>
	
		      <div class="eight wide field">
				    <label>Physician's Full Name</label>
				    <input type="search" 
				    				ref="physician_name" 
				    				placeholder="First and last name" 
				    				autocomplete="off"
				    				v-model="physician.name" />
				  </div>

				  <div class="six wide field">
				    <label>Physician's Phone</label>
				    <input type="search" 
				    				ref="physician_phone" 
				    				autocomplete="off"
				    				v-model="physician.phone"
				    				@keypress="formatPhysicianPhone" />
				  </div>
			  </div>

			  <div class="segment margin-before-md"> 
		      <div class="ui header"> Emergency Contact </div>
					<div class="ui divider"></div>
	
		      <div class="eight wide field">
				    <label>Contact's Full Name</label>
				    <input type="search" 
				    				ref="emergency_contact_name" 
				    				placeholder="First and last name" 
				    				autocomplete="off"
				    				v-model="emergency_contact.name" />
				  </div>

				  <div class="six wide field">
				  	<label>Contact's Relation to Patient</label>
				    <select class="ui search dropdown">
				    	<option value="">Select Relation</option>
				    	<option value="parent">Parent</option>
				    	<option value="sibling">Sibling</option>
				    	<option value="relative">Relative</option>
				    	<option value="spouse">Spouse</option>
				    	<option value="partner">Partner</option>
				    	<option value="friend">Friend</option>
				    	<option value="doctor">Doctor</option>
				    	<option value="coworder">Co-worker</option>
				    </select>
				  </div>

			  	<div class="six wide field">
			    	<label>Contact's Phone</label>
				    <input type="search" 
				    				ref="emergency_contact_phone"
				     				autocomplete="off"
				     				v-model="emergency_contact.phone"
				     				@keypress="formatContactPhone" />
				  </div>

			  </div>

			  <div class="segment margin-before-md"> 
		      <div class="ui header"> Consent Form </div>
					<div class="ui divider"></div>
					<div class="ui message padding-before-sm padding-after-sm"
							:class="consent ? 'positive':'negative' ">
						<div class="header"> Exemption of Liability</div>
						<p>I, {{first_name}} {{last_name}}, hereby request and consent to recieve traditional Chinese medical treament, including acupuncture, herbal medicine, and tuina massage and other other related treatments from practitioners at the TSTCM teaching clinic. I acknowledge that the above treatments and all its ramifications have been fully explained to me. I also absolve TSTCM, all supervisors and the TSTCM clinic, if I experience from any unexpected side effects results of the treatment. I further agree to not commence lawsuits of any kind against all parties</p>
						<div class="ui checkbox" @click="consentOnClick">
				      <input type="checkbox" tabindex="0" class="hidden">
				      <label>I agree to the Exemption of Liability</label>
				    </div>
					</div>
				</div>
	    
	    </form>

			<div class="ui divider margin-before-lg"></div>
	    <div class="content margin-after-xl">
	      <div class="ui active large primary button right floated" @click="saveForm">Confirm Patient</div>
	      <div class="ui basic link large basic button right floated" @click="$router.back()">Cancel</div>
	    </div>

		</div>

		<my-footer/>
	</div>
</template>

<script> 

import Header 				from './PatientProfileHeader'
import Footer 				from './Footer'
import FormattedInput from './BaseFormattedInput'
import Moment 				from 'moment'

export default {
	components: {
		"default-header"		: Header,
		"my-footer" 				: Footer,
		"formatted-input" 	: FormattedInput, 
	},
	created() {
		setTimeout(()=>window.scrollTo(0,0), 10)
	},
	mounted() {
		$('select.dropdown').dropdown()
		$('.ui.checkbox').checkbox()
		if (this.$route.params.id !== 'new') {
			this.first_name = 'Andy'
			this.last_name = 'Lin'
		}
	},
	data() {
		return {
			id: '',
			first_name:'',
			last_name: '',
			dob:'',
			sex:'',
			address:'',
			phone: '',
			email: '',
			physician: {
				name: '',
				phone: ''
			},
			emergency_contact: {
				name: '',
				phone: '', 
				relationship: ''
			},
			consent: '',
		}
	},
	computed: {
		patient() {
			return {
				id: "p1123221",
				personal_info: {
					first_name: this.first_name,
					last_name: this.last_name
				}
			}
		}
	},
	methods: {
		saveForm( ){
			this.$router.push({ 
        name: 'New Patient Entry', 
        params: {} 
      })
		},
		discardForm( ){
			this.$router.back()
		},
		splitButtonOnClick( evt, param ){
			this.sex = param
		},
		splitButtonOnKeyUp( evt, param ){
			evt.preventDefault()
			this.sex = param
		},
		formatPhone( ){
			this.$nextTick(() => {
				this.phone = this._formatPhoneNumber( this.phone )
			});
		}, // end formatPhoneNumber()
		formatContactPhone( ){
			this.$nextTick(() => {
				this.emergency_contact.phone = this._formatPhoneNumber( this.emergency_contact.phone )
			});
		},
		formatPhysicianPhone( ){
			this.$nextTick(() => {
				this.physician.phone = this._formatPhoneNumber( this.physician.phone )
			});
		},
		_formatPhoneNumber( val ){
			var nonNumberRegex = /[^0-9]+/g
			var numbers = val.replace(nonNumberRegex, '').insert(6, '-').insert(3, ') ').insert(0, '(')
			// we insert from the back of string to avoid shifting indices
			return numbers
		},
		consentOnClick( ){				
			this.consent = !this.consent
		}
	},
}
</script>

<style scoped>

.margin-before-lg {		margin-top: 8rem !important; 	}
.margin-before-md {		margin-top: 4rem;			}
.margin-before-sm {		margin-top: 2rem;			}
.margin-after-xl {		margin-bottom: 16rem;	}
.margin-after-sm {		margin-bottom: 2rem;	}

.padding-before-sm { padding-top: 2rem !important;  }
.padding-after-sm { padding-bottom: 2rem !important; }

.narrow {
	max-width: 800px !important;
}
.split {
	width 				: 50% !important;
	text-align 		: center !important;
	padding-left 	: 0 !important;
	padding-right : 0 !important;
}
.split:focus {
	border: 1px solid #1279c6;
}

</style>


