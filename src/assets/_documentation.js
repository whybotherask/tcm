/*
 * retrieve_patient 
 * 
 */
var response = {

	id:"p6595120",

	personal_info: {
		first_name: "Thomas",
		last_name: "Shelby",
		sex: "M",
		age: "35",
		dob: $moment("1985-12-12"),
		phone: "1234567890",
		address: "123 Main St, Birminghamm, England"
	},

	next_appointment: "",

	visits: [
		{	
			entry_id: "v0092",
			datetime: $moment("2018-08-25 13:00"),
			pracitioner: "Royce Liu",
			chief_complaint: "",
			symptoms_and_signs: "",
			pulse_and_tongue: "",
			diagnosis: "",
			changes_in_symptom: "Insomia for 2 months",
			symptom_differentiation: "Liver Qi stagnation, disharmony between Spleen and Liver",
			treatment: "Acupuncture\n<ul> <li>An Mian: treats Insomnia </li> <li> HT7: calm mind, benefit HT</li> <li>SP6: Calm mind, harmonize LV, SP, KD</li> <li>Yin Tang: Calm mind</li> <li>LI4, LV3: Sooth LV qi, ensure free flow of Qi</li> <li>PC6: Sooth Jue Yin Qi,</li> <li>UB18: back shu of Liver: harmonize Liver</li> <li>UB15: back shu of HT: harmonize Heart, calm mind</li> <li>LV13: Front-Mu of Spleen, harmonize LV and Spleen</li></ul> Herbal Formula: Xiao Yao San <ul><li>Soothe Liver Qi, Harmonize Spleen and Liver</li></ul>",
			patient_feedback: "Soothe Liver Qi, Harmonize spleen and liver, calm mind",
		}, {	
			entry_id: "v0091",
			datetime: $moment("2018-07-22 11:20"),
			pracitioner: "Royce Liu",
			chief_complaint: "",
			history_of_present_illness: "",
			general_information: "",
			lifestyle: "",
			past_history: "",
			general_appearance: "",
			tongue: "",
			listening_and_smell: "",
			pulse_left: "",
			pulse_right: "",
			summary_of_signs_and_symptoms: "",
			diagnosis: "",
			syndrome_differentiation: "",
			treatment: "",
		}
	] // end visits
};

/*
 * list_patient 
 * 
 */
var response = [
	{
		id: "p3564669",
		first_name: "Jessica T.",
		last_name: "Noel",
		sex: 'Female',
		phone: "1234567890",
		dob: $moment("1985-12-12"),
		last_visit: $moment("2018-09-12 10:00"),
		next_appointment: $moment("2018-12-12 09:00")
	},{
		id: "p3564670",
		first_name: "Prvan",
		last_name: "Barisic",
		sex: 'M',
		phone: "2088652448",
		dob: $moment("1989-08-11"),
		last_visit: $moment("2018-09-12 11:00"),
		next_appointment: $moment("2018-12-12 09:00")
	},{
		id: "p3564671",
		first_name: "David",
		last_name: "Murphy",
		sex: 'M',
		phone: "4163164002",
		dob: $moment("1992-01-29"),
		last_visit: $moment("2018-09-12 13:00"),
		next_appointment: $moment("2018-12-12 09:00")
	}
]


