<template>
  <div class="topBanner">
    <span class="topBanner-sold"> تخفيض </span>
    <LayoutContainer>
      <BaseHeadLine name="h1" size="xl" class="text-white">
        {{ data?.title }}
      </BaseHeadLine>
      <div class="topBanner-stitle">
        <strong> {{ data?.subTitle }} </strong>
      </div>
      <div class="topBanner-img">
        <div class="topBanner-price">
          {{ data?.price }} {{ $t("currency") }}
        </div>
        <NuxtImg
          v-for="img in data?.topBannerImage"
          class="w-full"
          :src="img.url"
        />
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import type { ProductPageBody } from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<ProductPageBody>,
  },
});
</script>

<style lang="scss">
$topBanner: ".topBanner";

#{$topBanner} {
  @apply bg-gradient-to-b from-primary to-transparent
  pt-14 pb-8 bg-no-repeat relative overflow-hidden;
  background-position-y: -94px;

  &-sold {
    @apply bg-secondary text-white font-bold text-xl
    px-10 text-center w-72 py-2 leading-none
    absolute -rotate-45 left-[-96px] top-[30px];
  }

  &-stitle {
    @apply mt-2 mb-12;
    strong {
      @apply inline-block bg-primary-dark text-white rounded-full
      px-3 py-1 text-xs;
    }
  }
  &-img {
    @apply w-full max-w-[334px] mx-auto pb-[70px] relative;

    &::after {
      content: "";
      background: radial-gradient(
        102.8% 89.46% at 54.43% 62.96%,
        rgb(0 0 0 / 16%) 0%,
        rgb(0 0 0 / 0%) 40%
      );
      @apply w-full h-20 absolute rounded-[100%] bottom-0;
    }
  }
  &-price {
    @apply absolute top-4 left-0
     bg-primary  
     text-xl font-semibold text-white px-4 py-2;
  }
}
</style>
