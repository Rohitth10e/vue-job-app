import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NoRouteView from "@/views/NoRouteView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const route=[{path:'/',name:'home',component:HomeView},{path:'/jobs',name:'jobs',component:JobsView},{path:'/:pathMatch(.*)',component:NoRouteView},{path:'/jobs/:id',name:'job',component:JobView,props:true},{path:'/jobs/add',name:'add job',component:AddJobView},{path:'/edit/:id',name:'edit job',component:EditJobView}]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:route
})

export default router