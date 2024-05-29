import { FC, ReactElement, ChangeEventHandler, useEffect, useRef } from "react";

type InputWithLabelProps = {
	todoTitle: string;
	children: ReactElement;
	handleTitleChange: ChangeEventHandler<HTMLInputElement>;
};

const InputWithLabel: FC<InputWithLabelProps> = ({
	children,
	todoTitle,
	handleTitleChange,
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	});
	return (
		<>
			{children}
			<input
				ref={inputRef}
				name={todoTitle}
				id={todoTitle}
				type="text"
				value={todoTitle}
				onChange={handleTitleChange}
			/>
		</>
	);
};

export { InputWithLabel };
