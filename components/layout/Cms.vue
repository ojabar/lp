<template>
  <div class="cms">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.cms {
  @apply py-16;

  h1 {
    @apply text-4xl font-bold text-gray-800 mb-10 pb-2 border-b border-primary;
  }

  h2 {
    @apply text-2xl font-bold text-gray-800 mt-8 mb-4 pl-4 border-l-4 border-primary;
  }

  p {
    @apply text-base mb-4 text-gray-600;
  }

  a {
    @apply underline;
  }

  ul {
    @apply list-disc ms-6 mb-4;

    li {
      @apply mb-2 text-base text-gray-600;
    }
  }

  strong {
    @apply font-bold text-gray-800;
  }

  @media (max-width: 768px) {
    h1 {
      @apply text-3xl;
    }

    h2 {
      @apply text-xl;
    }

    p,
    li {
      @apply text-sm;
    }
  }
}
</style>
