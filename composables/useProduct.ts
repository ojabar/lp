// Adjust import path accordingly

import ProductPageService from "~/services/ProductPageService";
import type { ProductPageType } from "~/types/ProductGetType";

export function useProductPage(locale: Ref<string>) {
  const productPageBody = ref<ProductPageType | null>(null); // Initialize with null until data is fetched

  const fetchProductPage = async (productId: string) => {
    const productService = new ProductPageService();
    try {
      const data = await productService.fetch({
        productId,
        locale: locale.value,
      });

      if (data) {
        productPageBody.value = data;
      }
    } catch (error) {
      throw error;
    }
  };

  return {
    productPageBody,
    fetchProductPage,
  };
}
