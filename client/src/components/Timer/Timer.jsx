import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./style.css";



const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Поздно...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Осталось</div>
      <div className="value">{remainingTime}</div>
      <div className="text">секунд</div>
    </div>
  );
};

export default function Timer({handleClose}) {
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[30, 20, 10, 0]}
          onComplete={() => {setTimeout(handleClose, 1000)}}>
          {renderTime}
        </CountdownCircleTimer>
      </div>
     
    </div>
  );
}


