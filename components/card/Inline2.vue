<script setup lang="ts">
const { direction, data } = withDefaults(
  defineProps<{
    direction?: "right" | "left";
    data: {
      imageUrl?: string;
      title?: string;
      description?: any;
    };
  }>(),
  {
    direction: "right",
  }
);
</script>

<template>
  <div class="cardInline2" :class="[`cardInline2--${direction}`]">
    <div class="cardInline2-img">
      <NuxtImg :src="data.imageUrl" :alt="data.title" />
    </div>

    <div class="cardInline2-body">
      <BaseHeadLine name="h3" size="md" class="font-bold mb-2">
        {{ data.title }}
      </BaseHeadLine>
      <BaseRichText :data="data.description" />
    </div>
  </div>
</template>

<style lang="scss">
$cardInline2: ".cardInline2";

#{$cardInline2} {
  @apply flex gap-3 text-black items-start;

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
