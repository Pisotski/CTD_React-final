import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App.tsx";
import { ErrorPage } from "./components/ErrorPage.tsx";
import { About } from "./components/About.tsx";
import { TodoContainer } from "./components/TodoContainer.tsx";
import { TodoListItemEdit } from "./components/TodoListItemEdit.tsx";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{ path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
