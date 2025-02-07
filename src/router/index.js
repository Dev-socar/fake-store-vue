import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductsView.vue"),
    },
    {
      path: "/product/:id",
      name: "product-details",
      component: () => import("@/views/ProductDetailsView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartView.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/views/ResumeView.vue"),
    },
    {
      path: "/:pathMatch(.*)*", // Ruta 404 (debe ir al final)
      name: "not-found",
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

export default router;
