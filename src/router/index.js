import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Live from '../views/Live.vue'
import User from '../views/User.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/live', name: 'Live', component: Live },
    { path: '/user', name: 'User', component: User }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router