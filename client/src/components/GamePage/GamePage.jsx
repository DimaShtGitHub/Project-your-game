import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item/Item';

export default function GamePage() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/quest')
     .then((data) => setCategories(data.data))
  }, []);
  
  return (
    <div>
      {categories ? categories.map((el) => <Item title={el.title} id={el.id} key={el.id} />) : '404'}
    </div>
  )

}

