import { createRouter, createWebHistory } from "vue-router";
import { Home } from "@/views";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: Home,
      path:"/"
    },
    {
      component: () => import("../views/About.vue"),
      path:"/about"
    },
    {
      component: () => import("../components/Present.vue"),
      path:"/present"
    },
    {
      component: () => import("../components/Past.vue"),
      path:"/past"
    },
    {
      component: () => import("../components/Future.vue"),
      path:"/future"
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});

export default router;
