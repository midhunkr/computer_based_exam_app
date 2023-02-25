import { useEffect, useState } from "react";

const QuestionStatusBadge = ({
  questionNumber = null,
  isQuestionAnswered = false,
  isQuestionVisited = false,
  isQuestionNotAnswered = false,
  isQuestionFlagged = false,
}) => {
  const [styleForTheBadge, setStyleForBadge] = useState();
  useEffect(() => {
    if (isQuestionAnswered) {
      setStyleForBadge("question-status-square-answered");
    } else if (isQuestionNotAnswered) {
      setStyleForBadge("question-status-square-not-answered");
    } else if (isQuestionVisited) {
      setStyleForBadge("question-status-square-not-visited");
    } else if (isQuestionFlagged) {
      setStyleForBadge("question-status-square-flagged");
    }
  }, [
    isQuestionAnswered,
    isQuestionVisited,
    isQuestionNotAnswered,
    isQuestionFlagged,
  ]);

  return (
    <div
      className={`question-status-square  question-status-square-not-answered styleForTheBadge ${styleForTheBadge}`}
    >
      {questionNumber}
    </div>
  );
};

export default QuestionStatusBadge;
