import HomePage from "@pages/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";
import ProjectPage from "@pages/ProjectPage.vue";
import ProjectDetailsPage from "@pages/ProjectDetailsPage.vue";
import BlogPage from "@pages/BlogPage.vue";
import BlogDetailsPage from "@pages/BlogDetailsPage.vue";
import NotFoundPage from "@pages/NotFoundPage.vue";

const routes = [
  {path: "", component: HomePage},
  {path: "/", component: HomePage},
  {path: "/home", redirect: "/"},
  {path: "/index", redirect: "/"},
  {path: "/:pathMatch(.*)*", component: NotFoundPage},
  {path: "/project", component: ProjectPage},
  {path: "/project/:projectId", component: ProjectDetailsPage},
  {path: "/blog", component: BlogPage,},
  {path: "/blog/:blogId", component: BlogDetailsPage},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
