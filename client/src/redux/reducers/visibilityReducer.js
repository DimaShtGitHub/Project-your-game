import { initState } from "../initState";

export const visibilityReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_VISIBILITY':
			return payload;

		default:
			return state;
	}
}