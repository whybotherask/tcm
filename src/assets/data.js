
import $moment from 'moment'

var patient = {

	id:"p6595120",

	personal_info: {
		first_name:"Thomas",
		last_name:"Shelby",
		sex:"M",
		age:"35",
		dob: $moment("1985-12-12"),
		phone: "1234567890",
		address: {
			line1:"123 Main St",
			city:"Birmingham",
			country:"England"
		}
	},
	// next_appointment: $moment("2018-09-30 10:00"),
	next_appointment: "",

	visits: [
		{	
			entry_id:"v0092",
			visit_number:2,
			date_time: $moment("2018-08-25 13:00"),
			is_first_visit: false,
			pracitioner: "Royce Liu",
			chief_complaint: "Insomia for 2 month",
			symptoms_and_signs: "Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning.",
			pulse_and_tongue: "same",
			diagnosis: "Insomia",
			symptom_differentiation: "Liver Qi stagnation, disharmony between Spleen and Liver",
			treatment: "Acupuncture<ul> <li>An Mian: treats Insomnia </li> <li> HT7: calms mind, benefit HT</li> <li>SP6: calms mind, harmonize LV, SP, KD</li> <li>Yin Tang: calms mind</li> <li>LI4, LV3: soothes LV qi, ensure free flow of Qi</li> <li>PC6: soothes Jue Yin Qi</li> <li>UB18: back shu of Liver: harmonize Liver</li> <li>UB15: back shu of HT: harmonize Heart, calms mind</li> <li>LV13: Front-Mu of Spleen, harmonize LV and Spleen</li></ul> Herbal Formula<ul><li>Xiao Yao San: soothes Liver Qi, Harmonize Spleen and Liver</li></ul>",
			patient_feedback: "feedback"
		}, {	
			entry_id:"v0091",
			visit_number:1,
			is_first_visit: true,
			date_time: $moment("2018-07-22 11:20"),
			
			chief_complaint: "Night sweat for 1 year",
			history_of_present_illness: "Onset: During sleep at night <br/> Symptoms: sweating",
			
			general_information: "Chills/fever: feels warm generally <br/> Sweating: sweats easily + night sweat <br/> Thirst: Drinks 1-2L, mouth dry inthe morning <br/> Stool: regular, smooth <br/> Shoulder: shoulder tenderness",
			lifestyle: "lifestyle",
			past_history: "past history",
			general_appearance: "appearance",
			
			tongue: "Purple <br/>teeth mark, redder sides <br/> moist",
			listening_and_smell: "listening",
			pulse_left: "Wiry LV, sl rapid, slippery SP, weak and deep",
			pulse_right: "same",
			
			summary_of_signs_and_symptoms: "Night Sweat, warm sensation, lower appetite, thirsty, bloating, lower back ache, weak legs, blurry vision, vivid dreams, shallow sleep, anxious",
			diagnosis: "Night sweats",
			symptom_differentiation: "<ul> <li> LV and KD yin deficiency</li> <li> SP Qi deficiency </li> </ul>",
			treatment: "Nourish LV and KD yin, Tonify SP Qi, stop sweating <br/> <br/> Acupuncture <br/><ul><li> HT6 + KD7: regulate sweating (night sweat especially)</li> <li>KD6: Nourish Yin</li> <li>SP6: Nourish Yin, tonify SP</li> <li>ST36: tonify SP Qi</li> <li>SP3: Tonify Qi</li> <li>Ren12: regulate middle jiao, tonify Qi</li></ul> Herbal formula <ul> <li> Liu Wei Di Huang Wan + Si Jun Zi Tang</li> </ul>",
		}
	] // end visits
};


