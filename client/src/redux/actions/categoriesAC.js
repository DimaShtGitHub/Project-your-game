import axios from "axios";

export const setCategories = (categories) => ({ type: 'SET_CATEGORIES', payload: categories });

export const getCategories = () => async (dispatch) => {
	const categories = await axios.get('http://localhost:3001/get/categories');
	console.log(categories);
	dispatch(setCategories(categories.data));
};