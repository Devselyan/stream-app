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
      path:"/present",
      name: "presentView"
    },
    {
      component: () => import("../components/Past.vue"),
      path:"/past",
      name: "pastView"
    },
    {
      component: () => import("../components/Future.vue"),
      path:"/future",
      name: "futureView"
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});

export default router;
