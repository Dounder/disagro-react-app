export interface ProductList {
  id: number;
  name: string;
  description: string | null;
  price: string;
  createdAt: Date;
  deletedAt: Date | null;
}
