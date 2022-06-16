import React, { useEffect } from 'react'
import Item from '../CategoryQuests/CategoryQuestsItem';
import style from './game.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../redux/actions/categoriesAC';
import { getAllQuestions } from '../../redux/actions/allQuestionsAC';


export default function GamePage() {
	const categories = useSelector((state) => state.categories);
	const allQuestions = useSelector((state) => state.allQuestions);

	const dispatch = useDispatch()
	const navigate = useNavigate();

	useEffect(() => {
		dispatch({ type: "SET_POINTS", payload: 0 });
		dispatch(getCategories());
		dispatch(getAllQuestions());
	}, []);

	const showResult = () => {
		return navigate('/result');
	}

	return (
		<div className={style.page_container}>
			<div className={style.game_container}>
				<table className={style.field_container}>
					{categories ? categories.map((el) => <Item allQuestions={allQuestions} title={el.title} id={el.id} key={el.id} />) : '404'}
				</table>
			</div>
			<Button style={{ "background": "red", "position": "fixed", right: "3%", bottom: "17%", }} variant="primary" onClick={() => showResult()}>Закончить игру</Button>
		</div>
	)
}

