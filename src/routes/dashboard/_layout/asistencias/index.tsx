import { createFileRoute } from '@tanstack/react-router';
import { useUserAttendances } from './[hooks]/useUserAttendances';
import { CurrencyUtil, DateUtil } from '@/utils';
import AttendanceCard from './[components]/AttendanceCard';

export const Route = createFileRoute('/dashboard/_layout/asistencias/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { attendances } = useUserAttendances();

  return (
    <div className="grid grid-cols-12 gap-6">
      {attendances.map((attendance) => (
        <AttendanceCard key={attendance.id} attendance={attendance} />
      ))}
    </div>
  );
}
