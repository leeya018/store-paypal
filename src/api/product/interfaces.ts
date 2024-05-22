import { Timestamp } from "firebase/firestore";

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  currency: string;
  description: string;
};
