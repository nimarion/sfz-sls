import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Startseite",
      path: "/",
      component: () => import("@/page/Startpage")
    },
    {
      name: "Impressum",
      path: "/impressum",
      component: () => import("@/page/Imprint")
    },
    {
      name: "Datenschutz",
      path: "/datenschutz",
      component: () => import("@/page/Privacy")
    },
    {
      name: "Workshops",
      path: "/workshop",
      component: () => import("@/page/Workshops")
    },
    {
      name: "Förderverein",
      path: "/förderverein",
      component: () => import("@/page/Förderverein")
    },
    {
      name: "Schülerlabore",
      path: "/schülerlabore",
      component: () => import("@/page/Labs")
    },
    {
      name: "E-Learning",
      path: "/e-learning",
      alias: "/elearning",
      component: () => import("@/page/Learning")
    },
    {
      name: "Über uns",
      path: "/about",
      alias: "/team",
      component: () => import("@/page/About")
    },
    {
      path: "/workshop/:name",
      component: () => import("@/page/WorkshopView")
    },
    {
      path: "/news/:year/:title",
      component: () => import("@/page/NewsView")
    },
    {
      path: "/news",
      component: () => import("@/page/NewsOverview")
    },
    {
      path: "/forschung",
      component: () => import("@/page/Forschung")
    },
    {
      path: "*",
      component: () => import("@/page/NotFound")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
