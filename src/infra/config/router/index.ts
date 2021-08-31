import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/components/Home/index.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "order" */ '@/components/OrderHistory/index.vue')
    },
    {
        path: '/order-history',
        name: 'OrderHistory',
        component: () => import(/* webpackChunkName: "orderHistory" */ '@/components/OrderHistory/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
