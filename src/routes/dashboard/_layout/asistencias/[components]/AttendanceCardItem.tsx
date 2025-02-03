interface Props {
  title: string;
  value: string;
  separator?: boolean;
}

export default function AttendanceCardItem({ title, value, separator = false }: Props) {
  return (
    <>
      <article className="flex justify-between items-center">
        <p className="font-semibold text-gray-700 line-clamp-2" title={title}>
          {title}
        </p>
        <p className="text-sm text-gray-500 font-semibold">{value}</p>
      </article>
      {separator && <div className="w-full h-[1px] mx-auto my-2 bg-black/10"></div>}
    </>
  );
}
