import { initState } from "../initState";

export const pointsReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_POINTS':
			return payload;

		case 'PLUS_POINTS':
			return (state + payload);

		case 'DEDUCT_POINTS':
			return (state - payload);

		default:
			return state;
	}
}