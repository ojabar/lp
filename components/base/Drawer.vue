<script setup lang="ts">
import { setHtmlStyle } from '~/utils/document';

const { to, position, size, modelValue } = defineProps({
  to: {
    type: String,
    default: 'body',
  },
  position: {
    type: String as () => 'top' | 'bottom' | 'right' | 'left' | 'center',
    default: 'right',
  },
  size: {
    type: String,
    default: '300px',
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  closeButton: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const bodySizeStyle = computed(() => {
  if (position === 'top' || position === 'bottom') {
    return {
      width: '100%',
      height: size,
      maxHeight: '100%',
    };
  } else {
    return {
      height: '100%',
      width: size,
      maxWidth: '100%',
    };
  }
});

const closeDrawer = () => {
  document.body.style.overflow = '';
  emit('update:modelValue', false);
};

const showBody = ref(false);
const showDrawer = ref(false);

const beforeEnter = () => {
  showDrawer.value = true;
  showBody.value = false;
};

const enter = (el: Element, done: () => void) => {
  setHtmlStyle({
    overflow: 'hidden',
  });
  setTimeout(() => {
    showBody.value = true;
  }, 200);
  setTimeout(done, 500); // Total animation duration
};

const leave = (el: Element, done: () => void) => {
  setHtmlStyle({
    overflow: '',
  });
  showBody.value = false;
  setTimeout(() => {
    showDrawer.value = false;
    done();
  }, 300);
};

onMounted(() => {
  if (modelValue) {
    showDrawer.value = modelValue;
    setHtmlStyle({
      overflow: 'hidden',
    });
    setTimeout(() => {
      showBody.value = modelValue;
    }, 200);
  }
});
watch(
  () => modelValue,
  (newValue) => {
    if (newValue) {
      beforeEnter();
      enter({} as Element, () => {});
    } else {
      leave({} as Element, () => {});
    }
  }
);
</script>

<template>
  <ClientOnly>
    <Teleport :to="to">
      <div class="drawer" v-show="showDrawer">
        <Transition
          name="drawer-bg"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div v-if="modelValue" class="drawer-bg" @click="closeDrawer"></div>
        </Transition>

        <Transition name="drawer-body">
          <div
            v-if="showBody"
            class="drawer-body"
            :class="[position]"
            :style="[bodySizeStyle]"
          >
            <div v-if="$slots.header" class="drawer-header">
              <slot name="header" />
            </div>
            <div class="drawer-content">
              <BaseButton
                v-if="closeButton"
                class="drawer-closebtn"
                @click="closeDrawer"
              >
                <IconX />
              </BaseButton>
              <slot />
            </div>
            <div v-if="$slots.footer" class="drawer-footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Teleport>
  </ClientOnly>
</template>
<style lang="scss">
$drawer: '.drawer';

#{$drawer} {
  @apply fixed h-dvh w-screen z-[1000] top-0 left-0;

  &-bg {
    @apply relative bg-black opacity-40 h-full w-full;
  }

  &-closebtn {
    @apply absolute right-1 top-1.5 z-20;
  }

  &-body {
    @apply absolute bg-white z-10 h-full w-full duration-300
    flex flex-col;

    &.top {
      @apply top-0 left-0;
    }
    &.bottom {
      @apply bottom-0 left-0;
    }
    &.right {
      @apply top-0 right-0;
    }
    &.left {
      @apply top-0 left-0;
    }
    &.center {
      @apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
    }
  }

  &-header {
    @apply min-h-14 flex-col flex justify-center px-5 py-2 border-b border-black;
  }
  &-content {
    @apply p-5 flex-1 overflow-auto;
  }

  &-footer {
    @apply min-h-14 flex items-center px-5 py-2 border-t border-black;
  }
}
</style>

<!-- for animation -->
<style lang="scss">
.drawer-bg-enter-active,
.drawer-bg-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-bg-enter-from,
.drawer-bg-leave-to {
  opacity: 0;
}

.drawer-body-enter-active,
.drawer-body-leave-active {
  // transition: transform 0.3s ease, opacity 0.3s ease, scale 0.3s ease;
  transition: all 0.3s ease;
}

.drawer-body-enter-from,
.drawer-body-leave-to {
  transform: translateX(-100%);
}

.drawer-body.right.drawer-body-enter-from,
.drawer-body.right.drawer-body-leave-to {
  transform: translateX(100%);
}

.drawer-body.top.drawer-body-enter-from,
.drawer-body.top.drawer-body-leave-to {
  transform: translateY(-100%);
}

.drawer-body.bottom.drawer-body-enter-from,
.drawer-body.bottom.drawer-body-leave-to {
  transform: translateY(100%);
}

.drawer-body.center.drawer-body-enter-from,
.drawer-body.center.drawer-body-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>
