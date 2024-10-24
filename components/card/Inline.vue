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
  <div class="cardInline" :class="[`cardInline--${direction}`]">
    <div class="cardInline-img">
      <NuxtImg :src="data.imageUrl" :alt="data.title" />
    </div>

    <div class="cardInline-body">
      <BaseHeadLine name="h3" size="sm">
        {{ data.title }}
      </BaseHeadLine>
      <div v-if="data.description" class="text-xs mt-2">
        <BaseRichText :data="data.description" />
      </div>
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
    @apply bg-white w-28 p-1 rounded-md;
    img {
      @apply aspect-square object-contain;
    }
  }
  &-body {
    @apply text-start flex-1;
  }
}
</style>
