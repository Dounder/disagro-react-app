export type ItemType = 'producto' | 'servicio';

export interface SelectionItem {
  id: string;
  value: any;
  name: string;
  price: number;
  type: ItemType;
}
