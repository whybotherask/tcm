
/*
  Exports our data store.
*/
const CafeAPI = "https://"

import Vue from 'vue'
import Vuex from 'vuex'
import Data from './assets/data.js'
import moment from 'moment'

window.a = Data

Vue.use(Vuex)

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

    createFollowup ( { commit }, data ) {
      commit( 'addVisit', data.visit )
      commit( 'setNextAppointment', data.next_appointment )
    },

    loadCafes( { commit } ){
      commit( 'setCafesLoadStatus', 1 )

      CafeAPI.getCafes()
        .then( function( response ){
          commit( 'setCafes', response.data )
          commit( 'setCafesLoadStatus', 2 )
        })
        .catch( function(){
          commit( 'setCafes', [] )
          commit( 'setCafesLoadStatus', 3 )
        })
    },  // end loadCafes()

    loadCafe( { commit }, data ){
      commit( 'setCafeLoadStatus', 1 )

      CafeAPI.getCafe( data.id )
        .then( function( response ){
          commit( 'setCafe', response.data )
          commit( 'setCafeLoadStatus', 2 )
        })
        .catch( function(){
          commit( 'setCafe', {} )
          commit( 'setCafeLoadStatus', 3 )
        })
    },   // end loadCafe()

    loadNewPatientList({ commit }) {
      commit( 'setNewPatientListLoadStatus', 0 )
      setTimeout( function () {
        var res = Data.getNewPatientList()
        commit( 'setNewPatientList', res )
        commit( 'setNewPatientListLoadStatus', 2 )
      }, 1300)
    },

    loadPatientList( { commit } ) {
      commit( 'setPatientListLoadStatus', 0 )
      setTimeout( function () {
        var res = Data.getPatientList()
        commit( 'setPatientList', res )
        commit( 'setPatientListLoadStatus', 2 )
      }, 100)
    }, // end loadPatientList()

    loadPatient( { commit }, data ) {
      commit( 'setPatientLoadStatus', 0 )
      setTimeout( function () {
        var res = Data.getPatient( data.id )
        commit( 'setPatient', res )
        commit( 'setPatientLoadStatus', 2 )
      }, 600)
    }, // end loadPatient()

    loadSearchResults( { commit }, query ) {
      commit( 'setSearchResultsLoadStatus', 0 )
      setTimeout( function () {
        var res = Data.getSearchResults( query.type, query.data )
        commit( 'setSearchResults', res )
        commit( 'setSearchResultsLoadStatus', 2 )
      }, 600) 
    },  // end loadSearchResults()

    updatePatientName( { commit }, name ) {
      commit( 'setPatientName', name)
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

    setPatientLoadStatus( state, status ) {
      state.patientLoadStatus = status
    },

    setNewPatientList( state, newPatientList ) {
      state.newPatientList = newPatientList
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
      visit.id = "p12355"
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

    getPatient( state ) {
      return state.patient
    },

    getPatientLoadStatus( state ) {
      return state.patientLoadStatus
    },

    getNewPatientList( state) {
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




