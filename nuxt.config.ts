// https://nuxt.com/docs/api/configuration/nuxt-config

import routesI18N from "./i18n/routesI18N";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL,
      firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      },
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/strapi",
    "@nuxtjs/apollo",
  ],
  vite: {
    vue: {
      template: {},
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/_font.scss" as *;
             @use "@/assets/scss/_colors.scss" as *;`,
        },
      },
    },
  },
  css: ["~/assets/scss/global.scss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
    locales: [
      { code: "ar", iso: "ar", dir: "rtl" },
      // { code: "fr", iso: "fr" },
    ],
    defaultLocale: "ar",
    strategy: "prefix_except_default",
    customRoutes: "config",
    pages: routesI18N,
  },

  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    admin: "/admin",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${
          process.env.STRAPI_URL || "http://localhost:1337"
        }/graphql`,
      },
    },
  },
});
