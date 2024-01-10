import React from 'react';
import styles from './ControlButtons.module.scss';

const ControlButtons = ({ timerOn, start, stop, reset }) => {
  return (
    <div className={styles.controlButtons}>
      <button onClick={start} disabled={timerOn}>Start</button>
      <button onClick={stop} disabled={!timerOn}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ControlButtons;