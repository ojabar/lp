<template>
  <div class="cardReview">
    <div class="cardReview-top">
      <span class="cardReview-fullname">{{ data.title }}</span>
      <BaseStars
        class="text-secondary text-xs mt-1"
        :review="data.review || 0"
      />
    </div>
    <hr class="my-2" />
    <div class="cardReview-review">
      {{ data.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = withDefaults(
  defineProps<{
    data: {
      review?: number;
      title?: string;
      description?: any;
    };
  }>(),
  {}
);
</script>

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
