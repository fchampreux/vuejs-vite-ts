import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Legal from '@/views/Legal.vue';
import Community from "@/views/Community.vue";
import Education from "@/views/Education.vue";
import Governance from "@/views/Governance.vue";
import SearchResults from "@/views/SearchResults.vue";
import Services from "@/views/Services.vue";
import Solutions from "@/views/Solutions.vue";

const routes = [
    {path: '/', name: 'Home', component: Home },
    {path: '/legal', name: 'Legal', component: Legal },
    {path: '/community', name: 'Community', component: Community },
    {path: '/education', name: 'Education', component: Education },
    {path: '/governance', name: 'Governance', component: Governance },
    {path: '/search', name: 'SearchResults', component: SearchResults },
    {path: '/services', name: 'Services', component: Services },
    {path: '/solutions', name: 'Solutions', component: Solutions }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router