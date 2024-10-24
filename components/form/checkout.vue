<template>
  <div class="formCheckout">
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <InputText
          id="fullname"
          v-model="state.fullName"
          :errors="v$.fullName.$errors"
          :label="$t('label.fullname')"
        />
      </div>
      <div class="mb-4">
        <InputText
          id="phone"
          v-model="state.phone"
          :errors="v$.phone.$errors"
          :label="$t('label.phone')"
        />
      </div>
      <div>
        <InputText
          id="city"
          v-model="state.city"
          :errors="v$.city.$errors"
          :label="$t('label.city')"
        />
      </div>

      <div class="mt-5">
        <BaseButton type="primary" submit size="large" class="w-full">
          إشتري الآن
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { OrderType } from "~/types/OrderType";
import { useOrderStore } from "@/composables/orderStore";
import type { ProductPageType } from "~/types/ProductGetType";

const locale = ref("ar"); // Or however you manage locale in your project

const { data } = defineProps({
  data: {
    type: {} as PropType<ProductPageType>,
  },
});

const orderStore = useOrderStore();

const formCheckout = useFormCheckout();
const { state, v$ } = toRefs(formCheckout);

const addCommand = async () => {
  try {
    console.log("productPageBody", data);

    const order: Omit<OrderType, "cDate" | "uDate" | "dDate" | "state"> = {
      fullname: state.value.fullName,
      city: state.value.city,
      phone: state.value.phone,
      product: {
        id: "lyr3r2t4cvgfermaq6oy83hp",
        permalink: data?.seo?.permalink || "lyr3r2t4cvgfermaq6oy83hp",
        title: data?.seo?.title,
      },
      quantity: 1,
    };
    await orderStore.addOrder(order);

    console.log(order);

    alert("Command added successfully!");
  } catch (error) {
    console.error("Error adding command: ", error);
    alert("Error adding command. Please try again.");
  }
};

const submitForm = async () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    console.log("submit");
    addCommand();
  } else {
  }
};
</script>

<style lang="scss">
$formCheckout: ".formCheckout";

#{$formCheckout} {
  @apply pt-3;
}
</style>
