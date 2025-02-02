import React, { useEffect, useState } from 'react';

import CustomLoader from '@/components/CustomLoader';
import { useProducts } from '@/routes/productos/[hooks]';
import { useServices } from '@/routes/servicios/[hooks]';
import { ItemSelection } from '../[interfaces]';
import FormCard from './FormCard';
import SelectionItem from './SelectionItem';

export default function InterestSelectionCard() {
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
    console.log([...productsItems, ...servicesItems]);
  }, [products, services]);

  return (
    <FormCard>
      <section className="w-full h-full">
        <section className="bg-primary w-full h-[15%] flex justify-center items-center px-12">
          {/* <CustomSearchBar /> */}
          <button onClick={handleRefetch} className="bg-success text-gray-200 font-bold px-4 py-2 rounded-md">
            Recargar
          </button>
        </section>
        <section className="w-full h-[70%] overflow-x-auto py-4 relative">
          <p className="text-xl text-center text-primary font-bold h-[10%] flex justify-center items-center">
            Servicios y/o Productos seleccionados
          </p>
          <div className="flex flex-wrap justify-center items-start gap-4 h-[90%]">
            <section className="w-full pb-6">
              {isLoading ? (
                <CustomLoader />
              ) : (
                <>
                  {items.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <SelectionItem key={index} id={item.id} name={item.id} price={item.price} value={item.value} />
                      {index !== items.length && <div className="w-11/12 h-[1px] mx-auto bg-black/10"></div>}
                    </React.Fragment>
                  ))}
                </>
              )}
            </section>
          </div>
        </section>
        <section className="bg-primary w-full h-[15%] flex justify-center items-center">
          <section className="w-1/2 text-center px-8">
            <p className="text-gray-200 text-sm font-bold">Descuento obtenido en Servicios</p>
            <p className="text-success text-xl font-bold">3%</p>
          </section>
          <div className="w-[1px] h-1/2 bg-gray-200/30"></div>
          <section className="w-1/2 text-center px-8">
            <p className="text-gray-200 text-sm font-bold">Descuento obtenido en Productos</p>
            <p className="text-success text-xl font-bold">3%</p>
          </section>
        </section>
      </section>
    </FormCard>
  );
}
