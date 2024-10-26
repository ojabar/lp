<template>
  <div class="questions">
    <LayoutContainer>
      <BaseHeadLine
        class="questions-title text-center font-bold mb-4"
        size="lg"
      >
        <BaseRichText :data="data?.sectionTitle" />
      </BaseHeadLine>

      <div class="grid grid-cols-12 gap-y-3">
        <div
          v-for="(card, index) in data?.sectionPrimaryItems"
          :key="card.id"
          class="col-span-12"
        >
          <CardInline
            :data="{
              title: card.title,
              description: card.description,
              imageUrl: card.image?.url,
            }"
          />
        </div>

        <!-- :direction="index % 2 === 0 ? 'right' : 'left'" -->
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import type { ComponentBlockSectionPrimary } from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<ComponentBlockSectionPrimary>,
  },
});
</script>

<style lang="scss">
$questions: ".questions";

#{$questions} {
  &-title {
    strong {
      @apply font-bold text-primary;
    }
  }
}
</style>
