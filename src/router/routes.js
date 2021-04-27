const routes = [
  {
    path: "/",
    component: () => import("pages/PageMain.vue")
  },

  {
    path: "/game",
    component: () => import("pages/PageGame.vue")
  },

  {
    path: "/canvas",
    component: () => import("components/Canvas.vue") // Kill me
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
