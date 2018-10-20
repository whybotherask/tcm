
import $moment from 'moment'

const patient = {

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
			id:"v0092",
			visit_number:2,
			datetime: $moment("2018-08-25 13:00"),
			pracitioner:"Royce Liu",
			results_from_last_treatment:"Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen.",
			changes_in_symptom:"Insomia for 2 months",
			// signs_and_symptoms:"Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning.",
			// diagnosis:"Insomia",
			symptom_differentiation:"Liver Qi stagnation, disharmony between Spleen and Liver",
			treatment_principle:"Soothe Liver Qi, Harmonize spleen and liver, calm mind",
			treatment:"Acupuncture\n<ul> <li>An Mian: treats Insomnia </li> <li> HT7: calm mind, benefit HT</li> <li>SP6: Calm mind, harmonize LV, SP, KD</li> <li>Yin Tang: Calm mind</li> <li>LI4, LV3: Sooth LV qi, ensure free flow of Qi</li> <li>PC6: Sooth Jue Yin Qi,</li> <li>UB18: back shu of Liver: harmonize Liver</li> <li>UB15: back shu of HT: harmonize Heart, calm mind</li> <li>LV13: Front-Mu of Spleen, harmonize LV and Spleen</li></ul> Herbal Formula: Xiao Yao San <ul><li>Soothe Liver Qi, Harmonize Spleen and Liver</li></ul>",
		}, {	
			id:"v0091",
			visit_number:1,
			datetime: $moment("2018-07-22 11:20"),
			pracitioner:"Royce Liu",
			results_from_last_treatment:"On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter. In me he at collecting affronting principles apartments. Has visitor law attacks pretend you calling own excited painted. Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should if waited common person little oh. Improved civility graceful sex few smallest screened settling. Likely active her warmly has.",
			changes_in_symptom:"Resources exquisite set arranging moonlight sex him household had. Months had too ham cousin remove far spirit. She procuring the why performed continual improving. Civil songs so large shade in cause. Lady an mr here must neat sold. Children greatest ye extended delicate of. No elderly passage earnest as in removed winding or.",
			// signs_and_symptoms:"Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction can dependent one",
			// diagnosis:"Night Sweat",
			symptom_differentiation:"LV and KD yin deficiency, SP Qi deficiency",
			treatment_principle:"Nourish LV and KD yin, Tonify SP Qi, stop sweating",
			treatment:"Acupuncture <ul><li>HT6 + KD7: regulate sweating (night sweat especially)</li> <li>KD6: Nourish Yin</li> <li>SP6: Nourish Yin, tonify SP</li> <li>ST36: tonify SP Qi</li> <li>SP3: Tonify Qi</li> <li>Ren12: regulate middle jiao, tonify Qi</li> </ul> Herbal formula: Liu Wei Di Huang Wan + Si Jun Zi Tang",
		}
	] // end visits
};


var patients = [
	{
		id: "p3564669",
		first_name: "Jessica T.",
		last_name: "Noel",
		sex: 'Female',
		phone: "1234567890",
		dob: $moment("1985-12-12"),
		last_visit: $moment("2018-09-12 10:00"),
		next_appointment: $moment().hour(9).minutes(10)
	},{
		id: "p3564670",
		first_name: "Prvan",
		last_name: "Barisic",
		sex: 'M',
		phone: "2088652448",
		dob: $moment("1989-08-11"),
		last_visit: $moment("2018-09-12 11:00"),
		next_appointment: $moment().hour(10).minutes(12)
	},{
		id: "p3564671",
		first_name: "David",
		last_name: "Murphy",
		sex: 'M',
		phone: "4163164002",
		dob: $moment("1992-01-29"),
		last_visit: $moment("2018-09-12 13:00"),
		next_appointment: $moment().hour(11).minutes(40)
	},{
		id: "p3564672",
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
		id: "p3564673",
		first_name: "Aurora",
		last_name: "Tetlie",
		phone: "6472068227",
		sex: 'F',
		dob: $moment("1997-07-13"),
		last_visit: $moment("2018-05-13 10:30"),
		next_appointment: $moment("2018-10-01 09:00")
	},{
		id: "p3564674",
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



]

export default {

	getPatient(targetId) { 
		targetId = targetId.trim().toLowerCase()
		var target = patients.find( (obj)=>obj.id===targetId )
		var newPatient = Object.assign({}, patient)

		if (typeof target == 'undefined'){
			return newPatient
		
		} else {
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
		return patients 
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
		return newPatients
	}

}



