import { TodoList } from "./TodoList";
import { FC, useState, useEffect } from "react";
import {
	getAllTodos,
	postNewTodo,
	deleteTodo,
	record,
	sortTodosAlphabetically,
} from "../todoControllers";
import { AddTodoForm } from "./AddTodoForm";
import styles from "./TodoContainer.module.css";
type TodoContainerProps = {
	tableName: string;
};

const TodoContainer: FC<TodoContainerProps> = ({ tableName }) => {
	const [todoList, setTodoList] = useState<record[] | []>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchTodos = async () => {
			try {
				setIsLoading(true);
				const data = await getAllTodos(tableName);
				setTodoList(data);
			} catch (error) {
				console.error("Error fetching todos:", error);
				setTodoList([]);
			} finally {
				setIsLoading(false);
			}
		};

		fetchTodos();
	}, [tableName]);

	const addTodo = async (title: string) => {
		try {
			const result = await postNewTodo(tableName, title);
			setTodoList(sortTodosAlphabetically([...todoList, result]));
		} catch (err) {
			console.log(err);
		} finally {
			console.log(title + " added");
		}
	};

	const removeTodo = async (id: string) => {
		try {
			deleteTodo(tableName, id);
		} catch (err) {
			console.log(err);
		} finally {
			setTodoList(todoList.filter((record) => record.id !== id));
			console.log(id + " deleted");
		}
	};

	return (
		<div className={styles["list-container"]}>
			<h1>{tableName}</h1>
			<AddTodoForm onAddTodo={addTodo} />
			{isLoading ? (
				<div>Spinner Element</div>
			) : (
				<TodoList todoList={todoList} onRemove={removeTodo} />
			)}
		</div>
	);
};

export { TodoContainer };
