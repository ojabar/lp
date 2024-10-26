<template>
  <div class="checkout">
    <LayoutContainer>
      <BaseHeadLine size="xl" class="checkout-title">
        {{ data?.title }}
      </BaseHeadLine>
      <FormCheckout />
    </LayoutContainer>
  </div>
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
  @apply pt-8 pb-8 bg-gradient-to-b from-secondary via-secondary-light to-secondary;
  &-title {
    @apply text-black text-center font-bold mb-4;
  }
}
</style>
