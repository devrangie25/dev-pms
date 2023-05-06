import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { authGuard, guestGuard } from '../guards';

import Home from "../views/authenticated/Home.vue";
import Error from "../views/Error.vue";
import Projects from "../views/authenticated/Projects.vue";
import Profile from "../views/authenticated/Profile.vue";
import Settings from "../views/authenticated/Settings.vue";
import Calendar from "../views/authenticated/Calendar.vue";
import Revenue from "../views/authenticated/Revenue.vue";
import Blank from "../views/Blank.vue";

// For Authentication
import Login from '../views/public/Login.vue';
import Signup from '../views/public/Signup.vue';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            layout: 'AuthenticatedLayout',
            icon: "",
            auth: true,
        },
        beforeEnter: authGuard,
    },
    {
        path: "/projects",
        name: "projects",
        component: Projects,
        meta: {
            layout: 'AuthenticatedLayout',
            icon: "",
            auth: true,
        },
        beforeEnter: authGuard,
    },
    {
        path: "/user",
        name: "user",
        component: Profile,
        meta: {
            layout: 'AuthenticatedLayout',
            icon: "",
            auth: false,
        },
        beforeEnter: authGuard,
    },
    {
        path: "/settings",
        name: "settings",
        component: Settings,
        meta: {
            layout: 'AuthenticatedLayout',
            icon: "",
            auth: true,
        },
        beforeEnter: authGuard,
    },
    {
        path: "/calendar",
        name: "calendar",
        component: Calendar,
        meta: {
            layout: 'AuthenticatedLayout',
            icon: "",
            auth: true,
        },
        beforeEnter: authGuard,
    },
    {
        path: "/revenue",
        name: "revenue",
        component: Revenue,
        meta: {
            layout: 'AuthenticatedLayout',
            icon: "",
            auth: true,
        },
        beforeEnter: authGuard,
    },
    {
        path: '/auth/login',
        name: 'login',
        component: Login,
        meta: {
            layout: 'PublicLayout',
            icon: "",
            auth: false,
        },
        beforeEnter: guestGuard,
    },
    {
        path: '/auth/signup',
        name: 'signup',
        component: Signup,
        meta: {
            layout: 'PublicLayout',
            icon: "",
            auth: false,
        },
        beforeEnter: guestGuard,
    },
    {
        path: "/blank",
        name: "blank",
        component: Blank,
        meta: {
            layout: 'BlankLayout',
            icon: "",
            auth: false,
        },
    },
    {
        path: "/:catchAll(.*)",
        component: Error,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.APP_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.name !== 'login' && !authStore.isAuthenticated && from.name !== 'login') {
      next({ name: 'login' });
    } else {
      next();
    }
  });

export default router;
