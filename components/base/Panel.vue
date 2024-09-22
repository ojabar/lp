<template>
  <div class="panel">
    <div class="panel-header">
      <BaseHeadLine v-if="title" size="md" class="font-normal uppercase">
        {{ title }}</BaseHeadLine
      >
    </div>
    <div class="panel-body"><slot /></div>
    <div v-if="$slots.footer" class="panel-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss">
$panel: '.panel';

#{$panel} {
  @apply border border-black;

  &-header {
    @apply px-5 py-3 border-b  border-inherit;
  }
  &-body {
    @apply p-5;
  }
}
</style>
