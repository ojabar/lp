<template>
  <div class="cardWithIcon">
    <span class="cardWithIcon-icon">
      <Icon name="ph:power-light" />
    </span>
    <BaseHeadLine class="cardWithIcon-title" size="sm"> 1000 واط </BaseHeadLine>
    <p>صار مستخدماً وبشكله الأصلي في</p>
  </div>
</template>

<script setup lang="ts"></script>

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
