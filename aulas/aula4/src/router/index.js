import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import ContactSubmit from '../views/ContactSubmit.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: About
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contact
    },
    {
        path: '/contato-submit',
        name: 'ContatoSubmit',
        component: ContactSubmit
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router