<template>
  <div class="proprities">
    <LayoutContainer>
      <BaseHeadLine class="proprities-title">
        <div class="flex gap-x-3 items-center">
          <strong> {{ data?.title }}</strong>

          <NuxtImg
            class="w-[14.35rem]"
            :src="data?.image?.url"
            :alt="data?.title"
          />
        </div>
      </BaseHeadLine>
      <div class="grid grid-cols-12 gap-3">
        <div v-for="card in data?.sectionSecondaryItems" class="col-span-6">
          <CardWithIcon
            :data="{
              title: card?.title,
              description: card.description,
              icon: card.icon,
            }"
          />
        </div>
      </div>
      <div class="mt-5">
        <BaseButton
          type="secondary"
          size="large"
          class="w-full"
          @click="focusFullName"
        >
          {{ $t("button.buyNow") }}
        </BaseButton>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import type { ComponentBlockSectionSecondary } from "~/types/ProductGetType";
import { focusFullName } from "@/utils/scrollToCheckout";

const { data } = defineProps({
  data: {
    type: {} as PropType<ComponentBlockSectionSecondary>,
  },
});
</script>

<style lang="scss">
$proprities: ".proprities";
#{$proprities} {
  &-title {
    @apply text-primary
    text-3xl leading-[1.6] mb-10;

    strong {
      @apply flex-1;
    }
  }
}
</style>
