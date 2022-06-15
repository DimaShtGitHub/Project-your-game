import { initState } from "../initState";

export const allQuestionsReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_QUESTIONS':
			return payload;

		default:
			return state;
	}
}