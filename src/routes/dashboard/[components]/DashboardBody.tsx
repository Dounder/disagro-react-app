interface Props {
  children?: React.ReactNode;
}

export default function DashboardBody({ children }: Props) {
  return (
    <div className="flex-grow overflow-auto dark:bg-dark-800 min-w-0">
      <div className="max-w-[1200px] w-full mx-auto p-6">{children}</div>
    </div>
  );
}
