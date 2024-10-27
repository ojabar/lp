<template>
  <!-- <LayoutContainer> -->
  <div class="checkout">
    <div class="border-b-2 border-secondary py-3 bg-secondary">
      <BaseHeadLine size="xl" class="checkout-title">
        {{ data?.title }}
      </BaseHeadLine>
    </div>
    <div class="px-5 py-5">
      <FormCheckout />
    </div>
  </div>
  <!-- </LayoutContainer> -->
</template>

<script setup lang="ts">
import type { ComponentFromCheckout } from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<ComponentFromCheckout>,
  },
});
</script>

<style lang="scss">
$checkout: ".checkout";

#{$checkout} {
  // @apply pt-8 pb-8;
  // bg-gradient-to-b from-secondary via-secondary-light to-secondary;

  // margin-bottom: 40px;
  // border-radius: 11px;
  // background-color: #f2f2f2;
  // box-shadow: 0px 0 3px 0px #00000057;
  @apply border-secondary border-2;

  &-title {
    @apply text-white text-center font-bold;
  }
}
</style>
