export interface ServiceList {
  id: number;
  name: string;
  description: string | null;
  price: number;
  createdAt: Date;
  deletedAt: Date | null;
}
