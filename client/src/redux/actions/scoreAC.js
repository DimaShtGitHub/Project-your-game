import axios from "axios";

export const setMaxScore = (maxScore) => ({ type: 'SET_MAX_SCORE', payload: maxScore });

export const setCurScoreAndGetMaxScore = (id, points, dispatch) => async (dispatch) => {
	const maxScore = await axios.post(`http://localhost:3001/score`, { userId: id, totalScore: points });
	dispatch(setMaxScore(maxScore.data));
};