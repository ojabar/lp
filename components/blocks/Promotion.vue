<template>
  <div class="promotion">
    <BaseHeadLine size="xl" class="promotion-title">
      <span> {{ data?.title }}</span>
      <small class="block">{{ data?.subTitle }}</small>
    </BaseHeadLine>
    <LayoutContainer>
      <div class="grid grid-cols-12 gap-x-3 pt-10 pb-8">
        <div
          v-for="(card, index) in data?.items"
          :key="index"
          class="col-span-6"
        >
          <CardImagePrice
            :data="{
              imageUrl: card.image?.url,
              priceOld: card.priceOld,
              priceNew: card.priceNew,
            }"
          />
        </div>
        <div class="col-span-12 mt-10">
          <BaseButton type="secondary" size="large" class="w-full">
            إشتري الآن
          </BaseButton>
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import type { ComponentBlockSectionPromotions } from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<ComponentBlockSectionPromotions>,
  },
});
</script>

<style lang="scss">
$promotion: ".promotion";

#{$promotion} {
  @apply bg-primary;
  &-title {
    @apply text-white text-center bg-secondary font-bold py-4;

    small {
      @apply text-xs;
    }
  }
}
</style>
