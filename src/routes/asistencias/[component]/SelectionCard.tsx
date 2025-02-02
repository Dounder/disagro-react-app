import { useMemo } from 'react';

import { useProducts } from '@/routes/productos/[hooks]';
import { useServices } from '@/routes/servicios/[hooks]';
import { transformSelectionItems } from '../[helpers]';

import FormCard from './FormCard';
import SelectionCardBody from './SelectionCardBody';
import SelectionCardFooter from './SelectionCardFooter';
import SelectionCardHeader from './SelectionCardHeader';

interface Props {
  errors: Record<string, string>;
}

export default function SelectionCard({ errors }: Props) {
  const { products, loading: productLoading, refetch: refetchProducts } = useProducts();
  const { services, loading: servicesLoading, refetch: refetchServices } = useServices();
  const isLoading = productLoading || servicesLoading;
  const items = useMemo(() => transformSelectionItems(products, services), [products, services]);

  const handleRefetch = () => {
    refetchProducts();
    refetchServices();
  };

  return (
    <FormCard>
      <section className="w-full h-full">
        <SelectionCardHeader refetch={handleRefetch} />
        <SelectionCardBody loading={isLoading} items={items} error={errors.items} />
        <SelectionCardFooter />
      </section>
    </FormCard>
  );
}
