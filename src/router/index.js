import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/HomeView.vue";
import BookingView from "@/views/BookingView.vue";

const router = createRouter({
  history: createWebHistory("#"),
  routes: [
    { path: "/", name: "index", component: Index },
    { path: "/booking", name: "booking", component: BookingView },
  ],
});

export default router;
