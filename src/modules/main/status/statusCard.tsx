import QuestionStatusBadge from "../../components/questionstatusbadge";
import { questionAnswerCollection } from "../../../data/sampleData";
import { useContext } from "react";
import { QuestionCardContext } from "../../../context/QuestionContext";
import { v4 as uuidv4 } from "uuid";

const StatusCard = () => {
  // Context
  const { visitedQuestions, candidateResponse } =
    useContext(QuestionCardContext);

  return (
    <div className="status-card-root mt-3">
      <div className="status-card-title d-flex justify-content-center">
        Exam Status
      </div>
      <div className="d-flex flex-wrap justify-content-center question-list-container">
        {questionAnswerCollection.map((question) => (
          <div className="m-2" key={question.questionNumber}>
            <QuestionStatusBadge
              isAnswered={candidateResponse.has(question.questionNumber)}
              isVisited={visitedQuestions.has(question.questionNumber)}
              number={question.questionNumber}
              isFlagged={false}
            />
          </div>
        ))}
      </div>
      <div className="d-flex flex-column gap-1 p-2">
        <div className="d-flex align-items-center gap-1">
          <QuestionStatusBadge
            isAnswered={false}
            isFlagged={false}
            isVisited={false}
            number={1}
          />
          <div>Red: Not visited</div>
        </div>
        <div className="d-flex align-items-center gap-1">
          <QuestionStatusBadge
            isAnswered={false}
            isFlagged={false}
            isVisited={true}
            number={1}
          />
          <div>Gray: Visited</div>
        </div>
        <div className="d-flex align-items-center gap-1">
          <QuestionStatusBadge
            isAnswered={true}
            isFlagged={false}
            isVisited={false}
            number={1}
          />
          <div>Green: Answered</div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
