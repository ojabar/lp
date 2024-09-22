<template>
  <div
    class="inputCheckbox"
    :class="{
      error: errors?.length,
    }"
  >
    <input
      :id="id"
      type="checkbox"
      :value="modelValue"
      @change="onChange($event)"
      :disabled="disabled"
      :required="required"
      :checked="modelValue"
    />

    <label :for="id" class="inputCheckbox-label">
      <span class="inputCheckbox-span">
        <IconCheck color="white" :size="1" />
      </span>
      <slot />
    </label>

    <div class="inputCheckbox-error" v-if="errors">
      <span v-for="error in errors" :key="error.$uid">
        {{ error.$message }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ErrorObject } from '@vuelidate/core';

interface Props {
  id: string;
  modelValue: boolean;
  disabled?: boolean;
  required?: boolean;
  errors?: ErrorObject[];
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const isFocused = ref(false);

const onChange = (event: Event) => {
  const input = event.target as HTMLInputElement;

  emit('update:modelValue', input.checked);
};
</script>

<style scoped lang="scss">
$inputCheckbox: '.inputCheckbox';

#{$inputCheckbox} {
  @apply w-full relative font-light cursor-pointer;

  input {
    @apply absolute opacity-0;
    &:checked {
      ~ #{$inputCheckbox} {
        &-label {
          > span {
            @apply bg-black;
            &::after {
              @apply border-white;
            }
          }
        }
      }
    }
  }

  &-span {
    @apply inline-block bg-transparent relative h-4 w-4 duration-150  translate-y-0.5 me-2;

    &::after {
      content: '';
      @apply absolute border border-black left-[1px] top-[1px] duration-150;
      height: calc(100% - 2px);
      width: calc(100% - 2px);
    }

    .icon {
      @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
    }
  }

  &.error {
    input {
      @apply border-red-500;
    }
  }

  &-label {
    @apply text-sm cursor-pointer;
  }

  &-error {
    @apply absolute bottom-0 translate-y-full normal-case;
    span {
      @apply text-red-500 text-xxs flex flex-col;
    }
  }
}
</style>
