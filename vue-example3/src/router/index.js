import Vue from "vue";
import VueRouter from "vue-router";
import HomeScreen from "../components/homescreen";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homescreen",
    component: HomeScreen
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
