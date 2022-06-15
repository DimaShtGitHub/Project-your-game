import React from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Result.module.css";

export default function Result() {
	const user = useSelector((state) => state.user);
	const points = useSelector((state) => state.points);

	return (
		<div className={style.result_container}>
     {
      points > 0 ?
      <>
			<h1>Ваш результат, {user.name}, {points} очков!</h1>
			<h1>Поздравляем!!!</h1>
      </>
      : points <= 0 ? <h1>Ваш результат, {user.name}, {points} очков!</h1>
      : <></>
     }
		</div>
	);
}
