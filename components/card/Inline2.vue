<script setup lang="ts">
const { direction } = withDefaults(
  defineProps<{ direction?: "right" | "left" }>(),
  {
    direction: "right",
  }
);
</script>

<template>
  <div class="cardInline2" :class="[`cardInline2--${direction}`]">
    <div class="cardInline2-img">
      <NuxtImg src="/assets/images/products/400wat.png" />
    </div>

    <div class="cardInline2-body">
      <BaseHeadLine name="h3" size="md" class="font-bold mb-2">
        لوريم إيبسوم
      </BaseHeadLine>
      <p>
        خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور
        في .
      </p>
    </div>
  </div>
</template>

<style lang="scss">
$cardInline2: ".cardInline2";

#{$cardInline2} {
  @apply flex gap-3 text-black;

  &--left {
    @apply flex-row-reverse;
    #{$cardInline2} {
      &-body {
        @apply text-end;
      }
    }
  }

  &-img {
    @apply bg-white  rounded-md border-2 border-primary-dark w-28 aspect-square flex items-center;
  }
  &-body {
    @apply text-start flex-1 text-sm;
  }

}
</style>
