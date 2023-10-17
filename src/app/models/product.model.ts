export interface Product {
  id: number;
  category: { id: number; name: string };
  description: string;
  price: number;
  images: string[];
  title: string;
}
