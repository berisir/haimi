import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/home'
import HomeIndex from '@/view/home/children/index'
import HomeJujia from '@/view/home/children/Jujia'

import Classify from '@/view/classify'
import classContent from '@/view/classify/children'
import classList from '@/view/classify/component/classList'

import shopIndex from '@/view/shop'

import loginIndex from '@/view/login'

import shopCart from '@/view/shopCart'

import search from '@/view/search'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Home/homeChild2'
    },
    {
      path: '/Home',
      name: 'Home',
      redirect: '/Home/homeChild2',
      component: Home,
      children: [
        {
          path: 'homeChild2',
          component: HomeIndex
        },
        {
          path: 'homeChild3',
          component: HomeJujia
        },
        {
          path: 'homeChild13',
          component: HomeJujia
        },
        {
          path: 'homeChild12',
          component: HomeJujia
        },
        {
          path: 'homeChild8',
          component: HomeJujia
        },
        {
          path: 'homeChild9',
          component: HomeJujia
        },
        {
          path: 'homeChild4',
          component: HomeJujia
        },
        {
          path: 'homeChild11',
          component: HomeJujia
        },
        {
          path: 'homeChild14',
          component: HomeJujia
        },
        {
          path: 'homeChild7',
          component: HomeJujia
        },
        {
          path: 'homeChild5',
          component: HomeJujia
        }
      ]
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify,
      redirect: '/Classify/classContent',
      children: [
        {
          path: 'classContent',
          component: classContent
        },
        {
          path: 'ClassList',
          component: classList
        }
      ]
    },
    {
      path: '/shopIndex',
      name: 'shopIndex',
      component: shopIndex,
      beforeEnter : (to, from, next) => {
        var user = window.localStorage["userMsg"];
        if( !user ){
          next({ path: '/loginIndex', query:{"to":to.name} });
        }else{
          next();
        }
      }
    },
    {
      path: '/loginIndex',
      name: 'loginIndex',
      component: loginIndex
    },
    {
      path: '/shopCart',
      name:'shopCart',
      component: shopCart
    },
    {
      path:'/search',
      name:'search',
      component: search
    }
  ]
})
