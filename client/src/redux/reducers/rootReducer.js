import { combineReducers } from 'redux';
import { pointsReducer } from './pointsReducer';
import { userReducer } from './userReducer';
import { categoriesReducer } from './categoriesReducer';
import { allQuestionsReducer } from './allQuestionsReducer';
import { oneQuestionReducer } from './oneQuestionReducer';
import { visibilityReducer } from './visibilityReducer';
import { answerResultReducer } from './answerResultReducer';
import { checkedQuestReducer } from './checkedQuestReducer';
import { maxScoreReducer } from './maxScoreReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	points: pointsReducer,
	categories: categoriesReducer,
	allQuestions: allQuestionsReducer,
	question: oneQuestionReducer,
	visibility: visibilityReducer,
	answerResult: answerResultReducer,
	checkedQuest: checkedQuestReducer,
	maxScore: maxScoreReducer,
});
