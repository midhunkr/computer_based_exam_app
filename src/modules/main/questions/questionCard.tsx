import { Radio, Button, RadioChangeEvent } from "antd";
import { useContext, useEffect, useState } from "react";
import { QuestionCardContext, QuestionCardContextValue } from "../../../context/QuestionContext";

interface QuestionAnswerData {
  question: string;
  options: string[];
  correctOptionIndex: number | null;
  questionNumber: number | null;
}

interface QuestionCardProps {
  styleClassName?: string;
  questionAnswerData?: QuestionAnswerData;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  styleClassName = "",
  questionAnswerData = {
    question: "",
    options: [],
    correctOptionIndex: null,
    questionNumber: null,
  },
}) => {
  // Context
  const {
    candidateResponse,
    handleSaveAnswer,
    markQuestionAsVisited,
    clearResponseFromContext,
  } = useContext<QuestionCardContextValue>(QuestionCardContext);

  // States
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Callback
  const handleOptionClick = (e: RadioChangeEvent) => {
    const dataToRegister = {
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
    // To clear the previous question's response
    setSelectedOption(null);
    markQuestionAsVisited(questionAnswerData.questionNumber);
    const response = candidateResponse.get(questionAnswerData.questionNumber);
    setSelectedOption(response?.clickedOptionIndex ?? null);
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
        <Button onClick={handleClearResponse} id="clear_response_button">
          Clear Response
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;
