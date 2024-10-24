<template>
  <div>
    <div v-for="data in productPageBody?.body">
      <BlocksTopBanner
        v-if="data.__typename === 'ComponentBlockTopBanner'"
        :data="data"
        class="mb-10"
      />

      <BlocksCms
        v-if="data.__typename === 'ComponentBlockCms'"
        :data="data"
        class="mb-10"
      />
      <BlocksQuestions
        v-if="data.__typename === 'ComponentBlockSectionPrimary'"
        :data="data"
        class="mb-10"
      />
      <BlocksProprities
        v-if="data.__typename === 'ComponentBlockSectionSecondary'"
        :data="data"
        class="mb-10"
      />
      <BlocksOptions
        v-if="data.__typename === 'ComponentBlockSectionDefault'"
        :data="data"
        class="mb-10"
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
        :data="productPageBody"
        :title="data.title"
        class="mb-10"
      />
    </div>

    <!-- <BlocksOffer />
     -->
  </div>
</template>

<script setup lang="ts">
import { useProductPage } from "@/composables/useProduct";
import { productAr, productFr } from "@/public/db";

const locale = ref("ar"); // Or however you manage locale in your project

const productPageBody = computed(() => {
  if (locale.value === "ar") {
    return productAr.product;
  } else {
    return productFr.product;
  }
});

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
      content: productPageBody.value?.seo?.image?.url,
    },
  ],
});

// const { productPageBody, fetchProductPage } = useProductPage(locale);

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
