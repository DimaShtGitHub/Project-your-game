import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "./Result.module.css";

export default function Result({counts}) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
		<div className={style.result_container}>
		<h1>Ваш результат, {user.name}, {counts} очков!</h1>
		<h1>Поздравляем!!!</h1>
		</div>
  );
}
