// services/orderService.ts
import {
  getDatabase,
  ref as dbRef,
  push,
  update,
  get,
} from "firebase/database";
import type { OrderType } from "~/types/OrderType";

// Function to fetch all orders
export const fetchOrders = async (): Promise<OrderType[]> => {
  const db = getDatabase();
  const commandsRef = dbRef(db, "commands");
  const snapshot = await get(commandsRef);

  if (!snapshot.exists()) {
    return [];
  }

  const orders: OrderType[] = [];
  snapshot.forEach((childSnapshot) => {
    const data = childSnapshot.val();
    orders.push({
      ...data,
      id: childSnapshot.key,
    } as OrderType);
  });

  return orders;
};

export const addOrder = async (
  order: Omit<OrderType, "cDate" | "uDate" | "dDate" | "state">
): Promise<OrderType> => {
  const db = getDatabase();
  const commandsRef = dbRef(db, "commands");

  const cDate = new Date().toISOString();
  const newOrder: OrderType = {
    ...order,
    cDate: cDate,
    uDate: cDate,
    dDate: null,
    state: "created",
  };
  await push(commandsRef, newOrder);
  return newOrder;
};

export const updateOrder = async (order: OrderType): Promise<void> => {
  const db = getDatabase();
  const orderRef = dbRef(db, `commands/${order.id}`);
  await update(orderRef, {
    uDate: order.uDate,
    state: order.state,
  });
};
