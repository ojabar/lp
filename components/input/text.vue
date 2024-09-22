<script setup lang="ts">
import type { ErrorObject } from "@vuelidate/core";

const { locale } = useI18n();

interface Props {
  id: string;
  modelValue: string;
  type?: "text" | "password" | "email" | "tel" | "date";
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  errors?: ErrorObject[];
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

// datepicker
const inputDateValue = ref(props.modelValue);
const updateDateValue = (value: any) => {
  emit("update:modelValue", formatDateValue(value));
};
const format = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
const formatDateValue = (date: Date) => {
  if (date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
  }
  return "";
};
const flow = ref(["month", "year", "calendar"]);
// datepicker

const isFocused = ref(false);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const onFocus = () => {
  isFocused.value = true;
};

const onBlur = () => {
  isFocused.value = false;
};
</script>

<template>
  <div
    class="inputText"
    :class="{
      'inputText--focused': isFocused || modelValue,
      error: errors?.length,
      required: required,
    }"
  >
    <label v-if="label" :for="id" class="inputText-label">{{ label }}</label>

    <VueDatePicker
      v-if="type === 'date'"
      v-model="inputDateValue"
      :id="id"
      v-bind="$attrs"
      @update:modelValue="updateDateValue"
      hide-input-icon
      :locale="locale"
      :format="format"
      :flow="flow"
    ></VueDatePicker>

    <input
      v-else
      :id="id"
      :type="type"
      :value="modelValue"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      :placeholder="isFocused || modelValue ? '' : placeholder"
      :disabled="disabled"
    />
    <div class="inputText-error" v-if="errors">
      <span v-for="error in errors" :key="error.$uid">
        {{ error.$message }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$inputText: ".inputText";

#{$inputText} {
  @apply w-full relative font-light uppercase;

  input {
    @apply border border-gray-400 w-full text-base py-3 px-3
    rounded-md;

    &:focus {
      outline: none;
      @apply border-primary;
    }
  }

  &.error {
    input {
      @apply border-red-500;
    }
  }

  &-label {
    @apply absolute top-1/2 start-3 -translate-y-1/2 z-[1]
    duration-200 ease-linear transition-all 
    pointer-events-none text-xs text-gray-600 font-light
    bg-white rounded-md border border-transparent py-0.5;
  }

  &--focused {
    #{$inputText}-label,
    & input:not(:placeholder-shown) + #{$inputText}-label {
      @apply top-0 text-xxs start-3 text-primary px-2 border-primary;
    }

    input {
      @apply border-primary;
    }
  }

  &-error {
    @apply absolute bottom-0 translate-y-full normal-case;
    span {
      @apply text-red-500 text-xxs flex flex-col;
    }
  }

  &.required {
    label::after {
      content: " * ";
    }
  }
}
</style>
