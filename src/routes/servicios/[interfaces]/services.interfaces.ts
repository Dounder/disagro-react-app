export interface ServiceList {
  id: number;
  name: string;
  description: string | null;
  price: string;
  createdAt: Date;
  deletedAt: Date | null;
}
