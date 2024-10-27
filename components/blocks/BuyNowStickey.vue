<template>
  <div class="blockBuyNow">
    <LayoutContainer>
      <div
        class="flex justify-between items-center text-white font-medium text-xl"
      >
        <BaseButton
          type="secondary"
          class="min-w-[200px]"
          @click="focusFullName"
        >
          {{ $t("button.buyNow") }}
          <Icon icon="solar:cart-bold" :width="24" :ssr="true" />
        </BaseButton>
        <div class="flex flex-col">
          <span class="line-through text-secondary text-xs">
            {{ topBanner?.priceBar }} {{ $t("currency") }}
          </span>
          <span>{{ topBanner?.price }} {{ $t("currency") }}</span>
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import type { ComponentBlockTopBanner } from "~/types/ProductGetType";
import { focusFullName } from "@/utils/scrollToCheckout";

const locale = ref("ar");
const { productPageBody } = useProductPage(locale);

const topBanner = computed(() => {
  return productPageBody.value?.body?.find(
    (item) => item.__typename === "ComponentBlockTopBanner"
  ) as ComponentBlockTopBanner;
});
</script>

<style lang="scss">
$blockBuyNow: ".blockBuyNow";

#{$blockBuyNow} {
  @apply fixed bottom-0 left-0 w-full bg-primary-dark z-50
  py-5;
}
</style>
