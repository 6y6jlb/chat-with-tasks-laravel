export default [
    {
        path: '/',
        component: () => import('../pages/Home.vue'),
        name: 'home'
    },
    {
        path: '/about',
        component: () => import('../pages/About.vue'),
        name: 'about'
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