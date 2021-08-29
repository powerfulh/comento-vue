import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import mail from './mail'
import approval from './approval'

Vue.use(VueRouter)

const routes = [
    ...mail,
    ...approval,
    {
        path:'/',
        name:'loginPage',
        component:() => import('../views/loginPage.vue'),
        beforeEnter: (to, from, next) => {
			if(store.state.common.sid != '') store.state.common.sid = 0
            next()
        }
    },
    {
        path:'/main',
        name:'main',
        component:() => import('../views/main.vue'),
        beforeEnter: (to, from, next) => {
            if(store.state.common.sid == '') {
                if(from.path != '/') next('/')
            }
            else next()
        }
    }
]

const router = new VueRouter({
    mode:'history',
    // base:
    routes
})

export default router