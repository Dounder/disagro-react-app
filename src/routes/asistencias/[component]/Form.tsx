import CustomBtn from '@/components/CustomBtn';
import RightArrow from '@/icons/RightArrow';
import RegistrationCard from './AttendeeInfoCard';
import FormSection from './FormSection';
import FormStepHeader from './FormStepHeader';
import InterestSelectionCard from './InterestSelectionCard';

export default function Form() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <FormSection>
        <FormStepHeader title="Datos Personales" step={1} />
        <RegistrationCard />
      </FormSection>
      <FormSection>
        <FormStepHeader step={2} title="Seleccione Servicios y Productos de su interés" />
        <InterestSelectionCard />
      </FormSection>
      <section className="col-span-full flex justify-end">
        <CustomBtn
          text="CONFIRMAR ASISTENCIA"
          className="flex justify-center items-center text-2xl bg-secondary rounded-2xl font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-secondary">
          <RightArrow fill="#fff" size="40px" />
        </CustomBtn>
      </section>
    </section>
  );
}
