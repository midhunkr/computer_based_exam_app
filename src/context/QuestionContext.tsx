import React, { createContext, useState, ReactNode } from "react";

export interface ResponseData {
  questionNumber: number | null;
  clickedOptionIndex: number | null;
  correctOptionIndex: number | null;
}

export interface QuestionCardContextValue {
  candidateResponse: ResponseData[];
  handleSaveAnswer: (questionData: {
    selectedOptionIndex: number;
    correctOptionIndex: number;
    questionNumber: number;
  }) => void;
  visitedQuestions: Set<number>;
  markQuestionAsVisited: (questionNumber: number) => void;
  clearResponseFromContext: (questionNumber: number) => void;
}

export const QuestionCardContext = createContext<QuestionCardContextValue>({
  candidateResponse: [],
  handleSaveAnswer: () => {},
  visitedQuestions: new Set(),
  markQuestionAsVisited: () => {},
  clearResponseFromContext: () => {},
});

const QuestionCardContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [candidateResponse, setCandidateResponse] = useState<ResponseData[]>([]);
  const [visitedQuestions, setVisitedQuestions] = useState<Set<number>>(
    new Set()
  );

  const handleSaveAnswer = (questionData: {
    selectedOptionIndex: number;
    correctOptionIndex: number;
    questionNumber: number;
  }) => {
    let dataToPush: ResponseData = {
      clickedOptionIndex: questionData.selectedOptionIndex,
      correctOptionIndex: questionData.correctOptionIndex,
      questionNumber: questionData.questionNumber,
    };
    const existingResponseIndex = candidateResponse.findIndex(
      (response) => response.questionNumber === dataToPush.questionNumber
    );
    if (existingResponseIndex !== -1) {
      setCandidateResponse((prev) => {
        const updatedResponses = [...prev];
        updatedResponses[existingResponseIndex] = dataToPush;
        return updatedResponses;
      });
    } else {
      setCandidateResponse((prev) => [...prev, dataToPush]);
    }
  };

  const clearResponseFromContext = (questionNumber: number) => {
    const responseIndex = candidateResponse.findIndex(
      (response) => response.questionNumber === questionNumber
    );

    if (responseIndex !== -1) {
      setCandidateResponse((prev) => {
        const updatedResponses = [...prev];
        updatedResponses.splice(responseIndex, 1);
        return updatedResponses;
      });
    }
  };

  const markQuestionAsVisited = (questionNumber: number) => {
    setVisitedQuestions((prev) => new Set(prev.add(questionNumber)));
  };

  return (
    <QuestionCardContext.Provider
      value={{
        candidateResponse,
        handleSaveAnswer,
        visitedQuestions,
        markQuestionAsVisited,
        clearResponseFromContext,
      }}
    >
      {children}
    </QuestionCardContext.Provider>
  );
};

export default QuestionCardContextProvider;
