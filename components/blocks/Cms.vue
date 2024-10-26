<template>
  <div class="cms">
    <LayoutContainer>
      <BaseRichText v-if="data?.Text" :data="data?.Text" />
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import type { ComponentBlockCms } from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<ComponentBlockCms>,
  },
});
</script>

<style lang="scss">
$cms: ".cms";
#{$cms} {
  @apply font-normal;
  h2 {
    @apply text-black text-xl
     leading-[1.6] mb-2;

    strong {
      @apply text-primary;
    }
    span {
      @apply block text-black text-sm mt-1;
      --tw-text-opacity: 0.6;
    }
  }
}
</style>
