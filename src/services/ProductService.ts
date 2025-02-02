import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

class ProductService {
  async getProducts() {
    const db = getFirestore();
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);

    return snapshot.docs.map((doc) => doc.data() as IProduct);
  }

  async getProduct(id: string) {
    const db = getFirestore();
    const productsRef = collection(db, "products");
    const productRef = doc(productsRef, id);
    const snapshot = await getDoc(productRef);

    return snapshot.data() as IProduct;
  }

  async searchProducts(query: string) {
    const db = getFirestore();
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("name", ">=", query), where("name", "<=", query + "\uf8ff"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => doc.data() as IProduct);
  }
}

export default new ProductService();