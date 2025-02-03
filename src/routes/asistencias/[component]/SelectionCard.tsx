import { useEffect, useMemo, useState } from 'react';

import { useProducts } from '@/routes/productos/[hooks]';
import { useServices } from '@/routes/servicios/[hooks]';
import { transformSelectionItems } from '../[helpers]';

import FormCard from './FormCard';
import SelectionCardBody from './SelectionCardBody';
import SelectionCardFooter from './SelectionCardFooter';
import SelectionCardHeader from './SelectionCardHeader';
import { SelectionItem } from '../[interfaces]';

interface Props {
  errors: Record<string, string>;
}

export default function SelectionCard({ errors }: Props) {
  const { products, loading: productLoading } = useProducts();
  const { services, loading: servicesLoading } = useServices();
  const isLoading = productLoading || servicesLoading;
  const items = useMemo(() => transformSelectionItems(products, services), [products, services]);
  const [filteredItems, setFilteredItems] = useState<SelectionItem[]>([]);

  const handleSearch = (search: string) => {
    const filtered = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredItems(filtered);
  };

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  return (
    <FormCard>
      <section className="w-full h-full">
        <SelectionCardHeader onSearch={handleSearch} />
        <SelectionCardBody loading={isLoading} items={filteredItems} error={errors.items} />
        <SelectionCardFooter />
      </section>
    </FormCard>
  );
}
