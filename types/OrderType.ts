import type { ProductType } from "./ProductType";

// types/order.ts
export interface OrderType {
  id?: string;
  fullname: string;
  address: string;
  phone: string;
  product?: ProductType;
  quantity?: number;
  cDate: string;
  uDate: string;
  dDate?: string | null;
  state: "created" | "opened" | "done" | "refused";
}
