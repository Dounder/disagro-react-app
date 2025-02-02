import { ProductList } from '@/routes/productos/[interfaces]';
import { ServiceList } from '@/routes/servicios/[interfaces]';
import { SelectionItem } from '../[interfaces]';

export const transformSelectionItems = (products: ProductList[], services: ServiceList[]): SelectionItem[] => {
  const productsItems: SelectionItem[] = products.map((product) => ({
    id: `p_${product.id}`,
    value: product.id,
    name: product.name,
    price: product.price,
    type: 'producto',
  }));

  const servicesItems: SelectionItem[] = services.map((service) => ({
    id: `s_${service.id}`,
    value: service.id,
    name: service.name,
    price: service.price,
    type: 'servicio',
  }));

  return [...productsItems, ...servicesItems];
};
