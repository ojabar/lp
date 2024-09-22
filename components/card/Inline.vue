<script setup lang="ts">
const { direction } = withDefaults(
  defineProps<{ direction?: "right" | "left" }>(),
  {
    direction: "right",
  }
);
</script>

<template>
  <div class="cardInline" :class="[`cardInline--${direction}`]">
    <div class="cardInline-img">
      <NuxtImg src="/assets/images/products/400wat.png" />
    </div>

    <div class="cardInline-body">
      <BaseHeadLine name="h3" size="sm">
        ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
      </BaseHeadLine>
    </div>
  </div>
</template>

<style lang="scss">
$cardInline: ".cardInline";

#{$cardInline} {
  @apply bg-primary-dark rounded-lg p-3
  flex gap-3 text-white;

  &--left {
    @apply flex-row-reverse;
    #{$cardInline} {
      &-body {
        @apply text-end;
      }
    }
  }

  &-img {
    @apply bg-white w-32 p-1 rounded-md;
  }
  &-body {
    @apply text-start flex-1 ;
  }
}
</style>
