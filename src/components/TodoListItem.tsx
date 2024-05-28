import { FC } from "react";

type TodoListItemProps = {
	title: string;
};

const TodoListItem: FC<TodoListItemProps> = ({ title }) => {
	return (
		<>
			<li>{title}</li>
		</>
	);
};

export { TodoListItem };
