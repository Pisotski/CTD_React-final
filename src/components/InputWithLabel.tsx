import { FC, ReactElement } from "react";

type InputWithLabelProps = {
	name: string;
	children: ReactElement;
};

const InputWithLabel: FC<InputWithLabelProps> = ({ children, name }) => {
	return (
		<>
			{children}
			<input name={name} />
		</>
	);
};

export { InputWithLabel };
