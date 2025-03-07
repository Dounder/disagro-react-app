import { CurrencyUtil } from '@/utils';
import { SelectionItem } from '../[interfaces]';
import { useAttendanceStore } from '../[stores]';

export default function SelectionCardItem(item: SelectionItem) {
  const items = useAttendanceStore((state) => state.items);
  const addItem = useAttendanceStore((state) => state.addItem);
  const removeItem = useAttendanceStore((state) => state.removeItem);

  return (
    <div className="flex justify-start items-center gap-2 w-full h-min-12 hover:bg-gray-200/50 rounded-md transition-all duration-200 ease-in-out px-8">
      <input
        id={item.id}
        type="checkbox"
        className="appearance-none cursor-pointer w-8 h-8 border-3 border-primary rounded-lg 
                                checked:bg-success checked:border-success
                                hover:border-success hover:bg-success/20
                                focus:ring-2 focus:ring-success focus:ring-offset-0"
        checked={items.some(({ id }) => item.id === id)}
        onChange={({ target }) => (target.checked ? addItem(item) : removeItem(item.id))}
      />

      <label htmlFor={item.id} className="flex-1 h-full cursor-pointer">
        <section className="flex items-center justify-between w-full h-full">
          <section>
            <p className="font-semibold text-gray-700 line-clamp-2" title={item.name}>
              {item.name}
            </p>
            <p className="text-sm text-gray-500 capitalize">{item.type}</p>
          </section>
          <section className="flex items-center justify-end">
            <p className="text-sm text-gray-500 font-semibold">{CurrencyUtil.format(item.price)}</p>
          </section>
        </section>
      </label>
    </div>
  );
}
