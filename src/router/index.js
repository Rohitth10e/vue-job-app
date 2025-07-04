import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NoRouteView from "@/views/NoRouteView.vue";
import JobView from "@/views/JobView.vue";

const route=[{path:'/',name:'home',component:HomeView},{path:'/jobs',name:'jobs',component:JobsView},{path:'/:pathMatch(.*)',component:NoRouteView},{path:'/job/:id',name:'job',component:JobView}]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:route
})

export default router