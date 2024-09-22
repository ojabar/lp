<template>
  <NuxtLink :to="localePath('/')" :title="$t('shopname')" class="block">
    <NuxtImg
      v-if="isSvg && menuColor === 'white'"
      class="w-full"
      src="/assets/images/logo-white.svg"
    />
    <NuxtImg
      v-if="isSvg && menuColor === 'primary'"
      class="w-full"
      src="/assets/images/logo-black.svg"
    />
    <!-- <NuxtImg :style="{ color: iconColor }" src="/assets/images/logo-text.svg" /> -->
    <IconLogo
      v-if="!isSvg"
      :color="iconColor"
      :size="1"
      class="block text-center text-[5.9rem] font-medium !h-auto !p-0"
    />
  </NuxtLink>
</template>
<script setup lang="ts">
import { useMenuStore } from '~/stores/MenuStore';
const menuStore = useMenuStore();
const { menuBackground, menuColor } = toRefs(menuStore);
const localePath = useLocalePath();

const { isSvg } = defineProps({
  isSvg: {
    type: Boolean,
    default: false,
  },
});

const iconColor = computed(() => {
  return menuBackground.value === 'transparent'
    ? 'white'
    : 'var(--color-primary)';
});
</script>
<style lang=""></style>
