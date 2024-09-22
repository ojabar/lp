<template>
  <header
    class="appheader"
    :class="{ transparent: menuBackground === 'transparent' }"
  >
    <div class="appheader-left flex gap-x-1">
      <BaseLogo v-if="menuLogo === 'svg'" isSvg class="appheader-logosvg" />

      <BaseButton v-if="showMenu" icon :title="$t('button.menu')">
        <IconBurger :color="iconColor" />
      </BaseButton>
      <span v-if="back" class="block lg:hidden">
        <BaseButton icon :title="$t('button.menu')" @click="backClick">
          <IconChevronLeft :color="iconColor" />
        </BaseButton>
      </span>

      <!-- <BaseButton icon :title="$t('button.search')">
        <IconSearch :color="iconColor" />
      </BaseButton> -->
    </div>
    <div class="appheader-center flex">
      <BaseLogo v-if="menuLogo === 'text'" />
    </div>
    <div class="appheader-right flex gap-x-1">
      <ButtonAccount v-if="showAccount" :iconColor="iconColor" />

      <ButtonMiniCart
        v-if="showCart"
        :iconColor="iconColor"
        :title="$t('button.cart')"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
const { showAccount, showCart, showMenu } = defineProps({
  showAccount: {
    type: Boolean,
    default: true,
  },
  showCart: {
    type: Boolean,
    default: true,
  },
  showMenu: {
    type: Boolean,
    default: true,
  },
  back: {
    type: Boolean,
    default: false,
  },
});

const localePath = useLocalePath();

const menuStore = useMenuStore();
const { menuBackground, menuLogo, menuColor, backClick } = toRefs(menuStore);

const iconColor = computed(() => {
  return menuColor.value === 'primary' ? 'var(--color-primary)' : 'white';
});

const appBarColor = ref<string>('transparent');

const onScroll = () => {
  const scrollTop = window.scrollY;
  appBarColor.value = scrollTop > 100 ? 'white' : 'transparent';
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style lang="scss">
.appheader {
  @apply px-4 h-14 py-1.5  bg-white
  flex justify-between items-center
  border-b-black border-b;

  &.transparent {
    @apply bg-transparent border-none;
  }
  &-left {
    flex: 0 0 33.33%;
  }
  &-center {
    flex: 0 0 33.33%;
    @apply flex justify-center;
  }
  &-right {
    flex: 0 0 33.33%;
    @apply flex justify-end;
  }

  &-logosvg {
    @apply absolute top-5 left-14 w-20;
    @screen lg {
      @apply w-28 top-6 left-16;
    }
    img {
    }
  }
}
</style>
