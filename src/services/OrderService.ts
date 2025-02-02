import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

interface IOrder {
  id: string;
  userId: string;
  products: IProduct[];
  totalPrice: number;
  createdAt: Date;
}

class OrderService {
  async createOrder(order: IOrder) {
    const db = getFirestore();
    const ordersRef = collection(db, "orders");
    const newOrderRef = await addDoc(ordersRef, {
      ...order,
      createdAt: serverTimestamp(),
    });

    return newOrderRef.id;
  }

  async getOrders(userId: string) {
    const db = getFirestore();
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("userId", "==", userId));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => doc.data() as IOrder);
  }
}

export default new OrderService();