import {createRouter, createWebHistory} from "vue-router"
import home from '../views/HomeView'
import about from '../views/AboutView'
import post from '../views/PostView'

const routes = [
    {
        path: "/",
        component: home,
    },
    {
        path: "/about",
        component: about,
    },
    {
        path: "/post",
        component: post,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;