import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const importView = (viewName: string) => {
  const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  return () => import(`../views/${capitalize(viewName)}.vue`);
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/traitmaker",
    name: "Trait Maker",
    component: importView("traitMaker"),
  },
  {
    path: "/builds",
    name: "Builds",
    component: importView("builds"),
  },
  {
    path: "/builds/vindicator/:name",
    name: "Vindicator",
    props: true,
    component: importView("vindicator"),
  },
  {
    path: "/builds/herald/:name",
    name: "Herald",
    props: true,
    component: importView("herald"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
