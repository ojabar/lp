<template>
  <div class="promotion">
    <BaseHeadLine size="xl" class="promotion-title">
      <span> عرض خاص </span>
      <small class="block">إلى خذيتي 3 غادي تقتصد 50 درهم</small>
    </BaseHeadLine>
    <LayoutContainer>
      <div class="grid grid-cols-12 gap-x-3 pt-10 pb-8">
        <div class="col-span-6">
          <CardImagePrice />
        </div>
        <div class="col-span-6">
          <CardImagePrice />
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

<script setup lang="ts"></script>

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
