<template>
  <div class="checkout">
    <LayoutContainer>
      <BaseHeadLine size="xl" class="checkout-title">
        {{ title }}
      </BaseHeadLine>
      <FormCheckout :data="data" />
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import type { ProductPageType } from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<ProductPageType>,
  },
  title: {
    type: String,
  },
});
</script>

<style lang="scss">
$checkout: ".checkout";

#{$checkout} {
  @apply pt-8 pb-8 bg-gradient-to-b from-secondary via-secondary-light to-secondary;
  &-title {
    @apply text-black text-center font-bold mb-4;
  }
}
</style>
