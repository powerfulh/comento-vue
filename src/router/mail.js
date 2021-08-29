import store from '../store'

export default[
    {
        path:'/mail',
        name:'mail',
        component:() => import('../views/mail/page.vue'),
        beforeEnter: (to, from, next) => {
            if(from.path == to.path) return
            if(store.state.common.sid == '') next('/')
            else next()
        },
        children: [
            {
                path: '/',
                component: () => import('../views/mail/list.vue')
            },
            {
                path: 'detail',
                name: 'mail detail',
                component: () => import('../views/mail/detail.vue'),
                props: true
            }
        ]
    }
]