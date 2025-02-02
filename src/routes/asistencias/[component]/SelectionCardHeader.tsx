import CustomSearchBar from '@/components/CustomSearchBar';

interface Prop {
  refetch: () => void;
}

export default function SelectionCardHeader({ refetch }: Prop) {
  return (
    <section className="bg-primary w-full h-[15%] flex justify-center items-center px-12">
      <CustomSearchBar />
    </section>
  );
}
