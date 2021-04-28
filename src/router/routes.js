const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/LandingPage.vue")
      },
      {
        path: "auth/:provider",
        component: () => import("pages/auth/AuthRedirectPage.vue")
      }
    ]
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
