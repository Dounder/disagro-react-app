export type ItemType = 'producto' | 'servicio';

export interface ItemSelection {
  id: string;
  value: any;
  name: string;
  price: string;
  type: ItemType;
}
