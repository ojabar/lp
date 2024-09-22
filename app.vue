<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
useHead({
  htmlAttrs: { dir: locale.value === "ar" ? "rtl" : "ltr", lang: locale.value },
});
</script>
