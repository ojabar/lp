// Spacer.vue
<template>
  <div :class="$style.spacer"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface SpacerProps {
  __typename?: string;
  tablet?: number;
  mobile?: number;
  desktop?: number;
  id?: string;
}

export default defineComponent({
  name: "Spacer",
  props: {
    __typename: {
      type: String,
      default: "ComponentCommonSpacer",
    },
    tablet: {
      type: Number,
      default: 60,
    },
    mobile: {
      type: Number,
      default: 40,
    },
    desktop: {
      type: Number,
      default: 80,
    },
    id: {
      type: String,
      required: false,
    },
  } as const,

  setup(props: SpacerProps) {
    // You can add additional logic here if needed
    return {};
  },
});
</script>

<style module lang="scss">
.spacer {
  height: v-bind('desktop + "px"');

  @media (max-width: 1024px) {
    height: v-bind('tablet + "px"');
  }

  @media (max-width: 768px) {
    height: v-bind('mobile + "px"');
  }
}
</style>
