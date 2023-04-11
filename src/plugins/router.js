import { createWebHistory, createRouter } from "vue-router";
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import IntroPage from '@/views/IntroPage.vue'


const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { transition: 'route' }
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: { transition: 'route' }
  },
  {
    path: "/intro",
    name: "IntroPage",
    component: IntroPage,
    meta: { transition: 'route' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;