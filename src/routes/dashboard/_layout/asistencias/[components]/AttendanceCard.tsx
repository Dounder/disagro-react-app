import { Link } from '@tanstack/react-router';

import RightArrow from '@/icons/RightArrow';
import { UserAttendanceList } from '../[interfaces]';
import AttendanceCardBody from './AttendanceCardBody';

interface Props {
  attendance: UserAttendanceList;
}

export default function AttendanceCard({ attendance }: Props) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.25)] bg-white overflow-hidden">
      <div className="px-6 py-4 bg-primary border-b">
        <h2 className="text-xl font-semibold text-gray-100">Detalles de Asistencia</h2>
      </div>

      <section className="p-6 space-y-2">
        <AttendanceCardBody attendance={attendance} />
        <Link
          to="/dashboard/asistencias/$id"
          params={{ id: attendance.id.toString() }}
          className="flex justify-end items-center mt-4">
          <button className="transition duration-200 p-2 flex justify-center items-center gap-2 cursor-pointer text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
            <span className="inline-block ml-1">Ver más</span>
            <RightArrow />
          </button>
        </Link>
      </section>
    </div>
  );
}
