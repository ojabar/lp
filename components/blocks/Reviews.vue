<template>
  <div class="reviews">
    <LayoutContainer>
      <BaseHeadLine size="lg" class="reviews-title">
        شنو قيولو الناس لي جربوه ؟
      </BaseHeadLine>

      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12">
          <CardReview />
        </div>
        <div class="col-span-12">
          <CardReview />
        </div>
        <div class="col-span-12">
          <CardReview />
        </div>
        <div class="col-span-12">
          <CardReview />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
$reviews: ".reviews";

#{$reviews} {
  @apply bg-black pt-5 pb-8;
  &-title {
    @apply text-white mb-5;
  }
}
</style>
