interface Props {
  children?: React.ReactNode;
}

export default function FormCard({ children }: Props) {
  return (
    <section className="h-[42rem] rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.25)] bg-white overflow-hidden">
      {children}
    </section>
  );
}
