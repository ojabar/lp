import { defineStore } from "pinia";
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export const useFormCheckout = defineStore("formCheckout", () => {
  const { t } = useI18n();

  const state = reactive({
    fullName: "",
    phone: "",
    address: "",
    quantity: 1,
  });

  const rules = {
    fullName: {
      required: helpers.withMessage(t("error.firstname_required"), required),
    },
    phone: {
      required: helpers.withMessage(t("error.phone_required"), required),
    },
    address: {
      required: helpers.withMessage(t("error.adresse_required"), required),
    },
  };

  const v$ = useVuelidate(rules, state);
  const clearFields = () => {
    state.fullName = "";
    state.phone = "";
    state.address = "";
    state.quantity = 1;
    v$.value.$reset()
  };

  return { state, v$, clearFields };
});
