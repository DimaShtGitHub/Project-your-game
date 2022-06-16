import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.css';
import Timer from '../Timer/Timer';
import { useNavigate } from 'react-router-dom';

export default function Item({ title, id }) {
	const categories = useSelector((state) => state.categories);
	const allQuestions = useSelector((state) => state.allQuestions);
	const question = useSelector((state) => state.question);
	const visibility = useSelector((state) => state.visibility);
	const answerResult = useSelector((state) => state.answerResult);
	const checkedQuest = useSelector((state) => state.checkedQuest);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClose = () => {
		dispatch({ type: 'SET_VISIBILITY', payload: false });
		if (checkedQuest === categories.length * 5) {
			navigate('/result');
		}
	};

	const handleShow = () => {
		dispatch({ type: "SET_ANSWER_RESULT", payload: "" });
		dispatch({ type: 'SET_VISIBILITY', payload: true })
	};

	const [inputAnswer, setInputAnswer] = useState({});
	const inputAnswerHandler = (e) => {
		setInputAnswer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const userClickHandler = (id, score, event) => {
		if (event.target.className !== "quest quest_score disabled") {
			event.target.className = "quest quest_score disabled";
			dispatch({ type: 'SET_CHECK_QUEST', payload: 1 })
			handleShow();
			const questions = allQuestions.filter((question) => question.categoryId === id && question.score === score);
			const question = questions[Math.floor(Math.random() * questions.length)]; //на случай, если  в бд несколько вопросов из одной категории и одним score
			dispatch({ type: "SET_QUESTION", payload: question });
		}
	};

	const checkAnswer = () => {
		if (inputAnswer.answer === question.answer) {
			dispatch({ type: "SET_ANSWER_RESULT", payload: "right" });
			dispatch({ type: "PLUS_POINTS", payload: question.score });
		} else {
			dispatch({ type: "SET_ANSWER_RESULT", payload: "wrong" });
			dispatch({ type: 'DEDUCT_POINTS', payload: question.score });
		}
	}

	return (
		<>
			<tbody>
				<tr className="category" style={style}>
					<th className="quest head" style={style}>{title}</th>
					<td className="quest quest_score" onClick={(event) => userClickHandler(id, 200, event)}>200</td>
					<td className="quest quest_score" onClick={(event) => userClickHandler(id, 400, event)}>400</td>
					<td className="quest quest_score" onClick={(event) => userClickHandler(id, 600, event)}>600</td>
					<td className="quest quest_score" onClick={(event) => userClickHandler(id, 800, event)}>800</td>
					<td className="quest quest_score" onClick={(event) => userClickHandler(id, 1000, event)}>1000</td>
				</tr>
			</tbody>

			<Modal show={visibility} onHide={handleClose}>
				<Modal.Body>
					<Timer handleClose={handleClose} />
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>
								<p style={{ 'textAlign': 'center', 'fontSize': '22px', 'color': '#00084D' }}>{question.text}</p>
							</Form.Label>
							<Form.Control type="text" name="answer" autoFocus onChange={inputAnswerHandler} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Form.Label>
					{answerResult === "right" ?
						<p style={{ 'textAlign': 'center', 'fontSize': '22px', 'color': 'green' }}>Верно!</p>
						: answerResult === "wrong" ? <p style={{ 'textAlign': 'center', 'fontSize': '22px', 'color': 'red' }}>Неверно!</p>
							: <p></p>}
				</Form.Label>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => handleClose()}>Закрыть</Button>
					<Button style={{ background: '#001499' }} variant="primary" onClick={() => checkAnswer()}>Подтвердить</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
