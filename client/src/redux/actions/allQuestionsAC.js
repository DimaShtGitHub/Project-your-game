import axios from "axios";

export const setAllQuestions = (questions) => ({ type: 'SET_QUESTIONS', payload: questions });

export const getAllQuestions = () => async (dispatch) => {
	const questions = await axios.get('http://localhost:3001/get/questions');
	dispatch(setAllQuestions(questions.data));
};