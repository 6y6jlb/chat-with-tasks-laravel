
export const PRIVATE_ROUTES = {
    ABOUT: 'about',
    DASHBOARD: 'dashboard',
    CHAT: 'chat',
    MESSAGES: 'messages',
    LOGOUT: 'logout',
    REFRESH: 'resfresh',
    USER: 'user',
};


export default [
    {
        path:  `/${PRIVATE_ROUTES.ABOUT}`,
        component: () => import('../pages/About.vue'),
        name: 'about',
    },
    {
        path: `/${PRIVATE_ROUTES.DASHBOARD}`,
        component: () => import('../pages/Dashboard.vue'),
        name: 'dashboard',
    },
    
    {
        path:  `/${PRIVATE_ROUTES.CHAT}`,
        component: () => import('../pages/Chat.vue'),
        name: 'chat'
    },
    
    // {
    //     path: 'projects',
    //     component: () => import('../pages/Projects.vue'),
    //     name: 'projects'
    // },
    // {
    //     path: 'project',
    //     component: () => import('../pages/Project.vue'),
    //     name: 'project'
    // }
];