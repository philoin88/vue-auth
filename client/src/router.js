import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Forgot from './components/Forgot'
import Reset from './components/Reset'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/forgot',
      component: Forgot
    },
    {
      path: '/reset/:token',
      component: Reset
    }
  ]
})