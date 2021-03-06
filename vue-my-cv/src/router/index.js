import Vue from 'vue'
import VueRouter from 'vue-router'
import Error from '../components/404.vue'
import Contact from '../components/Contact.vue'
import index from '../components/index.vue'
import nav from '../components/nav.vue'
import about from '../components/about.vue'
// import store from '../store'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: index },
    { path: '/home', component: index },
    { path: '/contact', component: Contact },
    { path: '/nav', component: nav },
    { path: '/about', component: about },
    { path: '/*', component: Error }
]



const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router