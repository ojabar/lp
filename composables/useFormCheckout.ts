import { defineStore } from "pinia";
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export const useFormCheckout = defineStore("formCheckout", () => {
  const { t } = useI18n();

  const state = reactive({
    fullName: "",
    phone: "",
    city: "",
  });

  const rules = {
    fullName: {
      required: helpers.withMessage(t("error.firstname_required"), required),
    },
    phone: {
      required: helpers.withMessage(t("error.phone_required"), required),
    },
    city: {
      required: helpers.withMessage(t("error.phone_required"), required),
    },
  };

  const v$ = useVuelidate(rules, state);

  return { state, v$ };
});
