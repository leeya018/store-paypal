export const products: Product[] = [
  {
    id: "1",
    name: "Bench Grinder",
    image: "/images/p1.png",
    price: 120,
    description: "A powerful bench grinder for various grinding tasks.",
  },
  {
    id: "2",
    name: "Small cover",
    image: "/images/p2.png",
    price: 50,
    description: "A durable cover for small items.",
  },
  {
    id: "3",
    name: "Small cover 1",
    image: "/images/p3.png",
    price: 72,
    description: "A durable cover for small items.",
  },
];

export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};
