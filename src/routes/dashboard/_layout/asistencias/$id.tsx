import { createFileRoute, Link } from '@tanstack/react-router';

import LeftArrow from '@/icons/LeftArrow';
import { CurrencyUtil } from '@/utils';
import AttendanceCardBody from './[components]/AttendanceCardBody';
import AttendanceCardItem from './[components]/AttendanceCardItem';
import { useAttendanceById } from './[hooks]';

export const Route = createFileRoute('/dashboard/_layout/asistencias/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { attendance } = useAttendanceById(+id);

  if (!attendance) return <>Loading...</>;

  return (
    <section className="rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.25)] bg-white overflow-hidden">
      <section className="px-6 py-4 bg-primary border-b flex justify-start items-center">
        <Link to="/dashboard/asistencias">
          <button className="flex justify-center items-center transition duration-200 p-2 cursor-pointer text-gray-200 hover:bg-gray-200/20 rounded-lg">
            <LeftArrow />
            <span className="ml-2 h-full">Regresar</span>
          </button>
        </Link>
        <h2 className="ml-2 text-xl font-semibold text-gray-100 h-full">Detalles de Asistencia</h2>
      </section>

      <section className="p-6">
        <AttendanceCardBody attendance={attendance} />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <section className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-semibold text-center mb-4">Productos</h4>

            <AttendanceCardItem
              title="Total original"
              value={CurrencyUtil.format(attendance.products_original_total)}
              separator
            />
            <AttendanceCardItem
              title="Monto Descuento"
              value={CurrencyUtil.format(attendance.products_discount_amount)}
              separator
            />
            <AttendanceCardItem
              title="Total Final"
              value={CurrencyUtil.format(attendance.products_final_total)}
              separator
            />
          </section>
          <section className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-semibold text-center mb-4">Servicios</h4>

            <AttendanceCardItem
              title="Total original"
              value={CurrencyUtil.format(attendance.services_original_total)}
              separator
            />
            <AttendanceCardItem
              title="Monto Descuento"
              value={CurrencyUtil.format(attendance.services_discount_amount)}
              separator
            />
            <AttendanceCardItem
              title="Total Final"
              value={CurrencyUtil.format(attendance.services_final_total)}
              separator
            />
          </section>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <section className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-semibold text-center mb-4">Productos Seleccionados</h4>
            {attendance.attendanceProducts.length === 0 ? (
              <p className="text-gray-500 text-center">No hay productos seleccionados</p>
            ) : (
              attendance.attendanceProducts.map((product) => (
                <AttendanceCardItem
                  key={product.id}
                  title={product.product.name}
                  value={CurrencyUtil.format(product.price)}
                  separator={product !== attendance.attendanceProducts[attendance.attendanceProducts.length - 1]}
                />
              ))
            )}
          </section>
          <section className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-semibold text-center mb-4">Servicios Seleccionados</h4>
            {attendance.attendanceServices.length === 0 ? (
              <p className="text-gray-500 text-center">No hay servicios seleccionados</p>
            ) : (
              attendance.attendanceServices.map((product) => (
                <AttendanceCardItem
                  key={product.id}
                  title={product.service.name}
                  value={CurrencyUtil.format(product.price)}
                  separator={product !== attendance.attendanceServices[attendance.attendanceServices.length - 1]}
                />
              ))
            )}
          </section>
        </section>
      </section>
    </section>
  );
}
