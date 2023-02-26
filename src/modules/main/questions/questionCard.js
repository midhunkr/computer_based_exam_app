import { Radio } from "antd";
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { QuestionCardContext } from "../../../context/QuestionContext";
const QuestionCard = ({
  styleClassName = "",
  questionAnswerData = {
    question: "",
    options: [],
    correctOptionIndex: null,
    questionNumber: null,
  },
}) => {
  //context
  const {
    candidateResponse,
    handleSaveAnswer,
    markQuestionAsVisited,
    clearResponseFromContext,
  } = useContext(QuestionCardContext);

  //states
  const [selectedOption, setSelectedOption] = useState(null);

  //callback
  const handleOptionClick = (e) => {
    let dataToRegister = {
      selectedOptionIndex: e.target.value,
      correctOptionIndex: questionAnswerData.correctOptionIndex,
      questionNumber: questionAnswerData.questionNumber,
    };
    handleSaveAnswer(dataToRegister);
    setSelectedOption(e.target.value);
  };
  const handleClearResponse = () => {
    setSelectedOption(null);
    clearResponseFromContext(questionAnswerData.questionNumber);
  };

  useEffect(() => {
    //to clear the previous questions response
    setSelectedOption(null);
    markQuestionAsVisited(questionAnswerData.questionNumber);
    let responseArrayIndex = candidateResponse?.findIndex(
      (response) =>
        response.questionNumber === questionAnswerData.questionNumber
    );
    setSelectedOption(
      candidateResponse[responseArrayIndex]?.clickedOPtionIndex
    );
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
        <Button
          onClick={handleClearResponse}
          color="#E5D1FA"
          id="clear_response_button"
        >
          Clear Response
        </Button>
      </div>
    </div>
  );
};
export default QuestionCard;
