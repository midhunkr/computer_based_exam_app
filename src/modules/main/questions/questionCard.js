import { Radio } from "antd";
import { Button } from "antd";
import { useEffect, useState } from "react";
const QuestionCard = ({
  styleClassName = "",
  questionAnswerData = {
    question: "",
    options: [],
    correctOptionIndex: null,
    questionNumber: null,
  },
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleClearResponse = () => {
    setSelectedOption(null);
  };

  useEffect(() => {
    //to clear the previous questions response
    handleClearResponse();
  }, [questionAnswerData.questionNumber]);

  return (
    <div className={`question-card-root ${styleClassName}`}>
      <div className="question-title p-3">
        {questionAnswerData.questionNumber}.{questionAnswerData.question}
      </div>
      <div className="p-3">
        <Radio.Group onChange={handleOptionClick} value={selectedOption}>
          {questionAnswerData.options?.map?.((item, index) => (
            <div key={item}>
              <Radio value={index} className="question-options">
                {item}
              </Radio>
            </div>
          ))}
        </Radio.Group>
      </div>
      <div className="p-3">
        <Button onClick={handleClearResponse} color="#E5D1FA">Clear Response</Button>
      </div>
    </div>
  );
};
export default QuestionCard;
