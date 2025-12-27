import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ICC2024Detail from '../views/ICC2024Detail.vue'
import FIRSTAcademyDetail from '../views/FIRSTAcademyDetail.vue'
import OceanHeroesDetail from '../views/OceanHeroesDetail.vue'
import AllCanSTEMDetail from '../views/AllCanSTEMDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work/icc-2024',
    name: 'ICC2024Detail',
    component: ICC2024Detail
  },
  {
    path: '/work/first-academy',
    name: 'FIRSTAcademyDetail',
    component: FIRSTAcademyDetail
  },
  {
    path: '/work/ocean-heroes',
    name: 'OceanHeroesDetail',
    component: OceanHeroesDetail
  },
  {
    path: '/work/all-can-stem',
    name: 'AllCanSTEMDetail',
    component: AllCanSTEMDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

