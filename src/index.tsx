import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App.tsx";
import { ErrorPage } from "./components/ErrorPage.tsx";
import { About } from "./components/About.tsx";
import { TodoContainer } from "./components/TodoContainer.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <TodoContainer tableName={import.meta.env.VITE_TABLE_NAME} />,
			},
		],
	},
	{ path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
