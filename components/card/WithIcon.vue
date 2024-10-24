<template>
  <div class="cardWithIcon">
    <span class="cardWithIcon-icon">
      <Icon v-if="data?.icon?.value" :name="data?.icon?.value" />
    </span>
    <BaseHeadLine class="cardWithIcon-title" size="sm">
      {{ data?.title }}
    </BaseHeadLine>
    <p>{{ data?.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IconType } from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<{
      icon?: IconType | null;
      title?: string;
      description?: string;
    }>,
  },
});
</script>

<style lang="scss">
$cardWithIcon: ".cardWithIcon";

#{$cardWithIcon} {
  @apply flex flex-col items-center px-3 pb-5 pt-4 bg-primary rounded-lg;
  --tw-bg-opacity: 0.08;

  &-icon {
    @apply text-primary bg-white flex items-center justify-center
    text-2xl p-1.5 rounded-lg mb-2;
  }
  &-title {
    @apply text-primary font-bold mb-2;
  }

  p {
    @apply text-center text-xs font-normal;
  }
}
</style>
