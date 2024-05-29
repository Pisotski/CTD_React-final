import { FC, ReactElement } from "react";

type TodoListItemProps = {
	title: string;
	children: ReactElement;
};

const TodoListItem: FC<TodoListItemProps> = ({ title, children }) => {
	return (
		<>
			<li>{title}</li>
			<span>{children}</span>
		</>
	);
};

export { TodoListItem };
