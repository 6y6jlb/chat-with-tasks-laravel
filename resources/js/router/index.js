import { createRouter, createWebHistory } from 'vue-router';
import privateRoutes from './private';
import publicRoutes from './public';

export default createRouter({
    history: createWebHistory(),
    routes: [
        ...privateRoutes,
        ...publicRoutes
    ]
});