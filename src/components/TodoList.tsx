import { useLocation } from "react-router-dom";
import { TodoListItem } from "./TodoListItem";

type record = {
	createdTime: string;
	fields: fields;
	id: string;
};
type fields = { title: string; completedAt: string };

const TodoList = () => {
	const location = useLocation();
	const { todoList } = location.state;
	console.log(todoList);
	return (
		<>
			{todoList.length ? (
				todoList.map(({ id, fields: { title } }: record) => (
					<TodoListItem key={id} title={title} />
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
