<template>
  <div class="proprities">
    <LayoutContainer>
      <BaseHeadLine class="proprities-title">
        <div class="flex gap-x-3 items-center">
          <strong> الخصائص لي غادي يعطيك </strong>
          <NuxtImg
            class="w-[14.35rem]"
            src="/assets/images/products/400wat.png"
          />
        </div>
      </BaseHeadLine>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <CardWithIcon />
        </div>
        <div class="col-span-6">
          <CardWithIcon />
        </div>
        <div class="col-span-6">
          <CardWithIcon />
        </div>
        <div class="col-span-6">
          <CardWithIcon />
        </div>
      </div>
      <div class="mt-5">
        <BaseButton type="secondary" size="large" class="w-full">
          إشتري الآن
        </BaseButton>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts"></script>

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
