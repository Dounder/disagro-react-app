interface Props {
	text: string;
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
}

export default function CustomBtn({ text, className = '', children, disabled }: Props) {
	return (
		<button disabled={disabled} className={className}>
			<span className="mr-2">{text}</span>
			{children}
		</button>
	);
}
