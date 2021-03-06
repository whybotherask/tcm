
/*
  Exports our data store.
*/
const CafeAPI = "https://"
const TCM_API = "https://tcm-pt.herokuapp.com"

import Vue from 'vue'
import Vuex from 'vuex'
import Data from './assets/data.js'
import _ from 'lodash'
import moment from 'moment'

window.a = Data
window.m = moment

Vue.use(Vuex)

$.each( [ "put", "delete", "patch" ], function( i, method ) {
  $[ method ] = function( url, data, callback, type ) {
    if ( $.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    return $.ajax({
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    });
  };
});

function _mutatePatientData( raw ){

  const patientAttr = ["id", "last_visit", "next_appointment", "personal_info", "files"]

  var clean = _.pick( raw, patientAttr ) // keep only the needed attributes

  var visits = _.chain( raw.visits_dereferenced )
    .sortBy( (visit)=> -1*moment(visit.date_time).toDate() ) // sort by Javascript date from recent to oldest
    .map( (visit, index)=>{
      visit.visit_number = raw.visits_dereferenced.length - index // add visit_number to each visit - need to reverse order, last item is actually vist #1
      visit.date_time = moment(visit.date_time) // convert each date_time into moment object
      return visit
    })
    .value()  // de-reference _.chain

  clean.visits = visits 

  return clean
}



export default new Vuex.Store({
  /*
    Defines the state being monitored for the module.
  */
  state: {
    cafes: [],
    cafesLoadStatus: 0,

    cafe: {},
    cafeLoadStatus: 0,

    patientList: [],
    patientListLoadStatus: 0,

    patient: {},
    patientLoadStatus:0,

    searchResults: [],
    searchResultsLoadStatus: 0,

    newPatientList: [],
    newPatientListLoadStatus: 0,
  },

  /*
    Defines the actions used to retrieve the data.
  */
  actions: {

    createFollowup( { commit }, data ) {
      window.entry = data
      
      // update followup info 
      $.post( TCM_API + '/create_followup_visit/' + data.patient_id + '/', data.visit )
        .done( (res)=>{ 
          data.visit.id = res   // response is the id for the visit entry
          commit( 'addVisit', data.visit )
        })
        .fail( (data)=>console.log('/create_followup_visit failed:', data) )

      // update next_appointment time
      $.put( TCM_API + '/update_patient/' + data.patient_id, { 'next_appointment': data.next_appointment } )
        .done( (res) => commit( 'setNextAppointment', data.next_appointment ) )
        .fail( (data)=> console.log('/create_followup_visit failed:', data))
    },

    saveNewPatient( { commit, state }, param ) {
      let id = param.id
      let nextAppt = param.next_appointment
      var visit = param.visit
          visit.id = _.uniqueId('p')
          visit.datetime = moment.now()
          visit.practitioner = 'Royce Liu'
          visit.visit_number = 1

      // find the patient in question
      var patient = _.find( state.newPatientList, (item)=>{ return item.id === id } )
      if (! patient ) return 

      // set the first visit and next_appointment info. the id and personal_info is already there
      patient.next_appointment = nextAppt
      patient.visits = [ visit ]
      
      // commit to the database; converts new patient to a full patient
      Data.convertNewPatient( patient )
      // remove patient from new Patient array
      commit( 'addToPatientList', patient )
      commit( 'deleteFromPatientList', patient )      
    },

    loadCafes( { commit } ){
      commit( 'setCafesLoadStatus', 1 )

      CafeAPI.getCafes()
        .then( ( res )=>{
          commit( 'setCafes', res.data )
          commit( 'setCafesLoadStatus', 2 )
        })
        .catch( ()=>{
          commit( 'setCafes', [] )
          commit( 'setCafesLoadStatus', 3 )
        })
    },  // end loadCafes()

    loadNewPatientList({ commit }) {
      commit( 'setNewPatientListLoadStatus', 0 )
      setTimeout( ()=>{
        var res = Data.getNewPatientList()
        commit( 'setNewPatientList', res )
        commit( 'setNewPatientListLoadStatus', 2 )
      }, 1300)
    },

    loadPatientList( { commit } ) {
      commit( 'setPatientListLoadStatus', 0 )
      $.getJSON( TCM_API + '/list_patients/' )
        .done( ( res )=>{
          commit( 'setPatientList', res )
          commit( 'setPatientListLoadStatus', 2 )
        })
        .fail( () => { 
          commit( 'setPatientList', null )
          commit( 'setPatientListLoadStatus', 3 )
        })
    }, // end loadPatientList()

    loadPatient( { commit }, data ) {
      commit( 'setPatientLoadStatus', 0 )

      $.getJSON( TCM_API + '/retrieve_patient/' + data.id + '/' )
        .done( ( res )=>{
          commit( 'setPatient', _mutatePatientData(res) )  // cleaned up patient profile
          commit( 'setPatientLoadStatus', 2 )
        })
        .fail( ()=>{
          // commit( 'setPatient', null )
          console.log( '/retrieve_patient fail' )
          commit( 'setPatientLoadStatus', 3 )
        })
    }, // end loadPatientList()

    loadSearchResults( { commit }, query ) {
      commit( 'setSearchResultsLoadStatus', 0 )
      setTimeout( function () {
        var res = Data.getSearchResults( query.type, query.data )
        commit( 'setSearchResults', res )
        commit( 'setSearchResultsLoadStatus', 2 )
      }, 600) 
    },  // end loadSearchResults()

    updatePatientName( { commit }, name ) {
      commit( 'setPatientName', name )
    },

    updateNewPatient( { commit }, patient ) {
      commit( 'setNewPatient', patient )
      Data.updateNewPatient( patient )
    },

    cancelAppointment( { commit }, param ) {
      // var id = param.id
      commit( 'setNextAppointment', '' )
    },

    setAppointment( { commit }, param ) {
      // var id = param.id
      commit( 'setNextAppointment', param.next_appointment );
    },

  },  // end actions

  /*
    Defines the mutations used
  */
  mutations: {

    setCafesLoadStatus( state, status ){
      state.cafesLoadStatus = status
    },

    setCafes( state, cafes ){
      state.cafes = cafes
    },

    setCafeLoadStatus( state, status ){
      state.cafeLoadStatus = status
    },

    setCafe( state, cafe ){
      state.cafe = cafe
    },

    setPatientList( state, patientList ) {
      state.patientList = patientList
    },

    setPatientListLoadStatus( state, status ) {
      state.patientListLoadStatus = status
    },

    setPatient( state, patient ) {
      state.patient = patient
    },

    addToPatientList( state, patient ) {
      var patient = _.cloneDeep( patient )
      var index = state.patientList.findIndex( (item)=>{ return item.id === patient.id } )
      if ( index > -1 ) state.patientList[ index ] = patient
      else state.patientList.push( patient )
    },

    setPatientLoadStatus( state, status ) {
      state.patientLoadStatus = status
    },

    setNewPatient( state, patient ) {
      var p = _.find( state.newPatientList, (item)=>{ return item.id === patient.id } )
      if (p) Object.assign( p, patient ) // if the patient exists, overwrite with new data
    },

    setNewPatientList( state, newPatientList ) {
      state.newPatientList = _.cloneDeep( newPatientList )
    },

    deleteFromPatientList( state, patient ) {
      _.remove( state.patientList, (item)=>{ return item.id === patient.id } )
    },

    setNewPatientListLoadStatus( state, status ) {
      state.newPatientListLoadStatus = status
    },

    setPatientName( state, name ) {
      state.patient.personal_info.name = name
    },

    setSearchResultsLoadStatus( state, status ) {
      state.searchResultsLoadStatus = status
    },

    setSearchResults( state, results ) {
      state.searchResults = results
    },

    addVisit( state, visit ) {
      if (! state.patient) return ;
      if (! state.patient.visits ) state.patient.visits = []
      visit.id = _.uniqueId('p')
      visit.datetime = moment.now()
      visit.practitioner = 'Royce Liu'
      visit.visit_number = (state.patient.visits.length > 0)
                            ? state.patient.visits[0].visit_number + 1
                            : 1
      state.patient.visits.unshift( visit ) // add to start of array
    },

    setNextAppointment( state, value ){
      Data.setAppointment(value)
      state.patient.next_appointment = value
    },

  },  // end mutations

  /*
    Defines the getters used by the module
  */
  getters: {
    
    getCafesLoadStatus( state ){
      return state.cafesLoadStatus
    },

    getCafes( state ){
      return state.cafes
    },

    getCafeLoadStatus( state ){
      return state.cafeLoadStatus
    },

    getCafe( state ){
      return state.cafe
    },

    getTestMessage(){
      return 'Hi, Andy'
    },

    getPatientList( state ){
      return state.patientList
    },

    getPatientListLoadStatus( state ) {
      return state.patientListLoadStatus
    },

    getNewPatient: (state) => (id) => {
      return state.newPatientList.find( patient => patient.id === id.toString() )
    },

    getPatient( state ) {
      return state.patient
    },

    getPatientLoadStatus( state ) {
      return state.patientLoadStatus
    },

    getNewPatientList( state ) {
      return state.newPatientList
    },

    getNewPatientListLoadStatus( state ) {
      return state.newPatientListLoadStatus
    },

    getSearchResultsLoadStatus( state ) {
      return state.searchResultsLoadStatus
    },

    getSearchResults( state ) {
      return state.searchResults
    },

    getAutocompleteList() {
      return Data.getAutocompleteList()
    },

    getNextAppointment( state ) {
      if ( !state.patient.next_appointment || state.patient.next_appointment == null ) {
        return ""
      }
      else 
        return state.patient.next_appointment
    }
  } // end getters

}) // end  export default new Vuex.store({})




