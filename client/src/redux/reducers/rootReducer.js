import { userReducer } from "./userReducer";
import { combineReducers } from 'redux';
import { questionsReducer } from "./questionsReducer";

export const rootReducer = combineReducers({
	user: userReducer,
  questions: questionsReducer 
});
