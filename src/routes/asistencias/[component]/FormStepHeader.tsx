interface Props {
  step: number;
  title: string;
}

export default function FormStepHeader({ title, step }: Props) {
  return (
    <article className="flex justify-start items-center mb-4 h-20">
      <p className="flex h-16 w-16 p-6 items-center justify-center font-bold rounded-full bg-success text-2xl text-white">
        {step}
      </p>
      <h2 className="ml-2 text-2xl font-bold">{title}</h2>
    </article>
  );
}
