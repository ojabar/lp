<template>
  <div class="questions">
    <LayoutContainer>
      <BaseHeadLine
        class="questions-title text-center font-bold mb-4"
        size="lg"
      >
        هناك حقيقة مثبتة منذ
        <strong> زمن طويل </strong>
      </BaseHeadLine>

      <div class="grid grid-cols-12 gap-y-3">
        <div class="col-span-12">
          <CardInline />
        </div>
        <div class="col-span-12">
          <CardInline direction="left" />
        </div>
        <div class="col-span-12">
          <CardInline />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts"></script>

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
