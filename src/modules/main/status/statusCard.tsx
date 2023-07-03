import { questionList } from "../../../data/sampleData";
import QuestionStatusBadge from "../../components/questionstatusbadge";
import { questionAnswerCollection } from "../../../data/sampleData";

const StatusCard = () => {
  return (
    <div className="status-card-root mt-3">
      <div className="status-card-title d-flex justify-content-center">
        Exam Status
      </div>
      <div className="d-flex flex-wrap justify-content-center question-list-container">
        {questionAnswerCollection.map((item) => (
          <div className="m-2" key={item.number}>
            <QuestionStatusBadge data={item} />
          </div>
        ))}
      </div>
      <div>Red:Not visited Green:Answered Yellow:Visited</div>
    </div>
  );
};

export default StatusCard;
