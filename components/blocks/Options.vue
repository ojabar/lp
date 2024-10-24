<template>
  <div class="options">
    <LayoutContainer>
      <BaseHeadLine size="xl" class="options-title">
        <strong> {{ data?.title }}</strong>
        <span>
          {{ data?.subTitle }}
        </span>
      </BaseHeadLine>
      <div class="grid grid-cols-12 gap-3">
        <div v-for="card in data?.items" :key="card.id" class="col-span-12">
          <CardInline2
            :data="{
              title: card.title,
              description: card.description,
              imageUrl: card.image?.url,
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
$options: ".options";
#{$options} {
  &-title {
    @apply text-black
     leading-[1.6] mb-10;

    strong {
      @apply block text-primary;
    }
    span {
      @apply block text-black text-sm mt-1;
      --tw-text-opacity: 0.6;
    }
  }
}
</style>
