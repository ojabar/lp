<template>
  <button
    class="baseButton"
    :class="[...classes, size, type, { plain }, { rounded }]"
    v-bind="$attrs"
    :title="title"
    :type="submit ? 'submit' : 'button'"
  >
    <span v-if="$slots.iconLeft" class="baseButton-icon">
      <slot name="iconLeft" />
    </span>

    <slot />

    <span v-if="$slots.iconRight" class="baseButton-icon">
      <slot name="iconRight" />
    </span>
    <span
      class="textOnTop"
      v-if="textOnTop"
      :style="{
        color: textOnTopColor === 'white' ? 'black' : 'white',
        backgroundColor: textOnTopColor === 'white' ? 'white' : 'black',
      }"
    >
      {{ textOnTop }}
    </span>
  </button>
</template>
<script setup lang="ts">
const { icon, textOnTop, size, type, plain, rounded } = defineProps({
  submit: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as () => "primary" | "secondary" | "white",
  },
  title: {
    type: String,
    default: "cta",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  textOnTop: {
    type: [String, Number],
  },
  textOnTopColor: {
    type: String,
    default: "black",
  },
  size: {
    type: String as () => "small" | "medium" | "large",
    default: "medium",
  },
});

const classes = computed((): String[] => {
  const classList: String[] = [];
  if (icon) {
    classList.push("baseButton--icon");
  }
  return classList;
});
</script>

<style lang="scss">
$baseButton: ".baseButton";
#{$baseButton} {
  @apply px-3 h-11 relative 
  flex gap-x-2 items-center justify-center 
  uppercase text-center font-bold tracking-wider duration-150 pb-1 pt-1;

  &:disabled {
    @apply bg-gray-200 text-gray-300;
  }
  &.primary {
    @apply border border-primary bg-primary text-white;

    &:disabled {
      @apply bg-gray-400 border-gray-400;
    }
    &.plain {
      @apply border border-primary bg-transparent text-primary;
      &:hover {
        @apply bg-primary text-white;
      }
      &:disabled {
        @apply bg-slate-100;
        --tw-bg-opacity: 0.7;
        --tw-border-opacity: 0.4;
        --tw-text-opacity: 0.6;
      }
    }
  }

  &.secondary {
    @apply border border-secondary bg-secondary text-white;

    &:disabled {
      --tw-bg-opacity: 0.7;
      --tw-border-opacity: 0.4;
      --tw-text-opacity: 0.6;
    }
    &.plain {
      @apply border border-secondary bg-transparent text-secondary;
      &:hover {
        @apply bg-secondary text-white;
      }
      &:disabled {
        --tw-bg-opacity: 0.7;
        --tw-border-opacity: 0.4;
        --tw-text-opacity: 0.6;
      }
    }
  }

  &.rounded {
    @apply rounded-full;
  }

  &.white {
    @apply border border-white bg-white text-primary;

    &:disabled {
      --tw-bg-opacity: 0.7;
      --tw-border-opacity: 0;
      --tw-text-opacity: 0.6;
    }
    &.plain {
      @apply border border-white bg-transparent text-white;
      &:disabled {
        @apply bg-slate-100;
        --tw-bg-opacity: 0.7;
        --tw-border-opacity: 0.4;
        --tw-text-opacity: 0.6;
      }
    }
  }
  &.small {
    @apply px-3 h-8 text-xs;
  }
  &.medium {
    @apply text-sm;
  }
  &.large {
    @apply px-3 h-14 text-base;
  }

  &.baseButton--icon {
    @apply w-8 h-8 flex justify-center items-center px-0;

    &.small {
      @apply w-5 h-5 text-sm;
      @screen lg {
        @apply w-6 h-6;
      }
      &:disabled {
        --tw-bg-opacity: 0.7;
        --tw-border-opacity: 0;
        --tw-text-opacity: 0.6;
      }
    }

    &.medium {
      @apply text-base;
    }

    &.large {
      @apply w-11 h-11 text-lg;
    }

    .iconify {
      font-size: 1.5rem;
    }
  }
  &-icon {
    @apply leading-none;
    &.small {
      @apply px-0 h-8 text-sm;
    }
  }
  .textOnTop {
    @apply absolute top-1.5 right-1.5
    rounded-full h-2 w-2 pt-[1px]
     text-[6px] leading-none;
  }
}
</style>
