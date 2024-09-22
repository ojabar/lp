<template>
  <div class="cardReview">
    <div class="cardReview-top">
      <span class="cardReview-fullname">أناس</span>
      <BaseStars class="text-secondary text-xs mt-1" />
    </div>
    <hr class="my-2" />
    <div class="cardReview-review">
      كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
      قامت مطبعة مجهولة
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
$cardReview: ".cardReview";

#{$cardReview} {
  @apply bg-white rounded-lg py-3 px-4;
  &-top {
    @apply flex  items-center gap-x-2;
  }
  &-fullname {
  }
  &-stars {
  }
  &-review {
    @apply text-black text-xs font-normal;
    --tw-text-opacity: 0.6;
  }
}
</style>
