// https://nuxt.com/docs/api/configuration/nuxt-config

import routesI18N from "./i18n/routesI18N";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@pinia/nuxt",
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
      { code: "fr", iso: "fr" },
    ],
    defaultLocale: "ar",
    strategy: "prefix_except_default",
    customRoutes: "config",
    pages: routesI18N,
  },

  routeRules: {
    // Apply the middleware globally
    "/*": { middleware: ["htmlprops"] },
  },
});
