import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/carts",
      name: "carts",
      component: () => import("../views/CartsView.vue"),
    },
  ],
});

export default router;
