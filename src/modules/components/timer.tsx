import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formatTime = (): string => {
    const hours: number = Math.floor(time / 3600);
    const minutes: number = Math.floor((time % 3600) / 60);
    const seconds: number = time % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div>
      <h1>{formatTime()}</h1>
    </div>
  );
};

export default Timer;
