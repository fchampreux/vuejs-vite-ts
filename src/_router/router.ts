
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Legal from '@/views/Legal.vue';import Community from "./views/Community.vue";
import Education from "@/views/Education.vue";
import Governance from "@/views/Governance.vue";
import SearchResults from "@/views/SearchResults.vue";
import Services from "@/views/Services.vue";
import Solutions from "@/views/Solutions.vue";
//import App from "./App.vue";

const routes = [
    {path: '/', name: 'Home', component: Home },
    {path: '/legal', name: 'Legal', component: Legal }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router