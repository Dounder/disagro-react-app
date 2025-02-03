import { Link } from '@tanstack/react-router';

import RightArrow from '@/icons/RightArrow';
import { CurrencyUtil, DateUtil } from '@/utils';
import { UserAttendanceList } from '../[interfaces]';

interface Props {
  attendance: UserAttendanceList;
}

export default function AttendanceCard({ attendance }: Props) {
  const { date, time } = DateUtil.getDateAndTime(attendance.attendanceDate);
  const productDiscount = Number(attendance.products_discount_rate) * 100;
  const serviceDiscount = Number(attendance.services_discount_rate) * 100;

  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.25)] bg-white overflow-hidden">
      <div className="px-6 py-4 bg-primary border-b">
        <h2 className="text-xl font-semibold text-gray-100">Detalles de Asistencia</h2>
      </div>

      <div className="p-6 space-y-2">
        <section className="flex items-center justify-between w-full h-full">
          <p className="font-semibold text-gray-700 line-clamp-2" title="Fecha de Asistencia">
            Fecha de Asistencia
          </p>
          <p className="text-sm text-gray-500 font-semibold">{date}</p>
        </section>

        <div className="w-full h-[1px] mx-auto bg-black/10"></div>

        <section className="flex items-center justify-between w-full h-full">
          <p className="font-semibold text-gray-700 line-clamp-2" title="Hora de Asistencia">
            Hora de Asistencia
          </p>
          <p className="text-sm text-gray-500 font-semibold">{time}</p>
        </section>

        <div className="w-full h-[1px] mx-auto bg-black/10"></div>

        <section className="flex items-center justify-between w-full h-full">
          <p className="font-semibold text-gray-700 line-clamp-2" title="Descuento en Servicios">
            Descuento en Servicios
          </p>
          <p className="text-sm text-gray-500 font-semibold">{serviceDiscount}%</p>
        </section>

        <div className="w-full h-[1px] mx-auto bg-black/10"></div>

        <section className="flex items-center justify-between w-full h-full">
          <p className="font-semibold text-gray-700 line-clamp-2" title="Descuento en Productos">
            Descuento en Productos
          </p>
          <p className="text-sm text-gray-500 font-semibold">{productDiscount}%</p>
        </section>

        <div className="w-full h-[1px] mx-auto bg-black/10"></div>

        <section className="flex items-center justify-between w-full h-full">
          <p className="font-semibold text-gray-700 line-clamp-2" title="Total Final">
            Total Final
          </p>
          <p className="text-sm text-gray-500 font-semibold">{CurrencyUtil.format(attendance.final_total)}</p>
        </section>

        <Link to="/dashboard/asistencias" className="flex justify-end items-center mt-4">
          <button className="transition duration-200 p-2 flex justify-center items-center gap-2 cursor-pointer text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
            <span className="inline-block ml-1">Ver más</span>
            <RightArrow />
          </button>
        </Link>
      </div>
    </div>
  );
}
