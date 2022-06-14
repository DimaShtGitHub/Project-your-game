import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item/Item';
import style from './game.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function GamePage() {
	const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [counts, setCounts] = useState(0);
	const navigate = useNavigate();

  const [categories, setCategories] = useState([])
	const [game, setGame] = useState(true)

	const showResult = (counts) => {
		// return navigate('/result');
		return setGame(false);
	}

  useEffect(() => {
    console.log(counts);
    axios.get('http://localhost:3001/quest')
    .then((data) => setCategories(data.data));
    
    axios.get('http://localhost:3001/quest/all')
    .then((quest) => dispatch({type: 'SET_QUESTION', payload: {data: quest.data}}));
  }, [counts])
    

  return (  
		<div className={style.page_container}>
		<div className={style.game_container}>
    	<table className={style.field_container}>
      	{categories ? categories.map((el) => <Item counts={counts} setCounts={setCounts} title={el.title} id={el.id} key={el.id} />) : '404'}
    	</table> 
		</div>
		<Button style={{"background":"red", "margin": "30px"}} variant="primary" onClick={()=> showResult(counts)}>Закончить игру</Button> 
		{!game ? 
		<div className={style.result_container}>
		<h1>Ваш результат, {user.name}, {counts} очков!</h1>
		<h1>Поздравляем!!!</h1>
		</div> : <div></div>}  
		</div>
  )
}

