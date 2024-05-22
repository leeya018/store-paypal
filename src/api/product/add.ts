// firebaseUtils.ts

import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";
import { Product } from "@/components/AddProductForm";

export const addProduct = async (product: Product) => {
  try {
    let imageUrl = "";

    // Upload image to Firebase Storage
    if (product.image) {
      const storageRef = ref(storage, `products/${product.image.name}`);
      const snapshot = await uploadBytes(storageRef, product.image);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    // Add product to Firestore
    await addDoc(collection(db, "products"), {
      name: product.name,
      imageUrl: imageUrl,
      price: product.price,
      currency: product.currency,
      description: product.description,
      createdAt: new Date(),
    });

    console.log("Product added successfully!");
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error(error.message);
  }
};
