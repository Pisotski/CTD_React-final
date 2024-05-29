import { useState, ChangeEventHandler, FormEventHandler, FC } from "react";
import { InputWithLabel } from "./InputWithLabel";

type addTodoFormProps = {
	onAddTodo: (title: string) => void;
};

const AddTodoForm: FC<addTodoFormProps> = ({ onAddTodo }) => {
	const [todoTitle, setTodoTitle] = useState("");

	const handleAddTodo: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		onAddTodo(todoTitle);
		setTodoTitle("");
	};

	const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setTodoTitle(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleAddTodo}>
				<InputWithLabel
					todoTitle={todoTitle}
					handleTitleChange={handleTitleChange}
				>
					<label htmlFor={todoTitle}>New Task:</label>
				</InputWithLabel>
				<button type="submit" disabled={!todoTitle}>
					Add
				</button>
			</form>
		</>
	);
};

export { AddTodoForm };
