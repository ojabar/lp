<template>
  <div class="reviews">
    <LayoutContainer>
      <BaseHeadLine size="lg" class="reviews-title">
        {{ data?.title }}
      </BaseHeadLine>

      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 bg-slate-400" v-for="review in data?.items">
          <CardReview
            :data="{
              title: review.title,
              description: review.msg,
              review: review.review,
            }"
          />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import type { ProductPageBody } from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<ProductPageBody>,
  },
});
</script>

<style lang="scss">
$reviews: ".reviews";

#{$reviews} {
  @apply bg-black pt-5 pb-8;
  &-title {
    @apply text-white mb-5;
  }
}
</style>
