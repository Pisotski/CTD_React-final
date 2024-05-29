import { FC } from "react";
import { TodoListItem } from "./TodoListItem";
import { record } from "../todoControllers";
import TrashBin from "../assets/deleteButton.svg?react";
import styles from "./TodoList.module.css";

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
							<TrashBin className={styles["li-svg"]} />
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
