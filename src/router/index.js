import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NoRouteView from "@/views/NoRouteView.vue";

const route=[{path:'/',name:'home',component:HomeView},{path:'/jobs',name:'jobs',component:JobsView},{path:'/:pathMatch(.*)',component:NoRouteView}]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:route
})

export default router