<template>
  <div>
    <div v-for="data in productPageBody?.body" :key="data.id">
      <BlocksTopBanner
        v-if="data.__typename === 'ComponentBlockTopBanner'"
        :data="data"
      />

      <BlocksCms v-if="data.__typename === 'ComponentBlockCms'" :data="data" />
      <BlocksQuestions
        v-if="data.__typename === 'ComponentBlockSectionPrimary'"
        :data="data"
      />
      <BlocksProprities
        v-if="data.__typename === 'ComponentBlockSectionSecondary'"
        :data="data"
      />
      <BlocksOptions
        v-if="data.__typename === 'ComponentBlockSectionDefault'"
        :data="data"
      />
      <BlocksPromotion
        v-if="data.__typename === 'ComponentBlockSectionPromtions'"
        :data="data"
      />
      <BlocksReviews
        v-if="data.__typename === 'ComponentBlockSectionReviews'"
        :data="data"
      />
      <BlocksCheckout
        v-if="data.__typename === 'ComponentFromCheckout' && productPageBody"
        :data="data"
      />
      <BlocksMedias
        v-if="
          data.__typename === 'ComponentBlockSectionMedia' && productPageBody
        "
        :data="data"
      />
      <BlocksSpacer
        v-if="data.__typename === 'ComponentCommonSpacer' && productPageBody"
      />
    </div>

    <!-- <BlocksOffer />
     -->
  </div>
</template>

<script setup lang="ts">
import { useProductPage } from "@/composables/useProduct";

const locale = ref("ar"); // Or however you manage locale in your project
const { productPageBody, fetchProductPage } = useProductPage(locale);

// const productPageBody = computed(() => {
//   if (locale.value === "ar") {
//     return productAr.product;
//   } else {
//     return productFr.product;
//   }
// });

useHead({
  title: productPageBody.value?.seo?.title,
  meta: [
    {
      name: "description",
      content: productPageBody.value?.seo?.description,
    },
    {
      property: "og:title",
      content: productPageBody.value?.seo?.title,
    },
    {
      property: "og:description",
      content: productPageBody.value?.seo?.description,
    },
    {
      property: "og:image",
      content:
        productPageBody.value?.seo?.image?.url ||
        "/uploads/MAKUTE_600w_cc5c56e567.jpg",
    },
    {
      property: "og:image:alt",
      content: productPageBody.value?.seo?.title || "Product image", // Optional alt text for the image
    },
  ],
});

// await fetchProductPage("lyr3r2t4cvgfermaq6oy83hp");

// import ProductService from "~/services/ProductService";
// import type { ProductPageType } from "~/types/ProductGetType";

// const { locale } = useI18n();

// const productPageBody = ref<ProductPageType>();

// const productService = new ProductService();
// productService
//   .fetch({
//     productId: "lyr3r2t4cvgfermaq6oy83hp",
//     locale: locale.value as string,
//   })
//   .then((data) => {
//     console.log("data", data);

//     productPageBody.value = data;
//   });
</script>

<style scoped></style>
