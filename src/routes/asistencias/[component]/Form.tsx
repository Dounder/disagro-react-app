import { FormEvent, useEffect, useState } from 'react';

import CustomBtn from '@/components/CustomBtn';
import { useNotification } from '@/hooks';
import RightArrow from '@/icons/RightArrow';
import { useAttendanceCreation } from '../[hooks]';
import { useAttendanceStore } from '../[stores]';
import RegistrationCard from './AttendeeInfoCard';
import FormSection from './FormSection';
import FormStepHeader from './FormStepHeader';
import SelectionCard from './SelectionCard';

export default function Form() {
  const { showLoading, closeLoading } = useNotification();
  const { mutate, isPending } = useAttendanceCreation();

  const validate = useAttendanceStore((state) => state.validate);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const firstName = useAttendanceStore((state) => state.firstName);
  const lastName = useAttendanceStore((state) => state.lastName);
  const email = useAttendanceStore((state) => state.email);
  const attendanceDate = useAttendanceStore((state) => state.attendanceDate);
  const items = useAttendanceStore((state) => state.items);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { isValid, errors } = validate();

    if (!isValid) {
      setErrors(errors);
      return;
    } else {
      setErrors({});
      mutate({ firstName, lastName, email, attendanceDate, items });
    }
  };

  useEffect(() => {
    isPending && showLoading();
  }, [isPending]);

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <FormSection>
        <FormStepHeader title="Datos Personales" step={1} />
        <RegistrationCard errors={errors} />
      </FormSection>
      <FormSection>
        <FormStepHeader step={2} title="Seleccione Servicios y Productos de su interés" />
        <SelectionCard errors={errors} />
      </FormSection>
      <section className="col-span-full flex justify-end">
        <CustomBtn
          type="submit"
          text="CONFIRMAR ASISTENCIA"
          className="flex justify-center cursor-pointer items-center text-2xl bg-secondary rounded-2xl font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-secondary/80">
          <RightArrow fill="#fff" size="40px" />
        </CustomBtn>
      </section>
    </form>
  );
}
