import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layouts/AdminLayout.vue";
import HomeLayout from "../layouts/HomeLayout.vue";

const routes = [
    { path: '/', component: HomeLayout, },
    { path: '/admin', component: AdminLayout},
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

export default router;