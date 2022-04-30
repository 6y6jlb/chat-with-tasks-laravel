export default [
    {
        path: '/about',
        component: () => import('../pages/About.vue'),
        name: 'about',
    },
    {
        path: '/',
        component: () => import('../pages/Dashboard.vue'),
        name: 'dashboard',
    },
    
    {
        path: '/chat',
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