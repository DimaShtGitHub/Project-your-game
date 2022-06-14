import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item/Item';
import style from './game.module.css';
import { useDispatch } from 'react-redux'


export default function GamePage() {
  const dispatch = useDispatch()
  const [counts, setCounts] = useState(0)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    console.log(counts);
    axios.get('http://localhost:3001/quest')
    .then((data) => setCategories(data.data));
    
    axios.get('http://localhost:3001/quest/all')
    .then((quest) => dispatch({type: 'SET_QUESTION', payload: {data: quest.data}}));
  }, [counts])
    

  return (  
		<div className={style.game_container}>
    	<table className={style.field_container}>
      	{categories ? categories.map((el) => <Item counts={counts} setCounts={setCounts} title={el.title} id={el.id} key={el.id} />) : '404'}
    	</table>
		</div>
  )

}

