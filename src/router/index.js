import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    props: true,
  },

  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "destinationDetails" */ "../views/DestinationDetails.vue"
      ),
    props: true,
    children: [
      {
        path: "/destination/:slug/:experienceSlug",
        name: "ExperienceDetail",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experienceDetails" */ "../views/ExperienceDetail.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),

  mode: "history",
  linkExactActiveClass: "vue-school-active-nav",
  routes,
});

export default router;
