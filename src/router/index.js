import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import People from "../views/People.vue";
import Films from "../views/Films.vue";
import Species from "../views/Species.vue";
import Vehicles from "../views/Vehicles.vue";
import Starships from "../views/Starships.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/People",
    name: "People",
    component: People,
  },
  {
    path: "/Films",
    name: "Films",
    component: Films,
  },
  {
    path: "/Species",
    name: "Species",
    component: Species,
  },
  {
    path: "/Vehicles",
    name: "Vehicles",
    component: Vehicles,
  },
  {
    path: "/People",
    name: "People",
    component: People,
  },
  {
    path: "/Starships",
    name: "Starships",
    component: Starships,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
