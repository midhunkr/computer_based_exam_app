import { Radio } from "antd";
import { useState } from "react";
const QuestionCard = ({
  styleClassName = "",
  questionAnswerData = {
    question: "",
    options: [],
    correctOptionIndex: null,
    questionNumber: null,
  },
}) => {
  const [selectedOption, setSelectedOption] = useState();
  const handleOptionClick = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className={`question-card-root ${styleClassName}`}>
      <div>
        {questionAnswerData.questionNumber}.{questionAnswerData.question}
      </div>
      <div className="p-3">
        <Radio.Group onChange={handleOptionClick} value={selectedOption}>
          {questionAnswerData.options?.map?.((item, index) => (
            <div key={item}>
              <Radio value={index}>{item}</Radio>
            </div>
          ))}
          {/* <div>
            <Radio value={1} defaultChecked={false}>
              A
            </Radio>
          </div>
          <div>
            <Radio value={2}>B</Radio>
          </div>
          <div>
            <Radio value={3}>C</Radio>
          </div>
          <div>
            <Radio value={4}>D</Radio>
          </div> */}
        </Radio.Group>
      </div>
    </div>
  );
};
export default QuestionCard;
