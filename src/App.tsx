import "./App.css";
import { Outlet, Link, useLoaderData, useLocation } from "react-router-dom";
import { AddTodoForm } from "./components/AddTodoForm";
import { getAllTodos } from "./todoControllers.js";

const loader = async () => {
	const data = await getAllTodos();
	return data.records;
};

function App() {
	const todoList = useLoaderData();
	const location = useLocation();
	location.state = { todoList };

	return (
		<>
			<nav>
				<ul className="navbar-container">
					<li>SVG</li>
					<Link to="/todoList">Todo List</Link>
					<Link to="/about">About</Link>
				</ul>
			</nav>
			<AddTodoForm />
			<Outlet></Outlet>
		</>
	);
}

export { App, loader };
