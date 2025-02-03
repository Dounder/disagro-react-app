import RightArrow from '@/icons/RightArrow';
import { CurrencyUtil, DateUtil } from '@/utils';
import { Link } from '@tanstack/react-router';
import { AttendanceById, UserAttendanceList } from '../[interfaces]';

interface Props {
  attendance: AttendanceById | UserAttendanceList;
}

export default function AttendanceCardBody({ attendance }: Props) {
  const { date, time } = DateUtil.getDateAndTime(attendance.attendanceDate);
  const productDiscount = Number(attendance.products_discount_rate) * 100;
  const serviceDiscount = Number(attendance.services_discount_rate) * 100;

  return (
    <>
      <article className="flex items-center justify-between w-full h-full">
        <p className="font-semibold text-gray-700 line-clamp-2" title="Fecha de Asistencia">
          Fecha de Asistencia
        </p>
        <p className="text-sm text-gray-500 font-semibold">{date}</p>
      </article>

      <div className="w-full h-[1px] mx-auto bg-black/10"></div>

      <article className="flex items-center justify-between w-full h-full">
        <p className="font-semibold text-gray-700 line-clamp-2" title="Hora de Asistencia">
          Hora de Asistencia
        </p>
        <p className="text-sm text-gray-500 font-semibold">{time}</p>
      </article>

      <div className="w-full h-[1px] mx-auto bg-black/10"></div>

      <article className="flex items-center justify-between w-full h-full">
        <p className="font-semibold text-gray-700 line-clamp-2" title="Descuento en Servicios">
          Descuento en Servicios
        </p>
        <p className="text-sm text-gray-500 font-semibold">{serviceDiscount}%</p>
      </article>

      <div className="w-full h-[1px] mx-auto bg-black/10"></div>

      <article className="flex items-center justify-between w-full h-full">
        <p className="font-semibold text-gray-700 line-clamp-2" title="Descuento en Productos">
          Descuento en Productos
        </p>
        <p className="text-sm text-gray-500 font-semibold">{productDiscount}%</p>
      </article>

      <div className="w-full h-[1px] mx-auto bg-black/10"></div>

      <article className="flex items-center justify-between w-full h-full">
        <p className="font-semibold text-gray-700 line-clamp-2" title="Total Final">
          Total Final
        </p>
        <p className="text-sm text-gray-500 font-semibold">{CurrencyUtil.format(attendance.final_total)}</p>
      </article>
    </>
  );
}
