import React, { useEffect, useState } from "react";

interface QuestionStatusBadgeProps {
  number: number;
  isAnswered: boolean;
  isVisited: boolean;
  isFlagged: boolean;
}

/**
 * We have used memo to prevent unnecessary renders
 * only components whose props have change 
 * should re-render (of course after the initial-render)
 * 
 */
const QuestionStatusBadge: React.FC<QuestionStatusBadgeProps> = React.memo(
  ({ number, isAnswered, isVisited, isFlagged=false }: QuestionStatusBadgeProps) => {
    const [styleForTheBadge, setStyleForBadge] = useState<string>(
      "question-status-square-not-answered"
    );
    console.log("changed",isAnswered, isVisited, isFlagged,number)

    useEffect(() => {
      if (isAnswered) {
        setStyleForBadge("question-status-square-answered");
      } else if (isVisited) {
        setStyleForBadge("question-status-square-visited");
      } else if (isFlagged) {
        setStyleForBadge("question-status-square-flagged");
      } else {
        setStyleForBadge("question-status-square-not-answered");
      }
    }, [isAnswered, isVisited, isFlagged]);

    return (
      <div className={`question-status-square ${styleForTheBadge}`}>
        {number}
      </div>
    );
  }
);

export default QuestionStatusBadge;
