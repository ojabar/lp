<template>
  <div class="baseStars">
    <Icon name="ic:round-star" v-for="(r, index) in review" :key="index" />
    <Icon
      name="ic:round-star"
      v-for="(r, index) in 5 - review"
      :key="'i-' + index"
      class="text-gray-300"
    />
  </div>
</template>

<script setup lang="ts">
const { review } = withDefaults(
  defineProps<{
    review: number;
  }>(),
  {
    review: 5,
  }
);
</script>

<style lang="scss">
$baseStars: ".baseStars";

#{$baseStars} {
}
</style>
