<template>
  <footer class="appFooter">
    <LayoutContainer>
      <BaseHeadLine size="lg"> تواصل معانا ! </BaseHeadLine>
      <hr class="opacity-20 my-3" />
      <ul class="flex flex-col gap-y-3 my-5">
        <li v-for="sm in productPageBody?.socialMedia">
          <NuxtLink
            class="inline-flex font-semibold gap-x-3 items-center"
            :to="sm.link"
          >
            <span
              class="flex items-center justify-center bg-white text-primary rounded-md p-2"
            >
              <Icon v-if="sm.icon?.value" :icon="sm.icon?.value" />
            </span>
            {{ sm.text }}
          </NuxtLink>
        </li>
      </ul>
      <hr class="opacity-20 my-3" />
      <div class="text-sm mt-8 flex">
        <Icon icon="ph:copyright" class="text-sm me-1 mt-1" />
        <span>{{ $t("shopname") }} 2024</span>
      </div>
    </LayoutContainer>
  </footer>
</template>

<script setup lang="ts">
import { productAr, productFr } from "@/public/db";

const locale = ref("ar"); // Or however you manage locale in your project

const productPageBody = computed(() => {
  if (locale.value === "ar") {
    return productAr.product;
  } else {
    return productFr.product;
  }
});
</script>

<style lang="scss">
$appFooter: ".appFooter";

#{$appFooter} {
  @apply bg-primary text-white pt-8 pb-10;
}
</style>
