import React from 'react';

import CustomLoader from '@/components/CustomLoader';
import { SelectionItem } from '../[interfaces]';
import SelectionCardItem from './SelectionCardItem';

interface Props {
  loading: boolean;
  items: SelectionItem[];
}

export default function SelectionCardBody({ loading: isLoading, items }: Props) {
  return (
    <section className="w-full h-[70%] overflow-x-auto py-4 relative">
      <p className="text-xl text-center text-primary font-bold h-[10%] flex justify-center items-center">
        Servicios y/o Productos seleccionados
      </p>
      <div className="flex flex-wrap justify-center items-start gap-4 h-[90%]">
        <section className="w-full pb-6">
          {isLoading ? (
            <CustomLoader />
          ) : (
            items.map((item, index) => (
              <React.Fragment key={item.id}>
                <SelectionCardItem {...item} />
                {index !== items.length - 1 && <div className="w-11/12 h-[1px] mx-auto bg-black/10"></div>}
              </React.Fragment>
            ))
          )}
        </section>
      </div>
    </section>
  );
}
