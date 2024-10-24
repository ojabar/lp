
import type { ProductType } from "~/types/ProductType";
import Service from "./Services";

export default class ProductService extends Service {
  constructor() {
    super();
  }

  async product({
    idProduct,
    permalink,
  }: {
    idProduct: number | string;
    permalink: string;
  }) {
    // try {
    //   const data = await this.$get<ProductType>(`product`, options);
    //   return data;
    // } catch (error) {
    //   throw error;
    // }

    // return 

  }

  async products() {
    try {
      const data = await this.$get<ProductType[]>(`products.json`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
