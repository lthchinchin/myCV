import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Hieu from '../components/Hieu.vue'
import Error from '../components/404.vue'

Vue.use(VueRouter)
const routes = [
    { path: '/home', component: HelloWorld },
    { path: '/', component: Hieu },
    { path: '/hieu', component: Hieu },
    { path: '/*', component: Error }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router