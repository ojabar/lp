<template>
  <div class="formCheckout">
    <form>
      <div class="mb-4">
        <InputText
          id="fullname"
          v-model="modal"
          :label="$t('label.fullname')"
        />
      </div>
      <div class="mb-4">
        <InputText id="phone" v-model="modal" :label="$t('label.phone')" />
      </div>
      <div>
        <InputText id="city" v-model="modal" :label="$t('label.city')" />
      </div>

      <div class="mt-5">
        <BaseButton type="primary" size="large" class="w-full">
          إشتري الآن
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const modal = ref("");
</script>

<style lang="scss">
$formCheckout: ".formCheckout";

#{$formCheckout} {
  @apply pt-3;
}
</style>
