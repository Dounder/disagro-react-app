interface Props {
  text: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function CustomBtn({ text, type, className = '', children, disabled }: Props) {
  return (
    <button type={type} disabled={disabled} className={className}>
      <span className="mr-2">{text}</span>
      {children}
    </button>
  );
}
