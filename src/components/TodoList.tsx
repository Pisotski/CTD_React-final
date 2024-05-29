import { FC } from "react";
import { TodoListItem } from "./TodoListItem";
import { record } from "../todoControllers";

type TodoListProps = {
	todoList: record[];
	onRemove: (id: string) => void;
};

const TodoList: FC<TodoListProps> = ({ todoList, onRemove }) => {
	return (
		<>
			{todoList && todoList.length ? (
				todoList.map(({ id, fields: { title } }: record) => (
					<TodoListItem key={id} title={title}>
						<button type="button" onClick={() => onRemove(id)}>
							x
						</button>
					</TodoListItem>
				))
			) : (
				<>
					<div>Nothing to display</div>
				</>
			)}
		</>
	);
};

export { TodoList };
