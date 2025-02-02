export type ItemType = 'product' | 'service';

export interface ItemSelection {
  id: string;
  value: any;
  name: string;
  price: string;
  type: ItemType;
}
