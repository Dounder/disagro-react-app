import { createFileRoute } from '@tanstack/react-router';
import AttendanceCard from './[components]/AttendanceCard';
import { useUserAttendances } from './[hooks]/useUserAttendances';

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
