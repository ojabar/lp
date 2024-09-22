<template>
  <div class="options">
    <LayoutContainer>
      <BaseHeadLine size="xl" class="options-title">
        <strong> شنو لوازم لي كتج معاه ؟</strong>
        <span>
          خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له
          جذور في .
        </span>
      </BaseHeadLine>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12">
          <CardInline2 />
        </div>
        <div class="col-span-12">
          <CardInline2 />
        </div>
        <div class="col-span-12">
          <CardInline2 />
        </div>
      </div>
      
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts"></script>

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
