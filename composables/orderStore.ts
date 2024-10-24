// stores/orderStore.ts
import { defineStore } from "pinia";
import {
  addOrder,
  updateOrder as updateOrderService,
  fetchOrders as fetchOrdersService,
} from "@/services/orderService";
import type { OrderType } from "~/types/OrderType";

export const useOrderStore = defineStore("orderStore", {
  state: () => ({
    orders: [] as OrderType[],
  }),
  actions: {
    async fetchOrders() {
      this.orders = await fetchOrdersService();
    },
    async addOrder(
      order: Omit<OrderType, "cDate" | "uDate" | "dDate" | "state">
    ) {
      const newOrder = await addOrder(order);
      this.orders.push(newOrder);
    },
    async updateOrder(order: OrderType) {
      await updateOrderService(order);
      // Optionally, you might want to re-fetch or update local state
    },
  },
});
