import React, { createContext, useState, ReactNode } from "react";

export interface ResponseData {
  questionNumber: number | null;
  clickedOptionIndex: number | null;
  correctOptionIndex: number | null;
}

export interface QuestionCardContextValue {
  candidateResponse: Map<number, ResponseData>;
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
  candidateResponse: new Map(),
  handleSaveAnswer: () => {},
  visitedQuestions: new Set(),
  markQuestionAsVisited: () => {},
  clearResponseFromContext: () => {},
});

const QuestionCardContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [candidateResponse, setCandidateResponse] = useState<Map<number, ResponseData>>(new Map());
  //contains the visited question numbers 
  const [visitedQuestions, setVisitedQuestions] = useState<Set<number>>(
    new Set()
  );

  const handleSaveAnswer = (questionData: {
    selectedOptionIndex: number;
    correctOptionIndex: number;
    questionNumber: number;
  }) => {
    const { selectedOptionIndex, correctOptionIndex, questionNumber } = questionData;
    const dataToPush: ResponseData = {
      clickedOptionIndex: selectedOptionIndex,
      correctOptionIndex: correctOptionIndex,
      questionNumber: questionNumber,
    };

    setCandidateResponse((prev) => {
      const updatedResponses = new Map(prev);
      updatedResponses.set(questionNumber, dataToPush);
      return updatedResponses;
    });
  };

  const clearResponseFromContext = (questionNumber: number) => {
    setCandidateResponse((prev) => {
      const updatedResponses = new Map(prev);
      updatedResponses.delete(questionNumber);
      return updatedResponses;
    });
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
