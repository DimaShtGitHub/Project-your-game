import axios from "axios";
import React, { useState } from "react";
import style from "./style.css";
import { Button, Modal, Form } from "react-bootstrap";

export default function Item({ title, id }) {
  const [show, setShow] = useState(false);
  const [test, setTest] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitDiv(id, score) {
    handleShow();

    axios
      .post("http://localhost:3001/oneQuest", { id, score })
      .then((data) =>
        setTest({ quest: data.data.text, answer: data.data.answer })
      );
  }

  console.log(test);

  return (
		<>
    <tbody>
      <tr className="category" style={style}>
        <th className="quest head" style={style}>{title}</th>
        <td className="quest quest_score" style={style} onClick={() => submitDiv(id, 200)}>200</td>
				<td className="quest quest_score" style={style} onClick={() => submitDiv(id, 400)}>400</td>
				<td className="quest quest_score" style={style} onClick={() => submitDiv(id, 600)}>600</td>
				<td className="quest quest_score" style={style} onClick={() => submitDiv(id, 800)}>800</td>
				<td className="quest quest_score" style={style} onClick={() => submitDiv(id, 1000)}>1000</td>
      </tr>
    </tbody>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <p style={{"text-align":"center", "font-size":"22px", "color": "#00084D"}}>{test.quest}</p>
              </Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button style={{"background":"#001499"}} variant="primary" onClick={handleClose}>
            Подтвердить
          </Button>
        </Modal.Footer>
      </Modal>
			</>
  );
}
