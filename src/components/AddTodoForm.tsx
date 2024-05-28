import { Form } from "react-router-dom";
import { InputWithLabel } from "./InputWithLabel";

const AddTodoForm = () => {
	const inputName = "main";
	return (
		<>
			<Form>
				<InputWithLabel name={inputName}>
					<label htmlFor={inputName}>New Task:</label>
				</InputWithLabel>
				<button>Add</button>
			</Form>
		</>
	);
};

export { AddTodoForm };
