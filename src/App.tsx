import styles from "./App.module.css";
import { Outlet, Link } from "react-router-dom";

function App() {
	return (
		<div className={styles["main-container"]}>
			<nav>
				<ul className={styles["navbar-container"]}>
					<li>SVG</li>
					<Link to="/">Todo List</Link>
					<Link to="/about">About</Link>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}

export { App };
