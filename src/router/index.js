import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import Signup from "../views/Signup";
import CreatePlan from "../views/Plans/CreatePlan";
import EditPlan from "../views/Plans/EditPlan";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/createPlan",
    name: "CreatePlan",
    component: CreatePlan,
  },
  {
    path: "/editPlan/:id",
    name: "EditPlan",
    component: EditPlan,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
