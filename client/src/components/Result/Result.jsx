import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurScoreAndGetMaxScore } from "../../redux/actions/scoreAC";
import style from "./Result.module.css";

export default function Result() {
	const user = useSelector((state) => state.user);
	const points = useSelector((state) => state.points);
	const maxScore = useSelector((state) => state.maxScore);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurScoreAndGetMaxScore(user.id, points));
	}, []);

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
			<h3 style={{ 'margin': '30px', 'color': 'green' }}>Рекордный результат {maxScore} очков!</h3>
			<Link className="text-header" to="/game">Играем снова?</Link>
		</div>
	);
}
