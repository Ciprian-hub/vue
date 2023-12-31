import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Surveys from "../views/Surveys.vue";
import SurveyPublicView from "../views/SurveyPublicView.vue";
import SurveyView from "../views/SurveyView.vue";
import AuthLayout from "../components/AuthLayout.vue";
// import HomeLandingPage from "../components/HomeLandingPage.vue"
import Home from "../views/Home.vue"
import store from "../store";

const routes = [
    {
        path: "/view/survey/:slug",
        name: "SurveyPublicView",
        component: SurveyPublicView
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {path: '/dashboard', name: 'Dashboard', component: Dashboard},
            {path: '/surveys', name: 'Surveys', component: Surveys},
            {path: '/surveys/create', name: 'SurveyCreate', component: SurveyView},
            {path: '/surveys/:id', name: 'SurveyView', component: SurveyView},
        ]
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {isGuest: true},
    },
    {
        path: '/Auth',
        redirect: '/Login',
        name: 'Auth',
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'Home'})
    } else if(store.state.user.token && to.meta.isGuest)  {
        next({name: 'Dashboard'})
    } else {
        next()
    }
})

export default router