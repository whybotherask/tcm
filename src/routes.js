
import Vue            from 'vue'
import Router         from 'vue-router'
import PatientList    from '@/components/PatientList'
import Patient        from '@/components/PatientProfile'
import NewPatientProfile  from '@/components/NewPatientProfile'
import NewPatientEntry    from '@/components/NewPatientEntry'
import NewPatientHome  from '@/components/NewPatientHome'
import SearchResults  from '@/components/SearchResults'
import Login          from '@/components/Login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'Patient List',
      component: PatientList
    },{
      path: '/patient/:id',
      name: 'Patient Profile',
      component: Patient
    },{
      path: '/new_patient',
      name: 'New Patient Home',
      component: NewPatientHome
    },{
      path: '/new_patient/:id/profile',
      name: 'New Patient Profile',
      component: NewPatientProfile
    },{
      path: '/new_patient/:id/entry',
      name: 'New Patient Entry',
      component: NewPatientEntry
    },{
      path: '/search/:type/:data',
      name: 'Search Patient',
      component: SearchResults
    },{
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
});
