interface Props {
	children: React.ReactNode;
	className?: string; // Add optional className prop
}

export default function FormSection({ children, className = '' }: Props) {
	return <section className={className}>{children}</section>;
}
