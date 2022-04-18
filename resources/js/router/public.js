export default [
    {
        path: '/',
        component: () => import('../pages/Home.vue'),
        name: 'home'
    },
    {
        path: '/login',
        component: () => import('../pages/Login.vue'),
        name: 'login',
        label: 'sign in'
    },
    {
        path: '/register',
        component: () => import('../pages/Registration.vue'),
        name: 'register'
    },
    {
        path: '/about',
        component: () => import('../pages/About.vue'),
        name: 'about'
    },
];