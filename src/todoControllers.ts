const headers = {
	Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
	"Content-Type": "application/json",
};

type record = {
	createdTime: string;
	fields: fields;
	id: string;
};

type fields = { title: string; completedAt: string };

const getAllTodos = async (taleName: string): Promise<record[]> => {
	const url = `https://api.airtable.com/v0/${
		import.meta.env.VITE_AIRTABLE_BASE_ID
	}/${taleName}`;
	const response = await fetch(url, { headers });
	const result = await response.json();
	return sortTodosAlphabetically(result.records);
};

const postNewTodo = async (tableName: string, title: string) => {
	const url = `https://api.airtable.com/v0/${
		import.meta.env.VITE_AIRTABLE_BASE_ID
	}/${tableName}`;
	const response = await fetch(url, {
		headers,
		method: "POST",
		body: JSON.stringify({ fields: { title } }),
	});
	return await response.json();
};

const deleteTodo = async (tableName: string, id: string) => {
	const url = `https://api.airtable.com/v0/${
		import.meta.env.VITE_AIRTABLE_BASE_ID
	}/${tableName}/${id}`;
	const response = await fetch(url, {
		headers,
		method: "DELETE",
	});
	return await response.json();
};

const sortTodosAlphabetically = (records: record[]): record[] => {
	return records.sort((a, b) => {
		const nameA = a.fields.title.toUpperCase();
		const nameB = b.fields.title.toUpperCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});
};

export { getAllTodos, postNewTodo, sortTodosAlphabetically, deleteTodo };
export type { record };
