import { initState } from "../initState";

export const checkedQuestReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CHECK_QUEST':
			return (state + payload);

		default:
			return state;
	}
}