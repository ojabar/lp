export default defineNuxtPlugin((nuxtApp) => {
  console.log("Plugin initialized");

  // Only execute on client-side
  // if (process.client) {
  //   nuxtApp.vueApp.mixin({
  //     mounted() {
  //       const { locale } = useI18n();

  //       const updateHtmlAttributes = () => {
  //         const html = document.documentElement;
  //         html.setAttribute("lang", locale.value);
  //         html.setAttribute("dir", locale.value === "ar" ? "rtl" : "ltr");
  //       };

  //       // Initial update
  //       updateHtmlAttributes();

  //       // Watch for changes in locale
  //       watch(locale, updateHtmlAttributes);
  //     }
  //   });
  // }
  // const { $i18n } = useNuxtApp();
  // if (!nuxtApp.ssrContext) {
  //   const html = document.documentElement;
  //   html.setAttribute("lang", $i18n.locale.value);
  //   html.setAttribute("dir", $i18n.locale.value === "ar" ? "rtl" : "ltr");
  // }
});
