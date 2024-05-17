export const products: Product[] = [
  {
    id: "1",
    name: "Bench Grinder",
    image: "/images/wally.png",
    price: 120,
    description: "A powerful bench grinder for various grinding tasks.",
  },
  {
    id: "2",
    name: "Small cover",
    image: "/images/wally.png",
    price: 50,
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
