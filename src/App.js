import React, { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay/TimerDisplay.js';
import ControlButtons from './components/ControlButtons/ControlButtons.js';
import './App.scss';

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <TimerDisplay time={time} />
      <ControlButtons
        timerOn={timerOn}
        start={() => setTimerOn(true)}
        stop={() => setTimerOn(false)}
        reset={() => setTime(0)}
      />
    </div>
  );
}

export default App;