var patients = [
	{
		id: "p6595120",
		first_name: "Andy",
		last_name: "Lin",
		sex: 'Male',
		phone: "1234567890",
		dob: $moment("1985-12-12"),
		last_visit: $moment("2018-09-12 10:00"),
		next_appointment: $moment().hour(9).minutes(10)
	},{
		id: "5beb9425aff790d5f75d1d66",
		first_name: "Zifu",
		last_name: "Wang",
		sex: 'M',
		phone: "2088652448",
		dob: $moment("1989-08-11"),
		last_visit: $moment("2018-09-12 11:00"),
		next_appointment: $moment().hour(10).minutes(12)
	},{
		id: "5beb946faff790d60622587c",
		first_name: "David",
		last_name: "Murphy",
		sex: 'M',
		phone: "4163164002",
		dob: $moment("1992-01-29"),
		last_visit: $moment("2018-09-12 13:00"),
		next_appointment: $moment().hour(11).minutes(40)
	},{
		id: "5beb946faff790d60622587c",
		first_name: "Li Qin",
		last_name: "Lei",
		sex: 'M',
		phone: "7054752253",
		dob: $moment("1994-10-02"),
		last_visit: $moment("2018-09-12 14:30"),
		next_appointment: $moment().hour(15).minutes(20)
	},{
		id: "p6595120",
		first_name: "Thomas",
		last_name: "Shelby",
		sex: 'M',
		phone: "1234567890",
		dob: $moment("1985-12-12"),
		last_visit: $moment("2018-08-25 13:00"),
		next_appointment: $moment().hour(17).minutes(0)
	},{
		id: "5beb946faff790d60622587c",
		first_name: "Aurora",
		last_name: "Tetlie",
		phone: "6472068227",
		sex: 'F',
		dob: $moment("1997-07-13"),
		last_visit: $moment("2018-05-13 10:30"),
		next_appointment: $moment("2018-10-01 09:00")
	},{
		id: "5beb946faff790d60622587c",
		first_name: "Warren",
		last_name: "Dahl",
		sex: 'M',
		phone: "2503593332",
		dob: $moment("1990-08-24"),
		last_visit: $moment("2018-06-11 13:00"),
		next_appointment: $moment("2018-10-02 09:00")
	},{
		id: "p3564675",
		first_name: "Tao",
		last_name: "Pai",
		sex: 'M',
		phone: "2506584231",
		dob: $moment("1986-08-13"),
		last_visit: $moment("2018-02-04 14:20"),
		next_appointment: $moment("2018-10-01 09:00")
	},{
		id: "p3564676",
		first_name: "Thelma",
		last_name: "Valentine",		
		sex: 'F',
		phone: "4505176380",
		dob: $moment("1956-08-31"),
		last_visit: $moment("2018-04-22 15:20"),
		next_appointment: $moment("2018-10-04 09:00")
	},{
		id: "p3564678",
		first_name: "Cristina",
		last_name: "Mullen",
		sex: 'F',
		phone: "4505176380",
		dob: $moment("1956-08-31"),
		last_visit: $moment("2018-05-10 15:20"),
		next_appointment: $moment("2018-09-30 09:00")
	},{
		id: "p3564679",
		first_name: "Kunta",
		last_name: "Ryzaev",
		sex: 'F',
		phone: "4505176380",
		dob: $moment("1956-08-31"),
		last_visit: $moment("2018-01-11 15:20"),
		next_appointment: $moment("2018-10-01 12:00")
	},{
		id: "p3564680",
		first_name: "Jenna",
		last_name: "Rubio",
		sex: 'F',
		phone: "4505176380",
		dob: $moment("1956-08-31"),
		last_visit: $moment("2018-03-21 15:20"),
		next_appointment: $moment("2018-10-01 14:00")
	},{
		id: "p3564681",
		first_name: "T'ien",
		last_name: "Lee",
		sex: 'F',
		phone: "4505176380",
		dob: $moment("1956-08-31"),
		last_visit: $moment("2018-04-12 15:20"),
		next_appointment: $moment("2018-11-01 09:00")
	},{
		id: "p3564682",
		first_name: "Juan Ku",
		last_name: "Chan",
		sex: 'F',
		phone: "4505176380",
		dob: $moment("1956-08-31"),
		last_visit: $moment("2018-06-11 15:20"),
		next_appointment: $moment("2018-12-01 09:00")
	},{
		id: "p3564683",
		first_name: "Matsuoka",
		last_name: "Shiomi",
		sex: 'F',
		phone: "4505176380",
		dob: $moment("1956-08-31"),
		last_visit: $moment("2018-01-11 15:20"),
		next_appointment: $moment("2018-10-01 09:00")
	},{
		id: "p3564684",
		first_name: "Heida",
		last_name: "Shizuna",
		sex: 'F',
		phone: "4505176380",
		dob: $moment("1956-08-31"),
		last_visit: $moment("2018-06-05 15:20"),
		next_appointment: $moment("2019-01-12 19:00")
	}
]


var newPatients = [
	{
		id: 'p9064684',
		personal_info: {
			first_name:'Nebyat',
			last_name: 'Medhane',
			dob: $moment('1984-08-13'),
			sex:'F',
			address:'3187 Boulevard, Ste-Geneviève, Chicoutimi, QC G7G 2S4',
			phone: '4186122068',
			email: 'nebyat.medhane@email.com',
			physician: {
				name: 'Becky W. Fetterman',
				phone: '2505316060'
			},
			emergency_contact: {
				name: 'Helen T. Navarro',
				phone: '4162537798', 
				relationship: 'spouse'
			},
			consent: true,
		}

	}, {
		id: 'p9064685',
		personal_info:{
			first_name:'Hua Ma',
			last_name: 'Li',
			dob: $moment('1936-10-25'),
			sex:'M',
			address:'2562 Tchesinkut Lake Rd, Vanderhoof, BC V0J 3A0',
			phone: '2505703572',
			email: 'li@email.com',
			physician: {
				name: 'Dr. Oscar Rowe',
				phone: '6044172572'
			},
			emergency_contact: {
				name: 'Robert Fry',
				phone: '4188684064', 
				relationship: 'sibling'
			},
			consent: true,
		}
	}

]	// end newPatients


