import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/home/index.vue')
    },
    {
        path: '/category/:id',
        name: 'category',
        component: () => import('./pages/category/index.vue')
    },
];

const router = new Router({
    mode: 'history',
    routes,
});

export default router;
