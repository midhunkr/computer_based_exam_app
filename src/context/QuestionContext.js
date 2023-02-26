import { createContext, useState } from "react";

export const QuestionCardContext = createContext();

const QuestionCardContextProvider = ({ children }) => {
  const [candidateResponse, setCandidateResponse] = useState([
    // {
    //   questionNumber: null,
    //   clickedOPtionIndex: null,
    //   correctOptionIndex: null,
    // },
  ]);
  const [visitedQuestions, setVisitedQuestions] = useState(new Set());

  const handleSaveAnswer = (questionData) => {
    let dataToPush = {
      clickedOPtionIndex: questionData.selectedOptionIndex,
      correctOptionIndex: questionData.correctOptionIndex,
      questionNumber: questionData.questionNumber,
    };
    const existingResponseIndex = candidateResponse.findIndex(
      (response) => response.questionNumber === dataToPush.questionNumber
    );
    if (existingResponseIndex !== -1) {
      // Update the existing response object instead of adding a new one
      setCandidateResponse((prev) => {
        const updatedResponses = [...prev];
        updatedResponses[existingResponseIndex] = dataToPush;
        return updatedResponses;
      });
    } else {
      // Add the new response object to the candidate response array
      setCandidateResponse((prev) => [...prev, dataToPush]);
    }
  };

  const clearResponseFromContext = (questionNumber) => {
    // Find the index of the response object corresponding to the specified question number
    const responseIndex = candidateResponse.findIndex(
      (response) => response.questionNumber === questionNumber
    );

    // If the response object exists in the array, remove it
    if (responseIndex !== -1) {
      setCandidateResponse((prev) => {
        const updatedResponses = [...prev];
        updatedResponses.splice(responseIndex, 1);
        return updatedResponses;
      });
    }
  };

  const markQuestionAsVisited = (questionNumber) => {
    setVisitedQuestions((prev) => prev.add(questionNumber));
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
