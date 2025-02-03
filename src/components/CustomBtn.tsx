interface Props {
  text: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function CustomBtn({ text, type = 'button', className = '', children, disabled, onClick }: Props) {
  return (
    <button type={type} disabled={disabled} className={className} onClick={onClick}>
      <span className="mr-2">{text}</span>
      {children}
    </button>
  );
}
