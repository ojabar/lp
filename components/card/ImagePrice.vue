<template>
  <div class="cardPromotion">
    <div class="cardPromotion-img">
      <NuxtImg
        v-if="data.imageUrl"
        :src="data.imageUrl"
        :alt="'promotion'"
        class=""
      />
    </div>
    <span class="cardPromotion-price">
      <small class="cardPromotion-price-old">
        {{ data.priceOld }} {{ $t("currency") }}
      </small>
      <small class="cardPromotion-price-normal">
        {{ data.priceNew }} {{ $t("currency") }}
      </small>
    </span>
  </div>
</template>

<script setup lang="ts">
const { data } = withDefaults(
  defineProps<{
    data: {
      imageUrl?: string;
      priceNew?: number;
      priceOld?: number;
    };
  }>(),
  {}
);
</script>

<style lang="scss">
$cardPromotion: ".cardPromotion";

#{$cardPromotion} {
  @apply flex flex-col items-center p-4 bg-black rounded-lg;
  --tw-bg-opacity: 0.1;
  &-img {
    @apply h-28 w-full mb-5;
    img {
      @apply h-full mx-auto;
    }
  }
  &-price {
    @apply text-secondary text-2xl font-bold text-center;

    &-old {
      @apply text-xs line-through text-white font-medium block;
    }
    &-normal {
      @apply block leading-none;
    }
  }
}
</style>
