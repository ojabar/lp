<template>
  <div class="hr" :style="{ marginBottom: spacing, marginTop: spacing }">
    <span v-if="label" class="hr-label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const { label, spacing = '20px' } = defineProps<{
  label?: string;
  spacing?: string;
}>();
</script>

<style lang="scss">
.hr {
  @apply relative h-[1px] bg-gray-bbb w-full my-5;

  &-label {
    @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    bg-white px-5 text-gray-888;
  }
}
</style>
