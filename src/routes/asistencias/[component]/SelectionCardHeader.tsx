interface Prop {
  refetch: () => void;
}

export default function SelectionCardHeader({ refetch }: Prop) {
  return (
    <section className="bg-primary w-full h-[15%] flex justify-center items-center px-12">
      {/* <CustomSearchBar /> */}
      <button onClick={refetch} className="bg-success text-gray-200 font-bold px-4 py-2 rounded-md">
        Recargar
      </button>
    </section>
  );
}
