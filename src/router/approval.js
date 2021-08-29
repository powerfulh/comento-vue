import store from '../store'

export default[
    {
        path:'/approval',
        component:() => import('../views/approval/page.vue'),
        beforeEnter: (to, from, next) => {
            if(from.path == to.path) return
            if(store.state.common.sid == '') next('/')
            else next()
        },
        children: [
            {
                path: '/',
                component: () => import('../views/approval/list.vue')
            },
            {
                path: 'write',
                name: 'approval write',
                component: () => import('../views/approval/write.vue')
            },
            {
                path: 'detail',
                name: 'approval detail',
                component: () => import('../views/approval/detail.vue'),
                props: true
            }
        ]
    }
]