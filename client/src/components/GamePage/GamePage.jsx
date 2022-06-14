import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item/Item';
import style from './game.module.css';

export default function GamePage() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/quest')
     .then((data) => setCategories(data.data))
  }, []);
  
  return (
		<div className={style.game_container}>
    	<table className={style.field_container}>
      	{categories ? categories.map((el) => <Item title={el.title} id={el.id} key={el.id} />) : '404'}
    	</table>
		</div>
  )

}

