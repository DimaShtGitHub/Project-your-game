import { initState } from "../initState";

export const answerResultReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_ANSWER_RESULT':
			return payload;

		default:
			return state;
	}
}