<template>
  <div class="offer">
    <LayoutContainer>
      <BaseHeadLine size="lg" class="offer-title">
        علاش خاصك تختار هاد لجهاز
      </BaseHeadLine>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <CardImageList />
        </div>
        <div class="col-span-6">
          <CardImageList listIcon="ph:x" />
        </div>
      </div>
      <div class="mt-5">
        <BaseButton type="secondary" size="large" class="w-full">
          إشتري الآن
        </BaseButton>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
$offer: ".offer";

#{$offer} {
  @apply bg-primary text-white pt-6 pb-10;

  &-title {
    @apply text-white text-center font-bold mb-6;
  }
}
</style>
