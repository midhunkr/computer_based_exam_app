import { useEffect, useState } from "react";

const QuestionStatusBadge = ({ data = {} }) => {
  const [styleForTheBadge, setStyleForBadge] = useState();
  const { number, isAnswered, isVisited, isNotAnswered, isFlagged } = data;
  useEffect(() => {
    if (isAnswered) {
      setStyleForBadge("question-status-square-answered");
    } else if (isNotAnswered) {
      setStyleForBadge("question-status-square-not-answered");
    } else if (isVisited) {
      setStyleForBadge("question-status-square-not-visited");
    } else if (isFlagged) {
      setStyleForBadge("question-status-square-flagged");
    }
  }, [isAnswered, isNotAnswered, isVisited, isFlagged]);

  return (
    <div
      className={`question-status-square  question-status-square-not-answered styleForTheBadge ${styleForTheBadge}`}
    >
      {number}
    </div>
  );
};

export default QuestionStatusBadge;
