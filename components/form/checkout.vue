<template>
  <div id="formCheckout" class="formCheckout">
    <form @submit.prevent="submitForm">
      <div class="mb-4 flex gap-5" v-if="promotion">
        <label
          v-for="item in promotion.items"
          :key="item.id"
          :for="`qte-${item.id}`"
          class="radio-btn"
        >
          <input
            :id="`qte-${item.id}`"
            type="radio"
            name="qte"
            :value="item.quantity"
            v-model="state.quantity"
          />
          <div class="radio-btn-box">
            {{ $t("label.i_want") }} {{ item.quantity }}
          </div>
        </label>

        <!-- <label for="qte-2" class="radio-btn">
          <input
            id="qte-2"
            type="radio"
            name="qte"
            :value="2"
            v-model="state.quantity"
          />
          <div class="radio-btn-box">بغيت جوج</div>
        </label> -->
      </div>
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
          id="address"
          v-model="state.address"
          :errors="v$.address.$errors"
          :label="$t('label.city')"
        />
      </div>

      <div class="mt-5">
        <BaseButton
          type="primary"
          submit
          size="large"
          class="w-full"
          v-loading="loading"
        >
          {{ $t("button.buyNow") }}
        </BaseButton>
      </div>
    </form>

    <BaseModal
      v-model="confirmationModalVisible"
      size="calc(100% - 40px)"
      :close-button="true"
    >
      <div>
        <div class="flex justify-center px-5">
          <Icon
            icon="lets-icons:check-ring-light"
            :width="100"
            class="text-primary"
          />
        </div>
        <div
          v-html="$t('message.orderConfirmation')"
          class="text-center font-normal text-lg leading-[2] mt-5"
        ></div>
        <div class="flex justify-center mt-8">
          <BaseButton
            type="secondary"
            class="min-w-36"
            @click="confirmationModalVisible = false"
          >
            {{ $t("button.close") }}
          </BaseButton>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import type { OrderType } from "~/types/OrderType";
import { useOrderStore } from "@/composables/orderStore";
import type { ComponentBlockSectionPromotions } from "~/types/ProductGetType";

const locale = ref("ar"); // Or however you manage locale in your project

const { productPageBody } = useProductPage(locale);

const orderStore = useOrderStore();

const formCheckout = useFormCheckout();
const { clearFields } = formCheckout;
const { state, v$ } = toRefs(formCheckout);
const loading = ref(false);

const route = useRoute();
const isClient = useNuxtApp().$isClient;

const confirmationModalVisible = ref(false);

console.log("productPageBody", productPageBody.value);

const promotion = computed(() => {
  return productPageBody.value?.body?.find(
    (item) => item.__typename === "ComponentBlockSectionPromtions"
  ) as ComponentBlockSectionPromotions;
});

const addCommand = async () => {
  try {
    loading.value = true;
    const fullUrl = `${window.location.origin}${route.fullPath}`;

    const order: Omit<OrderType, "cDate" | "uDate" | "dDate" | "state"> = {
      fullname: state.value.fullName,
      address: state.value.address,
      phone: state.value.phone,
      product: {
        id: "lyr3r2t4cvgfermaq6oy83hp",
        permalink:
          productPageBody.value?.seo?.permalink || "lyr3r2t4cvgfermaq6oy83hp",
        title: productPageBody.value?.seo?.title || fullUrl,
        url: fullUrl,
      },
      quantity: state.value.quantity,
    };
    await orderStore.addOrder(order);
    confirmationModalVisible.value = true;
    clearFields();
    
  } catch (error) {
    console.error("Error adding command: ", error);
  } finally {
    loading.value = false;
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

.radio-btn {
  @apply relative;
  &-box {
    @apply border border-secondary rounded-md text-sm py-2 px-3
    text-secondary font-medium ps-9 relative duration-150;

    &:after {
      content: "";
      @apply border border-secondary
      absolute top-2.5 start-2.5 h-4 w-4 rounded-full duration-150;
    }
    &::before {
      content: "";
      @apply border border-secondary bg-secondary
      absolute top-3.5 start-3.5 h-2 w-2 rounded-full scale-0 duration-150;
    }
  }

  input {
    @apply pointer-events-none  absolute top-0 opacity-0;
    &:checked {
      & + {
        .radio-btn {
          &-box {
            // @apply bg-secondary text-white;
            &::before {
              @apply scale-100;
            }
          }
        }
      }
    }
  }
}
</style>
