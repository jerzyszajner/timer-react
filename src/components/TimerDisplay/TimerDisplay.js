import React from 'react';
import styles from './TimerDisplay.module.scss';

const TimerDisplay = ({ time }) => {
  const formatNumber = (number) => (`0${number}`).slice(-2);

  const milliseconds = time % 1000;
  const seconds = formatNumber(Math.floor(time / 1000) % 60);
  const minutes = formatNumber(Math.floor(time / 60000) % 60);
  const hours = formatNumber(Math.floor(time / 3600000));

  return (
    <div className={styles.timerDisplay}>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>.<span>{milliseconds}</span>
    </div>
  );
};

export default TimerDisplay;