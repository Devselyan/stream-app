import { createRouter, createWebHistory } from "vue-router";
import { Home } from "@/views";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: Home,
      path:"/"
    }
  ],
});

export default router;
