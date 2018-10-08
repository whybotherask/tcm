
import Vue            from 'vue'
import Router         from 'vue-router'
import PatientList    from '@/components/PatientList'
import Patient        from '@/components/PatientProfile'
import AddNewPatient  from '@/components/AddNewPatient'
import SearchResults  from '@/components/SearchResults'
import Login          from '@/components/Login'

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      path: '/add_patient',
      name: 'Add New Patient',
      component: AddNewPatient
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
