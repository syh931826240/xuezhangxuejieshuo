import Vue from 'vue'
import Router from 'vue-router'
import sy from '../components/sy'
import xieblog from '../components/xieblog'
import details from '../components/blogdetails'
import grzy from '../components/grzy'
import login from '../components/login'
import register from '../components/register'
import cs from '../components/cs'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: "/sy"
    },

    {
      path: '/sy',
      name: 'sy',
      component: sy
    },
    {
      path: '/details/:did',
      name: 'details',
      component: details,
      children: [{
        path: "cs/:id",
        component: cs
      }]
    },
    {
      path: '/grzy',
      name: 'grzy',
      component: grzy
    },
    {
      path: '/login',
      name: 'login',
      component: login

    },
    {
      path: '/register',
      name: 'register',
      component: register

    },
    {
      path: '/xieblog',
      name: 'xieblog',
      component: xieblog

    },
  ]
})
