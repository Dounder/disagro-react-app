import CustomSearchBar from '@/components/CustomSearchBar';
import FormCard from './FormCard';
import SelectionItem from './SelectionItem';

export default function InterestSelectionCard() {
  return (
    <FormCard>
      <section className="w-full h-full">
        <section className="bg-primary w-full h-[15%] flex justify-center items-center px-12">
          <CustomSearchBar />
        </section>
        <section className="w-full h-[70%] overflow-x-auto py-4">
          <p className="text-xl text-center text-primary font-bold w-10/12 mx-auto mb-2">
            Servicios y/o Productos seleccionados
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <section className="w-full">
              <SelectionItem id="1" value="1" name="1" price={0} />
              <hr className="w-11/12 mx-auto" />
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
