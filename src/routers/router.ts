import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layouts/AdminLayout.vue";
import HomeLayout from "../layouts/HomeLayout.vue";
import DashboardPage from "../modules/home/pages/DashboardPage.vue";
import ManageCardPage from "../modules/home/pages/ManageCardPage.vue";
import ManageIncomePage from "../modules/home/pages/ManageIncomePage.vue";
import ManageOutcomePage from "../modules/home/pages/ManageOutcomePage.vue";
import ManageSavingPage from "../modules/home/pages/ManageSavingPage.vue";

const routes = [
    { 
        path: '/', 
        component: HomeLayout,
        children: [
            { path: 'dashboard', component: DashboardPage },
            { path: 'card-management', component: ManageCardPage },
            { path: 'income', component: ManageIncomePage },
            { path: 'outcome', component: ManageOutcomePage },
            { path: 'saving', component: ManageSavingPage },
        ]
    },
    { path: '/admin', component: AdminLayout},
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

export default router;