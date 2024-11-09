<template>
  <div class="layout-default">
    <slot />
    <LayoutAppFooter />
    <BlocksBuyNowStickey />
    <ButtonWhatsapp />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layout-default {
  @apply pb-[84px];
}
</style>