function _upsertPatient( p ){
	var target = _.cloneDeep( p )
	var target_sum = { 
		'id' 					: target.id,
		'first_name' 	: target.personal_info.first_name,
		'last_name' 	: target.personal_info.last_name,
		'sex' 				: target.personal_info.sex,
		'phone' 			: target.personal_info.phone,
		'dob' 				: target.personal_info.dob,
		'last_visit' 	: target.visits[0].saveTime,
		'next_appointment': target.next_appointment
	}

	var index = patients.findIndex( (item)=>{ return item.id === target_sum.id } )

  if ( index < 0 ){
  	patients.push( target_sum )
  } else {
  	patients[ index ] = target_sum
  }
	return this
}


export default {

	p: patients,
	n: newPatients,

	getPatient( targetId ){ 
		targetId = targetId.trim().toLowerCase()
		var target = patients.find( (obj)=>obj.id===targetId )
		var newPatient = _.cloneDeep( patient )

		if (typeof target == 'undefined'){
			return newPatient
		
		} else {	// change the default information so we can fake the full profile
			newPatient.id = target.id;
			newPatient.personal_info.first_name = target.first_name
			newPatient.personal_info.last_name = target.last_name
			newPatient.personal_info.sex = target.sex
			newPatient.personal_info.phone = target.phone
			newPatient.personal_info.dob = target.dob

			return newPatient 
		}
	},

	getSearchResults(param, data) {
		param = param.trim().toLowerCase()
		if (param === 'name') {
			data = data.trim().toLowerCase()
			return patients.filter( (patient)=>{ 
				var fullName = patient.first_name.toLowerCase() + ' ' + patient.last_name.toLowerCase()
				return fullName.toLowerCase().includes(data)
			})
		}
		else if (param === 'phone') {
			data = data.replace(/[+()-\s.]/g, '');	// replace any phone formatting (234)234 -> 234234
			return patients.filter((patient)=>patient.phone.includes(data))
		}
		else if (param === 'date') {
			data = $moment(data)
			return patients.filter( (patient)=>{
				return $moment(patient.dob).isSame(data, 'day') || $moment(patient.last_visit).isSame(data, 'day') 
			})
		}
	},

	getPatientList() { 
		return _.cloneDeep( patients )
	},

	getAutocompleteList() { 
		var list = patients.map( (patient)=>{
      patient.title = patient.first_name + ' ' + patient.last_name
      return patient
    });
    return list
	},
	
	setAppointment( value ){
		if (typeof value ==='string' || value instanceof String )
			patient.next_appointment = value
	},

	getNewPatientList() {
		return _.cloneDeep( newPatients )
	},

	upsertPatient( param ) {
		return _upsertPatient( param )
	},

	convertNewPatient( param ) {
		var target = _.cloneDeep( param )		
		_upsertPatient( target )
    _.remove( newPatients, (item)=>{ return item.id === target.id } )	
    return this
	},

	updateNewPatient( target ){
		var p = _.find( newPatients, (item)=> { return item.id === target.id } )
		if (p) Object.assign( p, patient )
		return this;
	}


}


/*
# For patients
    list_patients
    create_patient
    retrieve_patient/(?P<id>[0-9a-z]+)/$
    update_patient/(?P<id>[0-9a-z]+)/$
    delete_patient/(?P<id>[0-9a-z]+)/$
    restore_patient/(?P<id>[0-9a-z]+)/$
    destroy_patient/(?P<id>[0-9a-z]+)/$

# For visit forms
    list_visits/(?P<patient_id>[0-9a-z]+)/$
    retrieve_visit/(?P<id>[0-9a-z]+)/$
    delete_visit/(?P<id>[0-9a-z]+)/$
    restore_visit/(?P<id>[0-9a-z]+)/$
    destroy_visit/(?P<id>[0-9a-z]+)/$

# For first visits
    create_first_visit/(?P<patient_id>[0-9a-z]+)/$
    update_first_visit/(?P<id>[0-9a-z]+)/$

# For followup visits
    create_followup_visit/(?P<patient_id>[0-9a-z]+)/$
    update_followup_visit/(?P<id>[0-9a-z]+)/$
 */


