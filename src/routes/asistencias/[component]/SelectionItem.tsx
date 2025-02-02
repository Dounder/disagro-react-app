interface Props {
  id: string;
  value: string;
  name: string;
  price: number;
}

export default function SelectionItem({ id, value, name, price }: Props) {
  return (
    <div className="flex justify-start items-center gap-2 w-full h-12 hover:bg-gray-200/50 rounded-md transition-all duration-200 ease-in-out px-8">
      <input
        id={id}
        type="checkbox"
        className="appearance-none cursor-pointer w-6 h-6 border-3 border-primary rounded-lg 
                                checked:bg-success checked:border-success
                                hover:border-success hover:bg-success/20
                                focus:ring-2 focus:ring-success focus:ring-offset-0"
        value={value}
      />

      <label htmlFor={id} className="flex-1 h-full cursor-pointer">
        <section className="flex items-center justify-between w-full h-full">
          <p className="text-sm">{name}</p>
          <p className="text-sm">{price}</p>
        </section>
      </label>
    </div>
  );
}
