export interface ProductList {
  id: number;
  name: string;
  description: string | null;
  price: number;
  createdAt: Date;
  deletedAt: Date | null;
}
