import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
