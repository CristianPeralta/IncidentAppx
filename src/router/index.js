import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Home from '@/components/Home'
import NewDependence from '@/components/NewDependence'
import SignUp from '@/components/SignUp'

import Section from '@/components/Section'
import UsersView from '@/components/Views/UsersView'
import SolicitudesView from '@/components/Views/SolicitudesView'
import DependencesView from '@/components/Views/DependencesView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/dependence/create',
      name: 'NewDependence',
      component: NewDependence
    },
    {
      path: '/section/:name',
      name: 'Section',
      component: Section
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersView
    },
    {
      path: '/solicitudes',
      name: 'Solicitudes',
      component: SolicitudesView
    },
    {
      path: '/dependences',
      name: 'Dependences',
      component: DependencesView
    }

  ]
})
