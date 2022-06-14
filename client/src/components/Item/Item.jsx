import axios from "axios";
import React, { useState } from "react";
import style from "./style.css";
import { Button, Modal, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Item({ title, id, counts, setCounts }) {
  const [show, setShow] = useState(false);
  const [test, setTest] = useState({});
  const [statusClick, setStatusClick] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState([])

  const questions = useSelector((state) => state.questions )

  function inputHandler(event) {
    setInputs(() => [event.target.value])
  }

  function submitDiv(id, score) {
    handleShow();
    setStatusClick(false)
    axios
      .post("http://localhost:3001/oneQuest", { id, score })
      .then((data) =>
        setTest(data.data)
      );
  }
  console.log('test', statusClick);

  function sumScore() {
    //TODO
    // const camelInput = inputs[0].toLowerCase()


    if(inputs[0] === test.answer) {
      // console.log(37, counts[0]);
      // console.log(test.score);
      setCounts((prev) => Number(prev) + Number(test.score))
      handleClose()
    } else {
      setCounts((prev) => Number(prev) - Number(test.score))
      handleClose()  
    }
  }

  return (
		<>
      <tbody>
        <tr className="category" style={style}>
          <th className="quest head" style={style}>{title}</th>
          <td className="quest quest_score" style={style} onClick={() => submitDiv(id, 200)}>200</td>
          <td className="quest quest_score" style={style} onClick={() => submitDiv(id, 400)} >400</td>
          <td className="quest quest_score" style={style} onClick={() => submitDiv(id, 600)} >600</td>
          <td className="quest quest_score" style={style} onClick={() => submitDiv(id, 800)} >800</td>
          <td className="quest quest_score" style={style} onClick={() => submitDiv(id, 1000)} >1000</td>
        </tr>
      </tbody>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h3>{test.text}</h3>
              </Form.Label>
              <Form.Control type="text" autoFocus onChange={inputHandler}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={() => (sumScore())}>
            Подтвердить
          </Button>
        </Modal.Footer>
      </Modal>
			</>
  );
}
