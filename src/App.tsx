import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { TodoContainer } from "./components/TodoContainer";
const tableName = import.meta.env.VITE_TABLE_NAME;

function App() {
	return (
		<>
			<nav>
				<ul className="navbar-container">
					<li>SVG</li>
					<Link to="/">Todo List</Link>
					<Link to="/about">About</Link>
				</ul>
			</nav>
			<TodoContainer tableName={tableName} />
			<Outlet />
		</>
	);
}

export { App };
