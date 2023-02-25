import { questionList } from "../../../data/sampleData";
import QuestionStatusBadge from "../../components/questionstatusbadge";

const StatusCard = () => {
  return (
    <div className="status-card-root mt-3">
      <div className="status-card-title d-flex justify-content-center">
        Exam Status
      </div>
      <div className="d-flex flex-wrap justify-content-center question-list-container">
        {questionList.map((item) => (
          <div className="m-2">
            <QuestionStatusBadge data={item} />
          </div>
        ))}
      </div>
      <div>Red:Visited but not answered Green:Answered Yellow:Visited</div>
    </div>
  );
};

export default StatusCard;
