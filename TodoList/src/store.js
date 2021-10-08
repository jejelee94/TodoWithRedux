import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
	return {
		type: ADD,
		text,
	};
};
export const deleteToDo = (id) => {
	return {
		type: DELETE,
		id,
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [{ type: action.text, id: Date.now() }, ...state];
		case DELETE:
			return state.filter((toDo) => toDo !== action.id);
	}
};

const store = createStore();

store.subscribe();

export default store;
