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
    // console.log(111);
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
      <tr className="category" style={style}>
        <thead className="quest head" style={style}>{title}</thead>
        <td className="quest quest_score" style={style} onClick={() => submitDiv(id, 200)} >200</td>
				<td className="quest quest_score" style={style} onClick={() => submitDiv(id, 400)} >400</td>
				<td className="quest quest_score" style={style} onClick={() => submitDiv(id, 600)} >600</td>
				<td className="quest quest_score" style={style} onClick={() => submitDiv(id, 800)} >800</td>
				<td className="quest quest_score" style={style} onClick={() => submitDiv(id, 1000)} >1000</td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h3>{test.quest}</h3>
              </Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Подтвердить
          </Button>
        </Modal.Footer>
      </Modal>
			</>
  );
}
