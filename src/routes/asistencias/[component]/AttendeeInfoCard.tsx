import CustomInput from '@/components/CustomInput';
import { useAttendanceStore } from '../[stores]';
import FormCard from './FormCard';

export default function AttendeeInfoCard() {
  const firstName = useAttendanceStore((state) => state.firstName);
  const lastName = useAttendanceStore((state) => state.lastName);
  const email = useAttendanceStore((state) => state.email);
  const attendanceDate = useAttendanceStore((state) => state.attendanceDate);

  const setFirstName = useAttendanceStore((state) => state.setFirstName);
  const setLastName = useAttendanceStore((state) => state.setLastName);
  const setEmail = useAttendanceStore((state) => state.setEmail);
  const setAttendanceDate = useAttendanceStore((state) => state.setAttendanceDate);

  return (
    <FormCard>
      <section className="w-full h-full p-4 md:p-8 flex flex-col justify-center items-center gap-8">
        <CustomInput
          id="firstName"
          label="Nombre:"
          placeholder="Introduzca su nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <CustomInput
          id="lastName"
          label="Apellido:"
          placeholder="Introduzca su apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <CustomInput
          id="email"
          label="Correo Electrónico:"
          placeholder="Introduzca su correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          id="attendanceDate"
          label="Fecha y Hora:"
          type="datetime-local"
          value={attendanceDate.toISOString().slice(0, 16)}
          onChange={(e) => setAttendanceDate(e.target.value)}
        />
      </section>
    </FormCard>
  );
}
