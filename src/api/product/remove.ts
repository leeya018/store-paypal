import { db, storage } from "@/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

export const removeProductApi = async (productId: string, imageUrl: string) => {
  try {
    // Remove product document from Firestore
    await deleteDoc(doc(db, "products", productId));

    // Remove associated image from Firebase Storage
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);

    console.log("Product removed successfully!");
  } catch (error) {
    console.error("Error removing product:", error);
    throw new Error(error.message);
  }
};
