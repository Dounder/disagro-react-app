import { ProductList } from '@/routes/productos/[interfaces]';
import { ServiceList } from '@/routes/servicios/[interfaces]';
import { ItemSelection } from '../[interfaces]';

export const transformSelectionItems = (products: ProductList[], services: ServiceList[]): ItemSelection[] => {
  const productsItems: ItemSelection[] = products.map((product) => ({
    id: `p_${product.id}`,
    value: product.id,
    name: product.name,
    price: product.price,
    type: 'product',
  }));

  const servicesItems: ItemSelection[] = services.map((service) => ({
    id: `s_${service.id}`,
    value: service.id,
    name: service.name,
    price: service.price,
    type: 'service',
  }));

  return [...productsItems, ...servicesItems];
};
