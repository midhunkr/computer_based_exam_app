import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  timeLimitInMinutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLimitInMinutes }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(timeLimitInMinutes * 60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerId);
          return 0;
        }
      });
    }, 1000);
  
    return () => {
      clearInterval(timerId);
    };
  }, []);
  

  const formatTime = (): string => {
    const hours: number = Math.floor(timeRemaining / 3600);
    const minutes: number = Math.floor((timeRemaining % 3600) / 60);
    const seconds: number = timeRemaining % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className='countdown-timer'>
      <h4>{formatTime()}</h4>
    </div>
  );
};

export default CountdownTimer;
