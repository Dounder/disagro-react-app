export default function SelectionCardFooter() {
  return (
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
  );
}
