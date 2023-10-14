import React, { useState, useEffect } from "react";
import { formatTime } from "./utils";
import Modal from "../reusable/modal";
import { AppString } from "../../constants/strings";

interface CountdownTimerProps {
  /**
   * Should specify the time limit in minutes
   */
  timeLimitInMinutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  timeLimitInMinutes,
}) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(
    timeLimitInMinutes * 60
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => {
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

  const ExamOverStatus = () => (
    <div className="exam-over-status">{AppString.EXAM_OVER_DESCRIPTION}</div>
  );
  const renderModal = () => {
    if (timeRemaining === 0) {
      return (
        <Modal title={AppString.EXAM_OVER_MODAL_TITLE} isVisible>
          <ExamOverStatus />
        </Modal>
      );
    }
    return null;
  };
  return (
    <div className="countdown-timer">
      {formatTime(timeRemaining)}
      {renderModal()}
    </div>
  );
};

export default CountdownTimer;
