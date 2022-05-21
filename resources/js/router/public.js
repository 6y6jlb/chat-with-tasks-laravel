
export const PUBLIC_ROUTES = {
    HOME: '',
    LOGIN: 'login',
    CHAT: 'chat',
    REGISTER: 'register',
    ABOUT: 'about'
};


export default [
    {
        path: `/${PUBLIC_ROUTES.HOME}`,
        component: () => import('../pages/Home.vue'),
        name: 'home'
    },
    {
        path: `/${PUBLIC_ROUTES.LOGIN}`,
        component: () => import('../pages/Login.vue'),
        name: 'login',
        label: 'sign in'
    },
    {
        path: `/${PUBLIC_ROUTES.REGISTER}`,
        component: () => import('../pages/Registration.vue'),
        name: 'register'
    },
    {
        path: `/${PUBLIC_ROUTES.ABOUT}`,
        component: () => import('../pages/About.vue'),
        name: 'about'
    },
    {
        path: `/${PUBLIC_ROUTES.CHAT}`,
        component: () => import('../pages/Chat.vue'),
        name: 'chat'
    },
];