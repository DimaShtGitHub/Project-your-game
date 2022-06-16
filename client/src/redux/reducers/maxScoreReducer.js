import { initState } from "../initState";

export const maxScoreReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_MAX_SCORE':
			return payload;

		default:
			return state;
	}
}