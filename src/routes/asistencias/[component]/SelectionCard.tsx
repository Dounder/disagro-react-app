import { useEffect, useState } from 'react';

import { useProducts } from '@/routes/productos/[hooks]';
import { useServices } from '@/routes/servicios/[hooks]';
import { ItemSelection } from '../[interfaces]';
import FormCard from './FormCard';
import SelectionCardBody from './SelectionCardBody';
import SelectionCardFooter from './SelectionCardFooter';
import SelectionCardHeader from './SelectionCardHeader';

export default function SelectionCard() {
  const { products, loading: productLoading, refetch: refetchProducts } = useProducts();
  const { services, loading: servicesLoading, refetch: refetchServices } = useServices();
  const isLoading = productLoading || servicesLoading;
  const [items, setItems] = useState<ItemSelection[]>([]);

  const handleRefetch = () => {
    refetchProducts();
    refetchServices();
  };

  useEffect(() => {
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
    setItems([...productsItems, ...servicesItems]);
  }, [products, services]);

  return (
    <FormCard>
      <section className="w-full h-full">
        <SelectionCardHeader refetch={handleRefetch} />
        <SelectionCardBody loading={isLoading} items={items} />
        <SelectionCardFooter />
      </section>
    </FormCard>
  );
}
