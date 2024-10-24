<template>
  <StrapiBlocks v-if="data" :content="data" />
</template>

<script setup lang="ts">
import { StrapiBlocks, type BlocksContent } from "vue-strapi-blocks-renderer";

const { data } = defineProps<{
  data?: any;
}>();
</script>

<style lang="scss">
$bannerText: ".bannerText";
#{$bannerText} {
}
</style>
